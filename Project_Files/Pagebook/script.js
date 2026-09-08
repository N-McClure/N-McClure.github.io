// State loaded strictly from localStorage
let loggedEntries = JSON.parse(localStorage.getItem('pagebound_entries')) || [];
let wantToReadList = JSON.parse(localStorage.getItem('pagebound_watchlist')) || [];

let selectedBook = null;
let currentRating = 5;
let editingReviewId = null;

// --- DOM Elements ---
const wantToReadGrid = document.getElementById('wantToReadGrid');
const wantToReadCount = document.getElementById('wantToReadCount');
const reviewFeed = document.getElementById('reviewFeed');
const reviewsCount = document.getElementById('reviewsCount');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const submitBtn = document.getElementById('submitBtn');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const logForm = document.getElementById('logForm');
const starInput = document.getElementById('starInput');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const selectedPreview = document.getElementById('selectedPreview');
const searchGroup = document.getElementById('searchGroup');

// --- Open Library API Fetch ---
let debounceTimer;
searchInput.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  const query = e.target.value.trim();

  if (query.length < 2) {
    searchResults.classList.remove('active');
    return;
  }

  debounceTimer = setTimeout(() => {
    fetchBooksFromAPI(query);
  }, 400);
});

async function fetchBooksFromAPI(query) {
  searchResults.innerHTML = '<div class="search-item"><span>Searching Open Library...</span></div>';
  searchResults.classList.add('active');

  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6`);
    const data = await response.json();

    if (!data.docs || data.docs.length === 0) {
      searchResults.innerHTML = '<div class="search-item"><span>No books found.</span></div>';
      return;
    }

    searchResults.innerHTML = data.docs.map(doc => {
      const title = doc.title || 'Unknown Title';
      const author = doc.author_name ? doc.author_name[0] : 'Unknown Author';
      const year = doc.first_publish_year || 'N/A';
      const cover = doc.cover_i 
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` 
        : ''; // Empty string if no cover

      const id = doc.key || `id_${Date.now()}_${Math.random()}`;
      const bookObj = JSON.stringify({ id, title, author, year, cover }).replace(/"/g, '&quot;');

      const imgTag = cover 
        ? `<img src="${cover}" alt="" onerror="this.style.display='none'">` 
        : '';

      return `
        <div class="search-item">
          <div class="search-item-info-wrap">
            <div class="search-thumb-wrap">${imgTag}</div>
            <div class="search-item-info">
              <span class="search-item-title">${title}</span>
              <span class="search-item-author">${author} (${year})</span>
            </div>
          </div>
          <div class="search-actions">
            <button type="button" class="btn-action-sm blue-hover" onclick="addToWantToRead(${bookObj})">+ Want to Read</button>
            <button type="button" class="btn-action-sm" onclick="selectBookForReview(${bookObj})">Log / Review</button>
          </div>
        </div>
      `;
    }).join('');

  } catch (err) {
    console.error("Open Library API Error:", err);
    searchResults.innerHTML = '<div class="search-item"><span>Error fetching results.</span></div>';
  }
}

// --- WATCHLIST (WANT TO READ) CRUD ---

function addToWantToRead(book) {
  if (!wantToReadList.some(item => item.title.toLowerCase() === book.title.toLowerCase())) {
    wantToReadList.push(book);
    saveWatchlist();
  }
  searchResults.classList.remove('active');
  searchInput.value = '';
}

function renderWantToRead() {
  wantToReadCount.textContent = wantToReadList.length;

  if (wantToReadList.length === 0) {
    wantToReadGrid.innerHTML = `
      <div class="empty-state">
        Your "Want to Read" list is empty. Click "+ Search / Log Book" to start adding books!
      </div>
    `;
    return;
  }

  wantToReadGrid.innerHTML = wantToReadList.map(book => {
    const bookObj = JSON.stringify(book).replace(/"/g, '&quot;');
    const imgTag = book.cover 
      ? `<img class="cover-img" src="${book.cover}" alt="" onerror="this.style.display='none'">` 
      : '';

    return `
      <div class="book-card">
        <div class="cover-wrapper">${imgTag}</div>
        <div class="overlay">
          <div>
            <div class="overlay-title">${escapeHTML(book.title)}</div>
            <div class="overlay-author">${escapeHTML(book.author)}</div>
          </div>
          <div class="overlay-actions">
            <button type="button" class="btn-overlay" onclick="openLogForWantToReadBook(${bookObj})">Log Review</button>
            <button type="button" class="btn-overlay delete" onclick="deleteFromWantToRead('${book.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function deleteFromWantToRead(id) {
  wantToReadList = wantToReadList.filter(book => book.id !== id);
  saveWatchlist();
}

function saveWatchlist() {
  localStorage.setItem('pagebound_watchlist', JSON.stringify(wantToReadList));
  renderWantToRead();
}

// --- REVIEWS CRUD ---

function renderReviews() {
  reviewsCount.textContent = loggedEntries.length;

  if (loggedEntries.length === 0) {
    reviewFeed.innerHTML = `
      <div class="empty-state">
        No reviews saved in local storage. Search for a book to log your first review!
      </div>
    `;
    return;
  }

  reviewFeed.innerHTML = loggedEntries.map(entry => {
    const stars = '★'.repeat(entry.rating) + '☆'.repeat(5 - entry.rating);
    const imgTag = entry.cover 
      ? `<img src="${entry.cover}" alt="" onerror="this.style.display='none'">` 
      : '';

    return `
      <div class="review-card">
        <div class="review-poster-wrap">${imgTag}</div>
        <div class="review-content">
          <div class="review-header">
            <div>
              <span class="review-book-title">${escapeHTML(entry.title)}</span>
              <div class="review-author">${escapeHTML(entry.author)} (${entry.year})</div>
            </div>
            <div class="review-controls">
              <button class="btn-text-action" onclick="editReview('${entry.id}')">Edit</button>
              <button class="btn-text-action delete-hover" onclick="deleteReview('${entry.id}')">Delete</button>
            </div>
          </div>
          <div class="stars">${stars}</div>
          <p class="review-text">${escapeHTML(entry.review)}</p>
        </div>
      </div>
    `;
  }).join('');
}

function editReview(id) {
  const entry = loggedEntries.find(item => item.id === id);
  if (!entry) return;

  editingReviewId = id;
  modalTitle.textContent = "Edit Review";
  submitBtn.textContent = "Update Review";

  selectedBook = {
    id: entry.id,
    title: entry.title,
    author: entry.author,
    year: entry.year,
    cover: entry.cover
  };

  searchGroup.style.display = 'none';
  selectedPreview.style.display = 'flex';
  selectedPreview.className = 'selected-book-preview';
  
  const imgTag = entry.cover 
    ? `<img src="${entry.cover}" alt="" onerror="this.style.display='none'">` 
    : '';

  selectedPreview.innerHTML = `
    <div class="selected-preview-thumb">${imgTag}</div>
    <div class="selected-book-details">
      <div>${escapeHTML(entry.title)}</div>
      <div>${escapeHTML(entry.author)} (${entry.year})</div>
    </div>
  `;

  currentRating = entry.rating;
  updateStarUI();

  document.getElementById('reviewText').value = entry.review;
  modalBackdrop.classList.add('active');
}

function deleteReview(id) {
  if (confirm("Are you sure you want to delete this review?")) {
    loggedEntries = loggedEntries.filter(item => item.id !== id);
    saveReviews();
  }
}

function saveReviews() {
  localStorage.setItem('pagebound_entries', JSON.stringify(loggedEntries));
  renderReviews();
}

// --- Selection & Form Handling ---
function selectBookForReview(book) {
  selectedBook = book;
  searchResults.classList.remove('active');
  searchGroup.style.display = 'none';

  selectedPreview.style.display = 'flex';
  selectedPreview.className = 'selected-book-preview';

  const imgTag = book.cover 
    ? `<img src="${book.cover}" alt="" onerror="this.style.display='none'">` 
    : '';

  selectedPreview.innerHTML = `
    <div class="selected-preview-thumb">${imgTag}</div>
    <div class="selected-book-details">
      <div>${escapeHTML(book.title)}</div>
      <div>${escapeHTML(book.author)} (${book.year})</div>
    </div>
    <button type="button" style="background:none; border:none; color:var(--accent-orange); cursor:pointer; font-size:0.8rem;" onclick="resetSelectedBook()">Change</button>
  `;
}

function resetSelectedBook() {
  selectedBook = null;
  selectedPreview.style.display = 'none';
  searchGroup.style.display = 'block';
  searchInput.value = '';
}

function openLogForWantToReadBook(book) {
  modalBackdrop.classList.add('active');
  selectBookForReview(book);
}

logForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!selectedBook) {
    alert("Please search and select a book first!");
    return;
  }

  if (editingReviewId) {
    loggedEntries = loggedEntries.map(entry => {
      if (entry.id === editingReviewId) {
        return {
          ...entry,
          rating: currentRating,
          review: document.getElementById('reviewText').value
        };
      }
      return entry;
    });
  } else {
    const newEntry = {
      id: Date.now().toString(),
      title: selectedBook.title,
      author: selectedBook.author,
      year: selectedBook.year,
      cover: selectedBook.cover,
      rating: currentRating,
      review: document.getElementById('reviewText').value
    };

    loggedEntries.unshift(newEntry);
    wantToReadList = wantToReadList.filter(b => b.title.toLowerCase() !== selectedBook.title.toLowerCase());
    saveWatchlist();
  }

  saveReviews();
  closeModal();
});

// --- Star Rating Handler ---
starInput.addEventListener('click', (e) => {
  if (e.target.dataset.value) {
    currentRating = parseInt(e.target.dataset.value);
    updateStarUI();
  }
});

function updateStarUI() {
  Array.from(starInput.children).forEach((star, idx) => {
    star.classList.toggle('active', idx < currentRating);
  });
}

// --- Modal Management ---
openModalBtn.addEventListener('click', () => {
  editingReviewId = null;
  modalTitle.textContent = "Log a Book";
  submitBtn.textContent = "Save Review";
  modalBackdrop.classList.add('active');
});

closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  modalBackdrop.classList.remove('active');
  resetSelectedBook();
  logForm.reset();
  currentRating = 5;
  editingReviewId = null;
  updateStarUI();
}

document.addEventListener('click', (e) => {
  if (!searchGroup.contains(e.target)) {
    searchResults.classList.remove('active');
  }
});

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag] || tag));
}

// --- Init App ---
updateStarUI();
renderWantToRead();
renderReviews();