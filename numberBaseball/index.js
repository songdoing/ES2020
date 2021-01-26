const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");
const error = document.querySelector("#error");
let answer;
let answerArr = [];
//let numbers = [];
// for (let n = 0; n <= 9; n++) {
//   numbers.push(n);
// }

let count = 0;

let numbers = Array(10)
  .fill()
  .map((v, i) => i);

//min(in) ~ max(in)
//Math.floor(Math.random() * (max - min + 1)) + min;
//answer = Math.floor(Math.random() * 9000) + 1000;

for (let i = 0; i <= 3; i++) {
  let index = Math.floor(Math.random() * numbers.length); //0~9 integer
  answerArr.push(numbers[index]);
  numbers.splice(index, 1);
}
//from array to String
answer = String(answerArr.join(""));
console.log(answer);
input.focus();

const againGame = () => {
  location.reload();
};

check.addEventListener("click", () => {
  const tryAnswer = input.value;
  if (tryAnswer && tryAnswer.length === 4) {
    if (count >= 9) {
      error.textContent = `Game over! The answer was ${answer}. Try another one.`;
      const btn = document.createElement("button");
      btn.setAttribute("id", "againBtn");
      btn.appendChild(document.createTextNode("Again"));
      error.appendChild(btn);
      btn.addEventListener("click", againGame);
    } else {
      //baseball logs
      if (tryAnswer === answer) {
        logs.appendChild(document.createTextNode("HOME RUN!!! One more?"));
        const btn = document.createElement("button");
        btn.setAttribute("id", "againBtn");
        btn.appendChild(document.createTextNode("Again"));
        error.appendChild(btn);
        btn.addEventListener("click", againGame);
      } else {
        console.log("different");
        let strike = 0;
        let ball = 0;
        for (const [aIndex, aNumber] of answerArr.entries()) {
          for (const [iIndex, iString] of tryAnswer.split("").entries()) {
            if (aNumber === Number(iString)) {
              if (aIndex === iIndex) {
                strike++;
              } else {
                ball++;
              }
            }
          }
        }
        input.value = "";
        input.focus();

        const message = document.createTextNode(
          `${count + 1}.${tryAnswer} : ${strike} strike, ${ball} ball`
        );
        logs.appendChild(message);
        logs.appendChild(document.createElement("br"));
        error.textContent = "";
      }
    }
  } else {
    error.textContent = "You should input the 4 digits.";
    logs.appendChild(document.createTextNode("You missed 1 chance."));
    logs.appendChild(document.createElement("br"));
    input.focus();
  }
  count++;
});
