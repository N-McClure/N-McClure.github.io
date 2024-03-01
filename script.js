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