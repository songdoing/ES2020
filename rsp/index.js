const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let coord = "0";
const rspCoord = {
  rock: "0",
  scissors: "-142px",
  paper: "-288px",
};

setInterval(() => {
  if (coord === rspCoord.rock) {
    coord = rspCoord.scissors;
  } else if (coord === rspCoord.scissors) {
    coord = rspCoord.paper;
  } else if (coord === rspCoord.paper) {
    coord = rspCoord.rock;
  }
  computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} 0`;
}, 100);
