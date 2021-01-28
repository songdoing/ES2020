const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1); // 배열형태로 리턴
  const value = spliceArray[0]; // 배열형태에서 숫자만 뽑기하려면
  shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
//정렬, 두개씩 묶어서 빼기해서 음수면 그대로, 양수면 자리 바꾸기
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

function colorize(number, tag) {
  if (number <= 10) {
    tag.style.backgroundColor = "red";
    tag.style.color = "white";
  } else if (number <= 20) {
    tag.style.backgroundColor = "orange";
  } else if (number <= 30) {
    tag.style.backgroundColor = "yellow";
  } else if (number <= 40) {
    tag.style.backgroundColor = "blue";
    tag.style.color = "white";
  } else {
    tag.style.backgroundColor = "green";
    tag.style.color = "white";
  }
}

const resultTag = document.querySelector("#result");
// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     const ball = document.createElement("div");
//     ball.className = "ball";
//     colorize(winBalls[i], ball);
//     ball.textContent = winBalls[i];
//     resultTag.appendChild(ball);
//   }, 1000 * (i + 1));
// }

//배열에 관한 단순반복문, return이 없다(map도 먹히나, 1:1매핑에 초점, 끝에 return이 있을경우)
winBalls.forEach((number, index) => {
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    colorize(number, ball);
    ball.textContent = number;
    resultTag.appendChild(ball);
  }, 1000 * (index + 1));
});

const bonusTag = document.querySelector("#bonus");
setTimeout(() => {
  const bonusBall = document.createElement("div");
  bonusBall.className = "ball";
  colorize(bonus, bonusBall);
  bonusBall.textContent = bonus;
  bonusTag.appendChild(bonusBall);
}, 7000);

resetBtn = () => {
  location.reload();
};

// const promises = [1, 2, 3].map((v) => {
//   return Promise.resolve(v);
// });
// Promise.allSettled(promises);
