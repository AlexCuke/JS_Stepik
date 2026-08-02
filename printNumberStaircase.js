"use strict";

//Область видимости scope

//Блоки кода

const printNumberStaircase = (n) => {
  let i = 1;
  while (i <= n) {
    let str = "";
    let j = i;
    let k = 0;
    do {
      str = str + " " + j;
      j++;
      k++;
    } while (k < i);
    console.log(str.trim());
    i++;
  }
};

const printNumberStaircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j < i * 2; j++) {
      str += j + " ";
    }
    console.log(str.trim());
  }
};
