let screen = document.querySelector("#screen");
let state = {};
screen.addEventListener("click", () => {
  if (screen.classList.contains("waiting")) {
    screen.classList.remove("waiting");
    screen.classList.add("ready");
    screen.textContent = "Click when it changes green.";
  } else if (screen.classList.contains("ready")) {
    screen.classList.remove("ready");
    screen.classList.add("now");
    screen.textContent = "Click Now!";
  } else if (screen.classList.contains("now")) {
    screen.classList.remove("now");
    screen.classList.add("waiting");
    screen.textContent = "Click to start.";
  }
});
