"use strict";
/*
Необходимо реализовать функцию fillArrToLength, в нее передается массив и целое положительное число. Функция должна в массив добавить нули до нужного размера, размер передан вторым параметром.

Если массив имеет нужный размер (или больше), тогда функция никак не должна менять массив.

*/
function fillArrToLength(arr, length) {
  if (arr.length < length)
    for (let i = arr.length; i < length; i++) {
      arr.push(0);
    }
  return arr;
}
S;

const arr1 = [2, 6, 8];
fillArrToLength(arr1, 5);
console.log(arr1); // [2, 6, 8, 0, 0]

const arr2 = [2, 6, 8, 3, 9];
fillArrToLength(arr2, 4);
console.log(arr2); // [2, 6, 8, 3, 9]
