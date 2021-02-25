let body = document.body;
let table = document.createElement("table");
let rows = [];
let columns = [];
let turn = "X";
let result = document.createElement("div");

let columnCheck = (e) => {
  console.log(e.target); //클릭한 애(태그)
  console.log(e.target.parentNode); //그 애 부모
  //console.log(e.target.children); 그 애 자식

  let whichRow = rows.indexOf(e.target.parentNode);
  let whichColumn = columns[whichRow].indexOf(e.target);
  console.log("whichRow:", whichRow, "whichColumn:", whichColumn);

  let initialize = () => {
    // 초기화
    setTimeout(() => {
      turn = "X";
      result.textContent = "";
      columns.forEach(function (row) {
        row.forEach(function (column) {
          column.textContent = "";
          column.style.backgroundColor = "white";
        });
      });
    }, 2000);
  };

  let colorize = (turn) => {
    console.log(turn);
    if (turn === "X") {
      console.log("red", columns[whichRow][whichColumn]);
      columns[whichRow][whichColumn].style.backgroundColor = "red";
    } else if (turn === "O") {
      console.log("blue");
      columns[whichRow][whichColumn].style.backgroundColor = "blue";
    }
  };

  //input값은 value, 태그 안 글자는 textContent
  if (columns[whichRow][whichColumn].textContent !== "") {
    //빈칸 아니다
  } else {
    //빈칸이다
    columns[whichRow][whichColumn].textContent = turn;
    console.log(turn);
    colorize(turn);

    //세 칸 찼는지 확인
    let win = false;
    //가로줄
    if (
      columns[whichRow][0].textContent === turn &&
      columns[whichRow][1].textContent === turn &&
      columns[whichRow][2].textContent === turn
    ) {
      win = true;
    }
    //세로줄
    if (
      columns[0][whichColumn].textContent === turn &&
      columns[1][whichColumn].textContent === turn &&
      columns[2][whichColumn].textContent === turn
    ) {
      win = true;
    }
    //대각선
    if (
      columns[0][0].textContent === turn &&
      columns[1][1].textContent === turn &&
      columns[2][2].textContent === turn
    ) {
      win = true;
    }
    if (
      columns[0][2].textContent === turn &&
      columns[1][1].textContent === turn &&
      columns[2][0].textContent === turn
    ) {
      win = true;
    }

    if (win) {
      //승리
      result.textContent = turn + "'s WIN";
      initialize();
    } else {
      //승리 아님
      let all = false;
      //다찼는지 확인
      if (
        columns[0][0].textContent !== "" &&
        columns[0][1].textContent !== "" &&
        columns[0][2].textContent !== "" &&
        columns[1][0].textContent !== "" &&
        columns[1][1].textContent !== "" &&
        columns[1][2].textContent !== "" &&
        columns[2][0].textContent !== "" &&
        columns[2][1].textContent !== "" &&
        columns[2][2].textContent !== ""
      ) {
        all = true;
      }
      console.log(all);
      if (all) {
        //다 찼다면, 무승부, 초기화
        //무승부
        result.textContent = "DRAW!!";
        initialize();
      } else {
        //다 안 찼으면, turn 바꿔줌
        if (turn === "X") {
          turn = "O";
        } else {
          turn = "X";
        }
      }
    }
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
body.appendChild(result);
console.log("rows:", rows, "columns:", columns);
