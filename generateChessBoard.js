"use strict";

//Область видимости scope

//Блоки кода

function generateChessBoard(x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr[i] = [];
    for (let j = 0; j < x; j++) {
      if ((j + i) % 2 == 0) arr[i][j] = ".";
      else arr[i][j] = "#";
    }
  }
  return arr;
  // Ваша реализация здесь
}
