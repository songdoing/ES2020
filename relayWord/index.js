const btn = document.querySelector("#btn");
const dictionary = [];
btn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent;
  const input = document.querySelector("#answer").value;

  if (word[word.length - 1] === input[0]) {
    if (!dictionary.includes(input)) {
      document.querySelector("#word").textContent = input;
      document.querySelector("#result").textContent = "";
      document.querySelector("#answer").value = "";
      document.querySelector("#answer").focus();
      dictionary.push(input);
      console.log(dictionary);
    } else {
      document.querySelector("#result").textContent =
        "You already used. Try another one.";
      document.querySelector("#answer").value = "";
      document.querySelector("#answer").focus();
    }
  } else {
    document.querySelector("#result").textContent = "Try again.";
    document.querySelector("#answer").value = "";
    document.querySelector("#answer").focus();
  }
});
