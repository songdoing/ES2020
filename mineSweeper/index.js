document.querySelector("#exec").addEventListener("click", () => {
  const hor = parseInt(document.querySelector("#hor").value);
  const ver = parseInt(document.querySelector("#ver").value);
  const mine = parseInt(document.querySelector("#mine").value);

  console.log(hor, ver, mine);

  let dataset = [];
  const tbody = document.querySelector("#table tbody");
  for (let i = 0; i < ver; i += 1) {
    let arr = [];
    let tr = document.createElement("tr"); //세로를 먼저
    for (let j = 0; j < hor; j += 1) {
      arr.push(1);
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = 1;
    }
    tbody.appendChild(tr);
  }
  console.log(dataset);
});
