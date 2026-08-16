"use strict";

const count = 3;
const min = 1;
const max = 3;

function generateUniqueRandomNumbers(count, min, max) {
  const arr = [];
  if (max - min + 1 < count) {
    return "Ошибка: Unable to generate array in the specified range";
  } else {
    for (let i = min; i <= min + count; i++) {
      arr.push(i);
    }
    return arr;
  }
}

function generateUniqueRandomNumbers(count, min, max) {
  const arr = [];
  if (max - min + 1 < count) {
    {
      throw new Error("Unable to generate array in the specified range");
    }
  } else {
    for (let i = min; i < min + count; i++) {
      arr.push(i);
    }
    return arr;
  }
}
console.log(generateUniqueRandomNumbers(count, min, max));
