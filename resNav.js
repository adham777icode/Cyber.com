let isShowed = false;
function showMenu() {
    if (isShowed === false) {
        isShowed = true;
        let menu = document.getElementById("menu").style.display = "block";
    }
}
function hideMenu() {
    if (isShowed === true) {
        isShowed = false;
        let menu = document.getElementById("menu").style.display = "none";
    }
}