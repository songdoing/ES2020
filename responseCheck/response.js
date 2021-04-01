let screen = document.querySelector("#screen");
let result = document.querySelector("#result");
let startTime;
let endTime;
let timeOut;
//click콜백함수에서 변수 선언하면 호출스택(call stack)
//때문에 변수 다 날아가기 때문에, 전역변수로 선언
//비동기함수는 밖에다가 변수 선언할것
let record = [];

screen.addEventListener("click", () => {
  if (screen.classList.contains("waiting")) {
    screen.classList.remove("waiting");
    screen.classList.add("ready");
    screen.textContent = "Click when it changes green.";
    timeOut = setTimeout(() => {
      startTime = new Date();
      screen.click();
    }, Math.floor(Math.random() * 1000) + 2000); //2000~3000 랜덤수
  } else if (screen.classList.contains("ready")) {
    //부정클릭했을때
    if (!startTime) {
      clearTimeout(timeOut);
      screen.classList.remove("ready");
      screen.classList.add("waiting");
      screen.textContent = "Too hurry. Try again.";
    } else {
      screen.classList.remove("ready");
      screen.classList.add("now");
      screen.textContent = "Click Now!";
    }
  } else if (screen.classList.contains("now")) {
    endTime = new Date();
    console.log("response speed ", endTime - startTime, " ms");
    record.push(endTime - startTime);
    startTime = null;
    endTime = null;
    screen.classList.remove("now");
    screen.classList.add("waiting");
    screen.textContent = "Click to start.";
    let averageTime = parseInt(record.reduce((a, c) => a + c) / record.length);
    result.textContent = `Your average of response time :
     ${record.length === 0 ? null : averageTime} ms`;
  }
});
