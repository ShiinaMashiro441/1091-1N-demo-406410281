(function () {
  localStorage.setItem("theme-txt", "LIght");
})();

function nothing() {
  window.alert("這裡沒什麼東西啦");
}

var trigger = document.getElementById("Theme");
var trigger_css = document.getElementById("dark-theme");

function change_theme() {
  if (trigger.innerHTML == "Change to Dark Theme") {
    trigger.innerHTML = "Change to Light Theme";
    trigger_css.href = "./css/style.min.css";
  } else {
    trigger.innerHTML = "Change to Dark Theme";
    trigger_css.href = "./css/light.css";
  }
}

function setTheme(themeName) {
  localStorage.setItem("theme-txt", themeName);
  if (localStorage.getItem("theme-txt") === "Dark") {
    trigger.innerHTML = "Change to Light Theme";
    trigger_css.href = "./css/style.min.css";
  } else {
    trigger.innerHTML = "Change to Dark Theme";
    trigger_css.href = "./css/light.css";
  }
}

(function () {
  if (localStorage.getItem("theme-txt") == "Dark") {
    setTheme("Dark");
    trigger.innerHTML = "Change to Light Theme";
    trigger_css.href = "./css/style.min.css";
  } else {
    setTheme("Light");
    trigger.innerHTML = "Change to Dark Theme";
    trigger_css.href = "./css/light.css";
  }
})();
