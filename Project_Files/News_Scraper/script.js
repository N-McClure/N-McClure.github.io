/*
  Stores filtered articles as JSON objects.
  This array can be exported or sent to a backend later.
*/
let articlesJSON = [];

/*
  Attach click event listener to the search button
*/
document.getElementById("searchBtn").addEventListener("click", searchNews);

/*
  Main function that performs the news search and filtering
*/
async function searchNews() {
  const keywords = document.getElementById("keywordInput").value.trim();
  const resultsDiv = document.getElementById("results");

  // Read date filter input values
  const startDateValue = document.getElementById("startDate").value;
  const endDateValue = document.getElementById("endDate").value;

  // Convert date strings to Date objects if provided
  const startDate = startDateValue ? new Date(startDateValue) : null;
  const endDate = endDateValue ? new Date(endDateValue) : null;

  // Prevent empty keyword searches
  if (!keywords) {
    resultsDiv.innerHTML = "Please enter search keywords.";
    return;
  }

  // Reset state and show loading message
  resultsDiv.innerHTML = "Loading articles...";
  articlesJSON = [];

  /*
    Google News RSS endpoint for keyword searching.
    A CORS proxy is required due to browser security restrictions.
  */
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(keywords)}`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;

  try {
    // Fetch RSS feed through the proxy
    const response = await fetch(proxyUrl);
    const rssText = await response.text();

    // Parse RSS XML into a DOM object
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, "text/xml");
    const items = xmlDoc.querySelectorAll("item");

    // Clear loading message
    resultsDiv.innerHTML = "";

    /*
      Iterate through RSS items and apply date filtering
    */
    items.forEach(item => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const pubDateText = item.querySelector("pubDate")?.textContent;

      // Skip articles without a publication date
      if (!pubDateText) return;

      const pubDate = new Date(pubDateText);

      // Apply start and end date filters if set
      if (startDate && pubDate < startDate) return;
      if (endDate && pubDate > endDate) return;

      // Store article as JSON
      const article = {
        title: title,
        link: link,
        pubDate: pubDate.toISOString()
      };

      articlesJSON.push(article);

      // Create and render article card
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <a href="${link}" target="_blank" rel="noopener noreferrer">
          ${title}
        </a>
        <div class="meta">${pubDate.toDateString()}</div>
      `;

      resultsDiv.appendChild(card);
    });

    // Handle case where no results match filters
    if (articlesJSON.length === 0) {
      resultsDiv.innerHTML = "No articles found for the selected criteria.";
    }

    // Log stored JSON for debugging or export
    console.log("Filtered articles JSON:", articlesJSON);

  } catch (error) {
    resultsDiv.innerHTML = "Error retrieving articles.";
    console.error("Fetch error:", error);
  }
}
