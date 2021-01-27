const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
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
