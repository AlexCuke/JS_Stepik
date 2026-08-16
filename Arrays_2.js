"use strict";

//Array.from

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

//методы преобразования массивов (не изменяют начсальный массив)
//array.map() - создает ноdый массив применяя функцию к каждому элементу текущего
const arr8 = [10, 20, 30, 20];
const newArr = arr8.map((val) => val * 2);
console.log(newArr);

const newArr1 = arr.map((val, idx) => {
  return `${val} индекс ${idx}`;
});
console.log(newArr1);
const newArr2 = arr.map((val, idx) => `${val} индекс ${idx}`);
console.log(newArr2);

const users = [
  { name: "alice", age: 25 },
  { name: "bob", age: 30 },
  { name: "charlie", age: 35 },
];
const userNames = users.map((user) => user.name.toLocaleUpperCase);
console.log(userNames);
//Переписываем какое-то свойство
const userWithUpperNames = users.map((user) => {
  return { ...user, name: user.name.toUpperCase() };
});
console.log(userWithUpperNames);

const numbers = [10, 20, 30, 20];
const newNumber = numbers.map((num) => ({ original: num, squared: num ** 2 }));
console.log(newNumber);

const detailed = numbers.map((num) => {});
console.log(detailed);

// arr.filter() - создает новый массив и возвращает значения только те которые
//  соотвествуют значению  функции
const filteerArr = arr.filter((val) => val > 15);

console.log(filteerArr);
const even = numbers.filter((num, idx) => num % 2 === 0);
console.log(even);

const even1 = numbers.filter((num, idx) => idx % 2 === 0);
console.log(even1);

//arr.flat() разворачивает массив на 1 уровень (может принять на глубину распаковки)
//Исходный массив не меняется
const nestedArr = [1, [2, 3], [4, 5]];
const flatArr = nestedArr.flat();
console.log(flatArr);
const newflatArr = nestedArr.flat(2);
console.log(newflatArr);
const newflatArr1 = nestedArr.flat(Infinity);
console.log(newflatArr1);

const flatArr1 = [1, , 3];
const newflat = flatArr1.flat();
console.log(newflat);

//arr.flatmMap() сначала применяет функцию а потом
// разворачивает массив на 1 уровень (может принять на глубину распаковки)
//Исходный массив не меняется
const arr5 = [1, 2, 3];
const result2 = arr5.flatMap((val) => [val, val ** 2]);
console.log(result2);

//arr.slice() создает массив из  куска массива
const arr6 = [1, 2, 3, 4, 5];
const sliced = arr6.slice(1, 4);
console.log(sliced);

const sliced1 = arr6.slice(-3, -1);
console.log(sliced1);

//Arr.with() - возвращаеет новый массив в котором изеняем определенный элемент
const arr7 = [1, 2, 3, 4, 5];
const newarr7 = arr.with(1, 500);
console.log(newarr7);
