// JavaScript to toggle dark mode and update the label text

const darkModeSwitch = document.getElementById("darkModeSwitch");
const themeLabel = document.getElementById("themeLabel");

// Function to set the theme based on user's choice

const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    themeLabel.textContent = theme === "dark" ? "Dark Mode" : "Light Mode"; // Update the label text
};

// Check for previously selected theme in local storage

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === "dark") {
        darkModeSwitch.checked = true;
    }
}

darkModeSwitch.addEventListener("change", () => {
    if (darkModeSwitch.checked) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});



// Testing js 1

// const darkModeSwitch = document.getElementById("darkModeSwitch");
// const themeLabel = document.getElementById("themeLabel");

// Function to set the theme based on user's choice

// const setTheme = (theme) => {
//     document.documentElement.setAttribute("data-bs-theme", theme);
//     localStorage.setItem("theme", theme);
//     themeLabel.textContent = theme === "dark" ? "Dark Mode" : theme === "light" ? "Light Mode" : "Auto Mode"; // Update the label text
// };

// Function to detect the preferred color scheme and set the theme

// const detectColorScheme = () => {
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         setTheme("dark");
//         darkModeSwitch.checked = true;
//     } else {
//         setTheme("light");
//         darkModeSwitch.checked = false;
//     }
// };

// Check for previously selected theme in local storage

// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//     setTheme(savedTheme);
// } else {
//     detectColorScheme(); // Set the initial theme based on prefers-color-scheme
// }

// darkModeSwitch.addEventListener("change", () => {
//     if (darkModeSwitch.checked) {
//         setTheme("dark");
//     } else {
//         setTheme("light");
//     }
// });

// Listen for changes in the prefers-color-scheme and update the theme accordingly

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);






