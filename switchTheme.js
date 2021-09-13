function switchTheme() {
  var theme = document.getElementById("theme");
  var toggle = document.getElementById("header__toggle");

  if (theme === null) {
    var head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML(
      "beforeend",
      "<link rel='stylesheet' href='dark-mode.css' id='theme' />"
    );
    toggle.innerHTML = "<p>Light</p>";
  } else {
    theme.remove();
    toggle.innerHTML = "<p>Dark</p>";
  }
}
