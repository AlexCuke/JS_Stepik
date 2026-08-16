"use strict";

//Обьекты и свойства обьектов
//Порядок перебора свойств

const input1 = {
  arr1: [
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Петр" },
  ],
  arr2: [
    { id: 3, name: "Петр" },
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
  ],
};

const input = {
  arr1: [
    { id: 1, name: "Мария" },
    { id: 2, name: "Иван" },
  ],
  arr2: [
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
  ],
};
console.log(input.arr1.length);
console.log(input.arr2.length);
if (input.arr1.length !== input.arr2.length) {
  console.log(false);
} else {
  if (input.arr1.length == 0 && input.arr2.length == 0) {
    console.log(true);
  } else {
    input.arr1.sort((a, b) => a.name.localeCompare(b.name));
    input.arr2.sort((a, b) => a.name.localeCompare(b.name));
    const arr1_copy = [...input.arr1];
    const arr2_copy = [...input.arr2];
    console.log(arr1_copy);
    const result = new Set();
    for (const key in arr1_copy) {
      if (
        arr1_copy[key].name !== arr2_copy[key].name ||
        arr1_copy[key].id !== arr2_copy[key].id
      ) {
        result.add(false);
      } else {
        result.add(true);
      }
    }
    if (result.size == 1 && result.has(true)) {
      console.log(true);
    } else console.log(false);
  }
}
