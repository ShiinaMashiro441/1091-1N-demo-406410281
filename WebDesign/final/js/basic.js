function nothing() {
    window.alert("這裡沒什麼東西啦");
}

function change_theme() {
    const original_theme = document.getElementById("dark-theme");
    const theme_str = document.getElementById("Theme");
    console.log(original_theme.href);
    if (original_theme.href.endsWith("/css/style.min.css")) {
        original_theme.href = "./css/";
        theme_str.innerHTML = "Change to Dark Theme";
    } else {
        original_theme.href = "./css/style.min.css";
        theme_str.innerHTML = "Change to Light Theme";
    }
}
