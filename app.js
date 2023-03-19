function theme() {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    var body = document.body;
    body.classList.toggle("light-mode");
    document.getElementById("screen-mode").src = "./img/switch-on.png";
  }
}

function lightmode() {
  var body = document.body;
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    document.getElementById("screen-mode").src = "./img/switch-on.png";
  } else {
    document.getElementById("screen-mode").src = "./img/switch-off.png";
  }
}

theme();
