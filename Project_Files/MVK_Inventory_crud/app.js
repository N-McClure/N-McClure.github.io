const SHEET_ID = '1_n5CzwP8JCwvPjhzdJipJY9EdJGgMomN7mXKJYcD8to';
const GOOGLE_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzq_x2YpSjYyDAa6Vh-cHuxgDHjtHU2uiMfe3lk3bjeCYD69olDN101yit78hABGZ0a/exec'; 

let currentGid = '1812049056'; // Default initial tab
let dashboardData = [];
let dataHeaders = [];

window.addEventListener('DOMContentLoaded', () => {
    const savedGid = localStorage.getItem('current_gid');
    if (savedGid) {
        currentGid = savedGid;
        document.getElementById('tabSelector').value = currentGid;
    }
    initializeDashboard();
});

function initializeDashboard() {
    const storedData = localStorage.getItem(`gs_crud_data_${currentGid}`);
    const storedHeaders = localStorage.getItem(`gs_crud_headers_${currentGid}`);

    if (storedData && storedHeaders) {
        dashboardData = JSON.parse(storedData);
        dataHeaders = JSON.parse(storedHeaders);
        updateStatus(`Using cached local changes for tab ${currentGid}.`);
        renderViews();
    } else {
        loadGoogleSheetData();
    }
}

function switchTab(newGid) {
    currentGid = newGid;
    localStorage.setItem('current_gid', currentGid);
    initializeDashboard();
}

async function loadGoogleSheetData() {
    updateStatus(`Fetching tab ${currentGid} data...`);
    const googleApiUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${currentGid}`;
    
    try {
        const response = await fetch(googleApiUrl);
        if (!response.ok) throw new Error('Network failure reading spreadsheet.');
        
        const rawText = await response.text();
        const jsonString = rawText.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/)[1];
        const data = JSON.parse(jsonString);
        
        parseGoogleJson(data);
        updateStatus("Synced cleanly with Google Sheets!");
    } catch (error) {
        console.error(error);
        updateStatus("Sync error. Verify permission accesses or reset modifications.");
        if (dashboardData.length === 0) {
            dataHeaders = ['Column 1', 'Column 2', 'Column 3'];
            renderViews();
        }
    }
}

function parseGoogleJson(googleData) {
    const table = googleData.table;
    
    // 1. Filter out empty, explicit "column", single-letter placeholder, and calculations columns
    dataHeaders = table.cols.map((col, index) => {
        if (col.label && col.label.trim() !== "") {
            return col.label.trim();
        }
        if (index === 0 && currentGid === '1812049056') return '# Of Copies';
        return col.id || '';
    }).filter(label => {
        const cleanLabel = label.toLowerCase().trim();
        // Discard labels that match blank fields, auto-generated letters (A-Z), or structural summaries
        if (cleanLabel === '' || cleanLabel === 'column') return false;
        if (/^[a-z]$/.test(cleanLabel)) return false; 
        if (cleanLabel === 'total' || cleanLabel === 'amount' || cleanLabel === 'count') return false;
        return true;
    });
        
    dashboardData = [];

    table.rows.forEach(row => {
        let rowObject = {};
        let hasData = false;

        dataHeaders.forEach((header, index) => {
            const cell = row.c[index];
            let value = cell ? (cell.v !== null ? String(cell.v).trim() : '') : '';
            
            // Clean out stray 'Total' or summary calculation text appearing within primary lines
            if (value.toLowerCase() === 'total' || value === '457') {
                value = '';
            }

            rowObject[header] = value;
            if (value !== '') hasData = true;
        });

        // Ensure row data lines are valid records, skipping summaries
        if (hasData) {
            const rowValues = Object.values(rowObject).map(v => v.toLowerCase());
            if (!rowValues.includes('total')) {
                dashboardData.push(rowObject);
            }
        }
    });

    saveToStorage();
    renderViews();
}

function renderViews() {
    const headerRow = document.getElementById('table-headers');
    const tableBody = document.getElementById('table-body');
    const mobileContainer = document.getElementById('mobileViewContainer');

    headerRow.innerHTML = dataHeaders.map(h => `<th>${escapeHtml(h)}</th>`).join('') + '<th>Actions</th>';

    if (dashboardData.length === 0) {
        const noRecordsHtml = `<div class="no-records">No entries found. Adjust settings or resync parameters.</div>`;
        tableBody.innerHTML = `<tr><td colspan="${dataHeaders.length + 1}" style="text-align:center;">No entries found.</td></tr>`;
        mobileContainer.innerHTML = noRecordsHtml;
        return;
    }

    // Desktop
    tableBody.innerHTML = dashboardData.map((row, index) => {
        const cells = dataHeaders.map(header => `<td>${escapeHtml(row[header] || '')}</td>`).join('');
        return `<tr>${cells}<td><div class="row-actions"><button class="btn btn-sec" onclick="openModal(${index})">Edit</button><button class="btn btn-danger" onclick="deleteEntry(${index})">Delete</button></div></td></tr>`;
    }).join('');

    // Mobile
    mobileContainer.innerHTML = dashboardData.map((row, index) => {
        const fieldRows = dataHeaders.map(header => `
            <div class="mobile-field">
                <span class="mobile-label">${escapeHtml(header)}</span>
                <span class="mobile-value">${escapeHtml(row[header] || '—')}</span>
            </div>
        `).join('');

        return `
            <div class="mobile-card">
                ${fieldRows}
                <div class="mobile-actions">
                    <button class="btn btn-sec" onclick="openModal(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteEntry(${index})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function handleFormSubmit(event) {
    event.preventDefault();
    const index = document.getElementById('editIndex').value;
    
    let targetRow = {};
    dataHeaders.forEach(header => {
        targetRow[header] = document.getElementById(`field-${header}`).value;
    });

    if (index === '') {
        dashboardData.push(targetRow);
    } else {
        dashboardData[parseInt(index)] = targetRow;
    }

    saveToStorage();
    renderViews();
    closeModal();
}

function deleteEntry(index) {
    if (confirm('Drop this record from local storage?')) {
        dashboardData.splice(index, 1);
        saveToStorage();
        renderViews();
    }
}

function exportToCSV() {
    if (dashboardData.length === 0) return alert('No compilation values found to export.');
    const csvRows = [];
    csvRows.push(dataHeaders.map(h => `"${h.replace(/"/g, '""')}"`).join(','));

    for (const row of dashboardData) {
        const values = dataHeaders.map(header => `"${(String(row[header] || '')).replace(/"/g, '""')}"`);
        csvRows.push(values.join(','));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `dashboard_tab_${currentGid}.csv`);
    a.click();
}

async function saveToGoogleSheets() {
    if (!GOOGLE_WEB_APP_URL || GOOGLE_WEB_APP_URL.includes('https://script.google.com/macros/s/AKfycbzq_x2YpSjYyDAa6Vh-cHuxgDHjtHU2uiMfe3lk3bjeCYD69olDN101yit78hABGZ0a/exec')) {
        alert("Please configure your GOOGLE_WEB_APP_URL at the top of app.js first.");
        return;
    }
    if (!confirm(`Overwrite live Google Sheet tab (ID: ${currentGid}) with your current dashboard alterations?`)) return;

    updateStatus("Pushing modifications to live Google Sheet...");
    const payload = {
        gid: currentGid,
        headers: dataHeaders,
        data: dashboardData
    };

    try {
        const response = await fetch(GOOGLE_WEB_APP_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.status === "success") {
            updateStatus("Live Sheet updated successfully!");
            alert("Changes successfully written to the online spreadsheet!");
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error(error);
        updateStatus("Failed to save to Google Sheets.");
        alert("Error saving data: " + error.message);
    }
}

function openModal(index = null) {
    const modal = document.getElementById('entryModal');
    const title = document.getElementById('modalTitle');
    const formFields = document.getElementById('formFields');
    const editIndexInput = document.getElementById('editIndex');

    formFields.innerHTML = '';
    
    dataHeaders.forEach(header => {
        const value = index !== null ? dashboardData[index][header] : '';
        formFields.innerHTML += `
            <div class="form-group">
                <label for="field-${header}">${escapeHtml(header)}</label>
                <input type="text" id="field-${header}" value="${escapeHtml(value)}">
            </div>
        `;
    });

    if (index !== null) {
        title.innerText = 'Edit Record';
        editIndexInput.value = index;
    } else {
        title.innerText = 'Add New Record';
        editIndexInput.value = '';
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('entryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function saveToStorage() {
    localStorage.setItem(`gs_crud_data_${currentGid}`, JSON.stringify(dashboardData));
    localStorage.setItem(`gs_crud_headers_${currentGid}`, JSON.stringify(dataHeaders));
}

function clearLocalData() {
    if (confirm(`Discard modifications and pull fresh values for tab ${currentGid}?`)) {
        localStorage.removeItem(`gs_crud_data_${currentGid}`);
        localStorage.removeItem(`gs_crud_headers_${currentGid}`);
        loadGoogleSheetData();
    }
}

function updateStatus(msg) {
    document.getElementById('statusText').innerText = msg;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}