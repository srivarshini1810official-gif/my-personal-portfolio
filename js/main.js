
// 1. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. THEME SWITCHING

const themeButtons = document.querySelectorAll(".theme-btn");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    themeButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.theme === theme);
    });

    localStorage.setItem("selectedTheme", theme);
}

// Load the previously selected theme
const savedTheme = localStorage.getItem("selectedTheme") || "dark";
applyTheme(savedTheme);

// Change theme when a button is clicked
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.theme);
    });
});
