let body = document.body;
let table = document.createElement("table");
let rows = [];
let columns = [];
let columnCheck = (e) => {
  console.log(e.target);
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
console.log(rows, columns);
