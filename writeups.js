console.log("Writeups page loaded...");

// Fetch posts from JSON and render cards
fetch("posts.json")
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("blog-container");
    container.innerHTML = posts
      .map(
        (post) => `
        <div class="card" data-slug="${post.slug}">
          <h4>${post.title}</h4>
          <img src="${post.image}" alt="${post.title}">
          <h6>${post.date}</h6>
          <p>${post.preview}</p>
          <a href="#${post.slug}" class="read-more">Read More</a>
        </div>`
      )
      .join("");

    // Attach click listeners for modals
    document.querySelectorAll(".read-more").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const slug = btn.closest(".card").dataset.slug;
        openBlogModal(slug, posts);
      });
    });
  });

// Modal logic
const blogModal = document.getElementById("blog-modal");
const overlay = document.querySelector(".overlay");
const closeBlogBtn = document.querySelector(".blog-close");

function openBlogModal(slug, posts) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return;

  document.getElementById("blog-modal-title").textContent = post.title;
  document.getElementById("blog-modal-date").textContent = post.date;
  document.getElementById("blog-modal-image").src = post.image;

  if (post.contentFile) {
    fetch(post.contentFile)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById("blog-modal-text").innerHTML = html;
      });
  } else {
    document.getElementById("blog-modal-text").innerHTML = post.content;
  }

  blogModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  history.replaceState(null, "", `#${slug}`);
}

function closeBlogModal() {
  blogModal.classList.add("hidden");
  overlay.classList.add("hidden");
  history.replaceState(null, "", "writeups.html");
}

closeBlogBtn.addEventListener("click", closeBlogModal);
overlay.addEventListener("click", closeBlogModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !blogModal.classList.contains("hidden")) closeBlogModal();
});
