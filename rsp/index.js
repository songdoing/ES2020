const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

// let coord = "0";
// const rspCoord = {
//   rock: "0",
//   scissors: "-142px",
//   paper: "-288px",
// };

// setInterval(() => {
//   if (coord === rspCoord.rock) {
//     coord = rspCoord.scissors;
//   } else if (coord === rspCoord.scissors) {
//     coord = rspCoord.paper;
//   } else if (coord === rspCoord.paper) {
//     coord = rspCoord.rock;
//   }
//   computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} 0`;
// }, 100);

let computerChoice = "rock";
const rspCoord = {
  rock: "0",
  scissors: "-142px",
  paper: "-288px",
};

setInterval(() => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
}, 100);

const rockTag = document.querySelector("#rock");
const scissorsTag = document.querySelector("#scissors");
const paperTag = document.querySelector("#paper");

// 가위: 1, 바위: 0, 보: -1
// 나\컴퓨터  가위   바위    보
//   가위     0      1      2
//   바위     -1     0      1
//   보      -2     -1      0
// 비긴거는 0, 내가 이긴건 2, -1  진건 1, -2
const score = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

const clickButton = (myChoice) => {
  //(myChoice) => () => {

  // }; return과 바깥{ }생략가능
  //addEventListener에서 함수가 호출되었을때, return 값이 나온다
  //하지만 이 함수는 return = undefined(return값을 정하지 않으면 undefined)이므로
  //rockTag.addEventListener("click", undefined); 한 꼴(함수가 호출되어야 함)
  //그래서 return에 이 함수를 호출하도록..고차함수이용
  return () => {
    const myScore = score[myChoice];
    const computerScore = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector("#score");
    let accScore = Number(scoreTag.textContent);
    if (diff === 0) {
      //무승부
    } else if (diff === 2 || diff === -1) {
      //이김
      accScore += 1;
    } else if (diff === -2 || diff === 1) {
      // 짐
      accScore -= 1;
    }
    scoreTag.textContent = accScore;
  };
};

rockTag.addEventListener("click", clickButton("rock"));
// let score = 0;
// if(coord === rspCoord.rock) {
// } else if (coord === rspCoord.scissors) {
//     score += 1;
// } else if (coord === rspCoord.paper) {
//     score -= 1;
// }

//score.rock혹은 score[rock]은 같은 값이나, []를 쓴경우는 변수를 넣을 수 있다

scissorsTag.addEventListener("click", clickButton("scissors"));

paperTag.addEventListener("click", clickButton("paper"));
