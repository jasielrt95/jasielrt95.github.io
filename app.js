function lightmode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    if (element.classList.contains("light-mode")) {
        document.getElementById("screen-mode").src="./img/switch-on.png"
    } else {
        document.getElementById("screen-mode").src="./img/switch-off.png"
    }
}