let screen = document.querySelector("#screen");
let state = {};

screen.addEventListener("click", () => {
  let startTime;
  let endTime;

  if (screen.classList.contains("waiting")) {
    screen.classList.remove("waiting");
    screen.classList.add("ready");
    screen.textContent = "Click when it changes green.";
    setTimeout(() => {
      startTime = new Date();
      screen.click();
    }, Math.floor(Math.random() * 1000) + 2000); //2000~3000 랜덤수
  } else if (screen.classList.contains("ready")) {
    screen.classList.remove("ready");
    screen.classList.add("now");
    screen.textContent = "Click Now!";
  } else if (screen.classList.contains("now")) {
    endTime = new Date();
    console.log("response speed ", endTime - startTime, " ms");
    screen.classList.remove("now");
    screen.classList.add("waiting");
    screen.textContent = "Click to start.";
  }
});
