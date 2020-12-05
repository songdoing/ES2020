document.querySelector("#btn").addEventListener("click", () => {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const result = document.querySelector("#result");

  if (first) {
    if (second) {
      const r = first * second;
      result.textContent = r;
    } else {
      result.textContent = "input the second value.";
    }
  } else {
    result.textContent = "input the first value.";
  }
});
