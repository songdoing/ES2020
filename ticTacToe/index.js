let body = document.body;
let table = document.createElement("table");
let rows = [];
let columns = [];
let turn = "X";

let columnCheck = (e) => {
  console.log(e.target); //클릭한 애(태그)
  console.log(e.target.parentNode); //그 애 부모
  //console.log(e.target.children); 그 애 자식

  let whichRow = rows.indexOf(e.target.parentNode);

  let whichColumn = columns[whichRow].indexOf(e.target);
  console.log("whichiRow:", whichRow, "whichiColumn:", whichColumn);

  //input값은 value, 태그 안 글자는 textContent
  if (columns[whichRow][whichColumn].textContent !== undefined) {
    //빈칸 아니다
    columns[whichRow][whichColumn].textContent = turn;
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  } else {
    //빈칸이다
  }
};

for (let i = 1; i <= 3; i++) {
  let row = document.createElement("tr");
  rows.push(row);
  columns.push([]);
  for (let j = 1; j <= 3; j++) {
    let column = document.createElement("td");
    column.addEventListener("click", columnCheck);
    columns[i - 1].push(column);
    row.appendChild(column);
  }
  table.appendChild(row);
}
body.appendChild(table);
console.log("rows:", rows, "columns:", columns);
