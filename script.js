// To ensure all files are connected:
console.log("Connected...Running...");

// Function to Scroll To specific Divs:
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector:
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists:
    if (elements.length > instance) {
        // Scroll to the specified instance of the element:
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const socials = document.getElementById("socials");

about.addEventListener('click', () => {
    scrollToElement('header');
});

projects.addEventListener('click', () => {
    scrollToElement('.projects');
});

socials.addEventListener('click', () => {
    scrollToElement('.socials');
});

// Typewriter Effect Functions: 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// CONTACT ME MODAL LOGIC
const modal = document.getElementById("contact-me");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("contactme");
const closeModalBtn = modal.querySelector(".btn-close button");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close modal
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close modal on Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// RESUME MODAL LOGIC
const resumeModal = document.getElementById("resume-modal");
const openResumeBtn = document.getElementById("openResume");
const closeResumeBtn = resumeModal.querySelector(".resume-close button");

const openResume = () => {
  resumeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeResume = () => {
  resumeModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openResumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openResume();
});

closeResumeBtn.addEventListener("click", closeResume);
overlay.addEventListener("click", closeResume);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !resumeModal.classList.contains("hidden")) {
    closeResume();
  }
});

// === Dynamic Blog Post Loader with Deep Linking === //
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-posts-container");
  const modal = document.getElementById("blog-modal");
  const overlay = document.querySelector(".overlay");

  if (!blogContainer) return;

  fetch("posts.json")
    .then((res) => res.json())
    .then((posts) => {
      // Render blog cards
      blogContainer.innerHTML = posts
        .map(
          (post) => `
        <article class="blog-card" id="${post.slug}">
          <img src="${post.image}" alt="${post.title}">
          <div class="blog-content">
            <h3>${post.title}</h3>
            <p class="blog-date">Posted on ${post.date}</p>
            <p class="blog-preview">${post.preview}</p>
            <button class="read-more"
              data-slug="${post.slug}"
              data-title="${post.title}"
              data-date="${post.date}"
              data-image="${post.image}"
              data-content="${post.content}">
              Read More
            </button>
          </div>
        </article>`
        )
        .join("");

      attachBlogModalHandlers(posts);
      handleDeepLink(posts);
    })
    .catch((err) => console.error("Error loading blog posts:", err));
});

function attachBlogModalHandlers(posts) {
  const readButtons = document.querySelectorAll(".read-more");
  const modal = document.getElementById("blog-modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".blog-close button");

  if (!modal || !overlay) return;

  readButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openBlogModal(btn.dataset.slug, posts);
    });
  });

  closeBtn.addEventListener("click", closeBlogModal);
  overlay.addEventListener("click", closeBlogModal);
}

function openBlogModal(slug, posts) {
  const modal = document.getElementById("blog-modal");
  const overlay = document.querySelector(".overlay");
  const post = posts.find((p) => p.slug === slug);

  if (!post) return;

  document.getElementById("blog-modal-title").textContent = post.title;
  document.getElementById("blog-modal-date").textContent = post.date;
  document.getElementById("blog-modal-image").src = post.image;
  document.getElementById("blog-modal-text").textContent = post.content;

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Update URL (deep link)
  history.replaceState(null, "", `#${slug}`);
}

function closeBlogModal() {
  const modal = document.getElementById("blog-modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  // Reset URL back to base
  history.replaceState(null, "", "writeups.html");
}

function handleDeepLink(posts) {
  const slug = window.location.hash.substring(1);
  if (slug) {
    openBlogModal(slug, posts);
  }
}
