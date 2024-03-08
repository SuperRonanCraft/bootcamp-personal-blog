const toggleButton = document.getElementById("mode-toggle");
const content = document.querySelector("body");

let mode = "light";

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
});

function lightMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/moon.png`);
  content.setAttribute("class", "light");
}

function darkMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/sun.png`);
  content.setAttribute("class", "dark");
}
