document.querySelector("#exec").addEventListener("click", () => {
  const hor = parseInt(document.querySelector("#hor").value);
  const ver = parseInt(document.querySelector("#ver").value);
  const mine = parseInt(document.querySelector("#mine").value);

  console.log(hor, ver, mine);

  //mine 무작위로 심기, 0~99까지에서 20개 뽑기
  const candidate = Array(hor * ver)
    .fill()
    .map((v, i) => i + 1);
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
  const tbody = document.querySelector("#table tbody");
  for (let i = 0; i < ver; i += 1) {
    let tr = document.createElement("tr"); //세로를 먼저
    for (let j = 0; j < hor; j += 1) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
});
