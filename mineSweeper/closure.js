for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} //1초마다 100 이 찍힘
//for문으로 0.000001초만에 i는 100까지 가고, 1초뒤에, 2초뒤에
//console를 찍으니..계속 100

//즉 풀어쓰면...
setTimeout(() => {
  console.log(i); //100
}, 0 * 1000);
setTimeout(() => {
  console.log(i); //100
}, 1 * 1000);
setTimeout(() => {
  console.log(i); //100
}, 2 * 1000);
setTimeout(() => {
  console.log(i); //100
}, 3 * 1000);
setTimeout(() => {
  console.log(i); //100
}, 4 * 1000);
//..
//..
//..
setTimeout(() => {
  console.log(i); //100
}, 99 * 1000);

//--- 해결책
for (var i = 0; i < 100; i++) {
  closure = (j) => {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  };
  closure(j);
}
// 풀어서 쓰면..
closure = (j) => {
  //j = 0
  setTimeout(() => {
    console.log(j); //j는 죽었다 깨어나도 윗윗줄의 j 임
  }, 0 * 1000);
};
closure(0);

closure = (j) => {
  //j = 1
  setTimeout(() => {
    console.log(j);
  }, 1 * 1000);
};
closure(1);

closure = (j) => {
  //j = 2
  setTimeout(() => {
    console.log(j);
  }, 2 * 1000);
};
closure(2);

closure = (j) => {
  //j = 3
  setTimeout(() => {
    console.log(j);
  }, 3 * 1000);
};
closure(3);

closure = (j) => {
  //j = 4
  setTimeout(() => {
    console.log(j);
  }, 4 * 1000);
};
closure(4);

//..
closure = (j) => {
  //j = 99
  setTimeout(() => {
    console.log(j);
  }, 99 * 1000);
};
closure(99);
