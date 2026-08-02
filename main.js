"use strict";

//Поиск обьекта arr.includes(значение для поиска, с какого индекса массива ищем)

const obj = { id: "i" };
const arr = ["1", true, NaN, obj];

console.log(arr.includes("1"));
console.log(arr.includes(1));
console.log(arr.includes(true));
console.log(arr.includes("true"));
console.log(arr.includes(NaN));
console.log(arr.includes(obj));
console.log("Next");
const arr1 = [10, 20, 30, 40, 50];
console.log(arr1.includes(20, 2));
console.log(arr1.includes(20, 1));
console.log(arr1.includes(20, -4));

//arr.find() - возвращает первый элемент удовлетворяющий условию arr.find(стрелочная функция для поиска)
// ищет перворе значение которое удовлетворяет функции

const result = arr1.find((val, idx) => val > 25);
console.log(result);

//arr.findLast() - возвращает первый элемент удовлетворяющий условию
// arr.find(стрелочная функция для поиска) ищет последнее значение которое удовлетворяет функции
const result1 = arr1.findLast((val, idx) => val > 25);
console.log(result1);

const arr2 = [10, 20, 30, 40, 20, 50];
const found = arr2.find((val, i) => {
  console.log(`Передаем элемент ${val} с инжексом ${i}`);
  return val > 15 && i > 1;
});
console.log(found);

const products = [
  { id: 1, name: "Mouse", price: 1000 },
  { id: 2, name: "Keyboard", price: 3000 },
  { id: 3, name: "tv", price: 5000 },
];
const exepensivPrice = products.find((product) => product.price > 500);
console.log(exepensivPrice);

//Arr.indexOf() - возвращает индекс а не значение (использует строгое сравнение с ===)

console.log(arr2.indexOf(20));
console.log(arr2.indexOf(100));
console.log(arr2.indexOf(20, 2));
//Arr.lastIndexOf() - возвращает индекс а не значение но с конца (использует строгое сравнение с ===)
console.log(arr2.lastIndexOf(20));
console.log(arr2.lastIndexOf(100));

//Arr.some() -есть ли хотя бы один эленмент который подходжит по условиям функци

const hasElem = arr.some((val) => val > 25);
console.log(hasElem);
//Arr.every() -все занчения подходжит по условиям функции?
const everElem = arr.some((val) => val > 25);
console.log(everElem);
