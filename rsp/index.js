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

rockTag.addEventListener("click", () => {
  // let score = 0;
  // if(coord === rspCoord.rock) {
  // } else if (coord === rspCoord.scissors) {
  //     score += 1;
  // } else if (coord === rspCoord.paper) {
  //     score -= 1;
  // }
});

scissorsTag.addEventListener("click", () => {});

paperTag.addEventListener("click", () => {});
