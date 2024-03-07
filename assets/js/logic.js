const toggleButton = document.getElementById("mode-toggle");
const content = document.querySelector(".content");

toggleButton.addEventListener("click", function () {
  const isDarkMode = content.classList.toggle("dark-mode");
  if (isDarkMode) {
    darkMode();
  } else {
    lightMode();
  }
});

function lightMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/moon.png`);
}

function darkMode() {
  toggleButton.firstElementChild.setAttribute("src", `assets/images/sun.png`);
}
