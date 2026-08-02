"use strict";
/*
Реализуйте функцию arrayReverse.
Функция должна принять массив и вернуть новый массив со всеми значениями принятого массива, но в обратном порядке.
Другими словами, нужно развернуть массив.

*/

/*
const arrayReverse = (arr) => {
  let i = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
};
*/
/*
const arrayReverse = (arr) => {
  let i = 0;
  let newArr = [];
  for (let i = arr.length - 1; (i) => 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
*/
const arrayReverse = (arr) => {
  return [...arr].reverse();
};
// Должны получить массив: [105, 104, 103, 102, 101]
console.log(arrayReverse([101, 102, 103, 104, 105]));
