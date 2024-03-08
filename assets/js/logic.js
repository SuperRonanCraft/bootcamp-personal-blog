//Dependencies
const toggleButton = document.getElementById("mode-toggle");
const content = document.querySelector("body");

//Data
let mode = "light";

//Functions

// Listen for a click event on toggle switch
toggleButton.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    lightMode();
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    darkMode();
  }
  /* Save mode settings to storage */
  localStorage.setItem("mode", mode);
});

/* Light mode, set button to moon and update class */
function lightMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/moon.png`);
  content.setAttribute("class", "light");
}

/* Dark mode, set button to sun and update class */
function darkMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/sun.png`);
  content.setAttribute("class", "dark-mode");
}

/* Event listener on load
Not using window.onload = function() because blog.js also needs a load event
Load in dark/light mode if changed previously */
window.addEventListener("load", () => {
  const loadedMode = localStorage.getItem("mode");
  console.log(loadedMode);
  if (loadedMode) {
    mode = loadedMode;
    if (loadedMode === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  }
});
