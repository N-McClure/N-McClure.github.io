const SHEET_ID = '1_n5CzwP8JCwvPjhzdJipJY9EdJGgMomN7mXKJYcD8to';
const GID = '1812049056'; // Targets the specific tab with the data
const GOOGLE_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

let dashboardData = [];
let dataHeaders = [];

window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('gs_crud_data');
    const storedHeaders = localStorage.getItem('gs_crud_headers');

    if (storedData && storedHeaders) {
        dashboardData = JSON.parse(storedData);
        dataHeaders = JSON.parse(storedHeaders);
        updateStatus("Using cached data with local modifications.");
        renderViews();
    } else {
        loadGoogleSheetCSV();
    }
});

async function loadGoogleSheetCSV() {
    updateStatus("Fetching latest spreadsheet data...");
    try {
        const response = await fetch(GOOGLE_CSV_URL);
        if (!response.ok) throw new Error('Network failure reading spreadsheet.');
        const text = await response.text();
        parseCSV(text);
        updateStatus("Synced with Google Sheets!");
    } catch (error) {
        console.error(error);
        updateStatus("Sync error. Please confirm spreadsheet sharing access settings.");
        if (dashboardData.length === 0) {
            dataHeaders = ['ID', 'Item Name', 'Quantity', 'Status'];
            renderViews();
        }
    }
}

function parseCSV(text) {
    const lines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line);
    if (lines.length === 0) return;

    dataHeaders = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
    dashboardData = [];

    for (let i = 1; i < lines.length; i++) {
        const matches = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
        const values = matches.map(v => v.replace(/^"|"$/g, '').trim());

        if (values.length >= dataHeaders.length) {
            let rowObject = {};
            dataHeaders.forEach((header, index) => {
                rowObject[header] = values[index] || '';
            });
            dashboardData.push(rowObject);
        }
    }
    saveToStorage();
    renderViews();
}

function renderViews() {
    const headerRow = document.getElementById('table-headers');
    const tableBody = document.getElementById('table-body');
    const mobileContainer = document.getElementById('mobileViewContainer');

    headerRow.innerHTML = dataHeaders.map(h => `<th>${escapeHtml(h)}</th>`).join('') + '<th>Actions</th>';

    if (dashboardData.length === 0) {
        const noRecordsHtml = `<div class="no-records">No entries found. Adjust changes or resync parameters.</div>`;
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
        updateStatus("Added entry locally.");
    } else {
        dashboardData[parseInt(index)] = targetRow;
        updateStatus("Modified entry locally.");
    }

    saveToStorage();
    renderViews();
    closeModal();
}

function deleteEntry(index) {
    if (confirm('Drop this record from local storage?')) {
        dashboardData.splice(index, 1);
        updateStatus("Removed record locally.");
        saveToStorage();
        renderViews();
    }
}

function exportToCSV() {
    if (dashboardData.length === 0) return alert('No compilation values found to export.');
    
    const csvRows = [];
    csvRows.push(dataHeaders.map(h => `"${h.replace(/"/g, '""')}"`).join(','));

    for (const row of dashboardData) {
        const values = dataHeaders.map(header => `"${('' + (row[header] || '')).replace(/"/g, '""')}"`);
        csvRows.push(values.join(','));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'dashboard_export.csv');
    a.click();
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
    localStorage.setItem('gs_crud_data', JSON.stringify(dashboardData));
    localStorage.setItem('gs_crud_headers', JSON.stringify(dataHeaders));
}

function clearLocalData() {
    if (confirm('Discard changes and rebuild cache directly from Google Sheets?')) {
        localStorage.removeItem('gs_crud_data');
        localStorage.removeItem('gs_crud_headers');
        loadGoogleSheetCSV();
    }
}

function updateStatus(msg) {
    document.getElementById('statusText').innerText = msg;
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}