"use strict";

// Итерация массива
// forEach() перебирает массив и выбимрает функцию для каждого элемента массива

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((val, idx) => console.log(idx, val));

const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 20 },
  { name: "Мария", age: 30 },
  { name: "Ёлка", age: 30 },
];

users.forEach((user, idx) =>
  console.log(`${idx + 1},${user.name}, ${user.age}`),
);
/*
getUser().forEach((user, idx, arr) => {
  const nextUser = arr[idx + 1];
  if (nextUser) {
    console.log(`Пользователь ${user.name} стоит рядом с ${nextUser.name}`);
  } else {
    console.log(`После пользователя ${user.name} никого нет`);
  }
});*/
//arr.keys() - возвращают обьект ключи итератора
//arr.values() - возвращают обьект значения итератора
//arr.entries() - возвращают обьект ключи-значения итератора
const fruits = ["яблоко", "Груша", "Арбуз"];
const iterator = fruits.keys();
for (const key of iterator) {
  console.log(key);
}

const iterator1 = fruits.values();
for (const value of iterator1) {
  console.log(value);
}

const iterator2 = fruits.entries();
for (const entry of iterator2) {
  console.log(entry);
}
// Можно преобразовать  в массив двумя способами
console.log(...iterator);
console.log(iterator1.toArray);
// Итератор одноразовый обьект
const obj = [
  { name: "Американо", price: 90 },
  { name: "Мuffин с черникой", price: 150 },
  { name: "Фреш апельсиновый", price: 180 },
];
/*
1. Капучино - 120 руб.
2. Круассан - 80 руб.
*/
const obj_iterator = obj.entries();
for (const [idx, value1] of obj_iterator) {
  console.log(`${idx + 1}. ${value1.name} - ${value1.price} руб.`);
}

const object = [
  { name: "Капитан Керн", iq: 150 },
  { name: "Глорибас", iq: 120 },
  { name: "Танос", iq: 200 },
];
object.sort((a, b) => b.iq - a.iq);
const object_iterator = object.entries();
for (const [idx, value2] of object_iterator) {
  console.log(`${idx + 1}: ${value2.name} (IQ: ${value2.iq})`);
}
