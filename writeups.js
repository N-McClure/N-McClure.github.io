console.log("Writeups page loaded...");

// Fetch posts and render vertically stacked cards
fetch("blog-posts.json")
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("blog-container");
    container.innerHTML = posts
      .map(
        (post) => `
        <div class="blog-card">
          <img src="${post.image}" alt="${post.title}" class="blog-thumb">
          <div class="blog-info">
            <h3>${post.title}</h3>
            <p class="blog-date">${post.date}</p>
            <p class="blog-preview">${post.preview}</p>
            <a href="blog-post.html?slug=${post.slug}" class="read-more">Read More →</a>
          </div>
        </div>
      `
      )
      .join("");
  });
