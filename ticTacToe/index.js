let body = document.body;
let table = document.createElement("table");
let rows = [];
let columns = [];
let turn = "X";
let result = document.createElement("div");
//let win;

let resultCheck = (whichRow, whichColumn) => {
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
  return win; //columnCheck함수의 스코프체인에 없기 때문에
  //resultCheck함수에 return을 해주면, 전역변수처럼 가져다 쓸수.
};

let initialize = (draw) => {
  if (draw) {
    result.textContent = "DRAW!!";
  } else {
    result.textContent = turn + "'s WIN";
  }
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
    turn = "X";
  }, 2000);
};

let columnCheck = (e) => {
  console.log(e.target); //클릭한 애(태그)
  console.log(e.target.parentNode); //그 애 부모
  //console.log(e.target.children); 그 애 자식
  if (turn === "O") {
    return; //컴퓨터 턴일때 내가 클릭 하지 않도록
  }

  let whichRow = rows.indexOf(e.target.parentNode);
  let whichColumn = columns[whichRow].indexOf(e.target);
  console.log("whichRow:", whichRow, "whichColumn:", whichColumn);

  // let colorize = (turn) => {
  //   console.log(turn);
  //   if (turn === "X") {
  //     console.log("red", columns[whichRow][whichColumn]);
  //     columns[whichRow][whichColumn].style.backgroundColor = "red";
  //   } else if (turn === "O") {
  //     console.log("blue");
  //     columns[whichRow][whichColumn].style.backgroundColor = "blue";
  //   }
  // };

  //input값은 value, 태그 안 글자는 textContent
  if (columns[whichRow][whichColumn].textContent !== "") {
    //만약 빈칸이 아니라면
  } else {
    //빈칸이다
    columns[whichRow][whichColumn].textContent = turn;
    console.log(turn);
    columns[whichRow][whichColumn].style.backgroundColor = "red";
    let win = resultCheck(whichRow, whichColumn); //return win해줘서 스코프체인밖이라도 받을수 있다

    //모든 칸이 다 찼는지 검사
    let emptyColumn = [];
    columns.forEach((row) => {
      row.forEach((column) => {
        emptyColumn.push(column);
      });
    });
    emptyColumn = emptyColumn.filter((column) => {
      return !column.textContent;
    });
    console.log(emptyColumn);

    if (win) {
      //승리

      initialize(); //undefined는 false로 들어간다
    } else if (emptyColumn.length === 0) {
      //칸을 더이상 선택할 수 없음

      initialize(true);
    } else {
      //다 안 찼으면, turn 바꿔줌
      if (turn === "X") {
        turn = "O";
      }

      setTimeout(() => {
        console.log("computer turn");

        let selectColumn =
          emptyColumn[Math.floor(Math.random() * emptyColumn.length)];
        selectColumn.textContent = turn;
        selectColumn.style.backgroundColor = "blue";
        //컴터 승리했는지 체크한다.
        let whichRow = rows.indexOf(selectColumn.parentNode);
        let whichColumn = columns[whichRow].indexOf(selectColumn);
        let win = resultCheck(whichRow, whichColumn);
        if (win) {
          //컴퓨터승리

          initialize();
        }
        //나에게 턴을 넘긴다
        turn = "X";
      }, 1000);
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
