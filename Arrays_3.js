"use strict";

//arr.sort() - сортирует и меняет наш массив.Сравнивает посимвольно как строки
const words = ["помидор", "огурец", "банан"];
words.sort();
console.log(words);

//arr.toSorted - сортирует и возвращает новый массив (отсортированный).Сравнивает посимвольно как строки
const words1 = ["помидор", "огурец", "банан"];
const sortedWords = words.toSorted();
console.log(sortedWords);

//arr.sort((a,b)=>{if (a<b) {return -1}if (a>b) {return 1} return 0}) - сортирует и меняет наш массив.
// Сравнивает по числам
//arr.sort((a,b)=>a-b) - сортирует и меняет наш массив.
// Сравнивает по числам
const numbers = [5, 7, 6, 4, 9];
numbers.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(numbers);
const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 20 },
  { name: "Мария", age: 30 },
  { name: "Ёлка", age: 30 },
];
const sortedByUser = users.toSorted((a, b) => a.name - b.name);
//.localeCompare() учитывает особенности буквы ё
const sortedByUser1 = users.toSorted((a, b) => a.name.localeCompare(b.name));

//Двойная сортировка

const products = [
  { name: "Молоко", price: 80, arrivalDate: "2023-05-01" },
  { name: "Масло", price: 100, arrivalDate: "2023-05-11" },
  { name: "Арбуз", price: 50, arrivalDate: "2023-05-21" },
];

products.sort((a, b) => {
  if (a.price != b.price) {
    return (b.price = a.price);
  }
  return new Date(a.arrivalDate) - new Date(b.arrivalDate);
});
console.log(products);

//arr.reverse(); - переворачивает массив

const letters = ["a", "b", "c", d];
letters.reverse();
console.log(letters);
//arr.toReverse(); - не изменяет массив и возвращает перевернутый массив

const letters1 = ["a", "b", "c", d];
const letters2 = letters1.toReverse();
console.log(letters2);

//arr.concat() - добавляект массив к массиву. Не изменяет первчиный массив

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combined = arr1.concat(arr2, arr3);
console.log(combined);

//arr.join() - обьединяет массив в строку но не меняет начальный массив

const words2 = ["Это", "тест", "метода", "join"];
words2.join(" ");
console.log(words2);

const data = [
  { name: "Анна", age: 25 },
  { name: "Мария", age: 30 },
  { name: "Павел", age: 20 },
];

const result = data.map((user) =>
  `${user.name} (${user.age} - лет)`.join(", "),
);

console.log([].join());
console.log([1, , undefined, null, 3].join());
