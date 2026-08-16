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
});
*/
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
