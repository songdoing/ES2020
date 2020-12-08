const input = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const calculateButton = document.querySelector("#calculate");
const output = document.querySelector("#output");
const error = document.querySelector("#error");

let firstNum;
let operator = "";

plusButton.addEventListener("click", () => {
  if (input.value) {
    operator = "+";
    firstNum = input.value;
    console.log(firstNum);
    input.value = "";
    output.value = firstNum + " +";
    input.focus();
    error.textContent = "";
  } else {
    error.textContent = "You should input the number first.";
    input.focus();
  }
});
minusButton.addEventListener("click", () => {
  if (input.value) {
    operator = "-";
    firstNum = input.value;
    input.value = "";
    output.value = firstNum + " -";
    input.focus();
    error.textContent = "";
  } else {
    error.textContent = "You should input the number first.";
    input.focus();
  }
});
multiplyButton.addEventListener("click", () => {
  if (input.value) {
    operator = "*";
    firstNum = input.value;
    input.value = "";
    output.value = firstNum + " ×";
    input.focus();
    error.textContent = "";
  } else {
    error.textContent = "You should input the number first.";
    input.focus();
  }
});
divideButton.addEventListener("click", () => {
  if (input.value) {
    operator = "/";
    firstNum = input.value;
    input.value = "";
    output.value = firstNum + " ÷";
    input.focus();
    error.textContent = "";
  } else {
    error.textContent = "You should input the number first.";
    input.focus();
  }
});

clearButton.addEventListener("click", () => {
  firstNum = null;
  secondNum = null;
  operator = "";
  input.value = "";
  output.value = "";
  error.textContent = "";
  input.focus();
});

calculateButton.addEventListener("click", () => {
  if (input.value) {
    if (operator === "+") {
      output.value =
        firstNum +
        " + " +
        input.value +
        " = " +
        (firstNum * 1 + input.value * 1);
      input.value = "";
      input.focus();
      error.textContent = "";
    } else if (operator === "-") {
      output.value =
        firstNum +
        " - " +
        input.value +
        " = " +
        (firstNum * 1 - input.value * 1);
      input.value = "";
      input.focus();
      error.textContent = "";
    } else if (operator === "*") {
      output.value =
        firstNum +
        " × " +
        input.value +
        " = " +
        firstNum * 1 * (input.value * 1);
      input.value = "";
      input.focus();
      error.textContent = "";
    } else if (operator === "/") {
      output.value =
        firstNum +
        " ÷ " +
        input.value +
        " = " +
        ((firstNum * 1) / (input.value * 1)).toFixed(2);
      input.value = "";
      input.focus();
      error.textContent = "";
    }
  } else {
    error.textContent = "Try again. You should input the second number.";
    input.focus();
  }
});
