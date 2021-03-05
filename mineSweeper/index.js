const tbody = document.querySelector("#table tbody"); //스코프
let dataset = []; //스코프
document.querySelector("#exec").addEventListener("click", () => {
  //실행버튼 눌렀을때, 기존 테이블 다 지워버리기(초기화)
  tbody.innerHTML = "";
  const hor = parseInt(document.querySelector("#hor").value);
  const ver = parseInt(document.querySelector("#ver").value);
  const mine = parseInt(document.querySelector("#mine").value);

  console.log(hor, ver, mine);

  //mine 무작위로 심기, 0~99까지에서 20개 뽑기
  const candidate = Array(hor * ver)
    .fill()
    .map((v, i) => i);
  //v : 요소  i : 인덱스
  console.log(candidate); //배열로 쭉 나열됨

  const shuffle = [];
  while (candidate.length > 80) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1); //랜덤된 숫자가 하나하나 배열형태로 리턴
    console.log(spliceArray);
    const value = spliceArray[0]; // 배열형태에서 숫자만 뽑기하려면
    shuffle.push(value);
  }
  console.log(shuffle);

  //테이블 만들기

  //const tbody = document.querySelector("#table tbody");
  for (let i = 0; i < ver; i += 1) {
    let arr = [];
    let tr = document.createElement("tr"); //세로를 먼저
    dataset.push(arr);
    for (let j = 0; j < hor; j += 1) {
      arr.push(1);
      let td = document.createElement("td");
      //td 우클릭 이벤트 걸어주기
      td.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("right click");
        let parentTr = e.currentTarget.parentNode;
        let parentTbody = e.currentTarget.parentNode.parentNode;
        //e.currentTarget: 이벤트 달린애 e.target : 이벤트가 실제로 일어난 애

        //indexOf는 배열에서만 사용할 수 있는데,
        //배열이 아닌 곳에서 사용 할 수 있도록 꼼수
        let columnFlag = Array.prototype.indexOf.call(
          parentTr.children,
          e.currentTarget
        );
        let rowFlag = Array.prototype.indexOf.call(
          parentTbody.children,
          parentTr
        );
        console.log(
          parentTbody,
          parentTr,
          e.currentTarget,
          rowFlag,
          columnFlag
        );

        if (
          e.currentTarget.textContent === "" ||
          e.currentTarget.textContent === "💣"
        ) {
          e.currentTarget.textContent = "🚩";
        } else if (e.currentTarget.textContent === "🚩") {
          e.currentTarget.textContent = "❓";
        } else if (e.currentTarget.textContent === "❓") {
          if (dataset[rowFlag][columnFlag] === 1) {
            e.currentTarget.textContent = "";
          } else if (dataset[rowFlag][columnFlag] === "💣") {
            e.currentTarget.textContent = "💣";
          }
        }
      });
      //왼쪽 클릭 이벤트 걸어주기
      td.addEventListener("click", (e) => {
        //클릭했을때 주변 지뢰 개수
        let parentTr = e.currentTarget.parentNode;
        let parentTbody = e.currentTarget.parentNode.parentNode;
        let columnFlag = Array.prototype.indexOf.call(
          parentTr.children,
          e.currentTarget
        );
        let rowFlag = Array.prototype.indexOf.call(
          parentTbody.children,
          parentTr
        );

        if (dataset[rowFlag][columnFlag] === "💣") {
          e.currentTarget.textContent = "💥";
        } else {
          //주변 8칸의 폭탄 갯수 확인하여 숫자로 표시하기, 음수 되지 않도록 if문
          let round = [
            dataset[rowFlag][columnFlag - 1],
            dataset[rowFlag][columnFlag + 1],
          ];
          //이전 줄이 없는 경우
          if (dataset[rowFlag - 1]) {
            round = round.concat([
              dataset[rowFlag - 1][columnFlag - 1],
              dataset[rowFlag - 1][columnFlag],
              dataset[rowFlag - 1][columnFlag + 1],
            ]);
          }
          //이후 줄이 없는 경우
          if (dataset[rowFlag + 1]) {
            round = round.concat([
              dataset[rowFlag + 1][columnFlag - 1],
              dataset[rowFlag + 1][columnFlag],
              dataset[rowFlag + 1][columnFlag + 1],
            ]);
          }
          e.currentTarget.textContent = round.filter((v) => v === "💣").length;
        }
      });

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  console.log(dataset);
  //mine 심기
  for (let k = 0; k < shuffle.length; k++) {
    //ex. 60 (7번째 줄, 0번째 칸)
    let rowMine = Math.floor(shuffle[k] / 10); //60나누기 10하고 내림 = 6(인덱스)
    let columnMine = shuffle[k] % 10; //60 나누기 10의 나머지 = 0
    console.log(rowMine, columnMine);
    tbody.children[rowMine].children[columnMine].textContent = "💣";
    dataset[rowMine][columnMine] = "💣";
  }
});

//위의 exec addEventListener안에 있는 tbody와는 다르다(스코프)
//그래서 바깥(맨위)으로 꺼냄

//우클릭으로 깃발 꽂기
// tbody.querySelectorAll("td").forEach((td) => {
//   td.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     console.log("right click");
//   });
// });
//했는데, td를 exec addEventListener안에서 만들었기(비동기)에 모름.
//비동기는 동기보다 뒤에 올수 있음. 그래서 td생성뒤 바로 이벤트 걸어
