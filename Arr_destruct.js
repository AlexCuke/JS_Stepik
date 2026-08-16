"use strict";
// Деструктуризация массивов
const arr = [10, 20, 30, 40, 50];
// два значения
const [a, b] = arr;
console.log(a, b);

//Если переменной не будет то underfined
const arr_1 = [10];
const [a1, b1] = arr_1;
console.log(a1, b1);

//Мы можем сразу присвоить
const arr_2 = [10];
const [a2, b2 = 20] = arr_2;
console.log(a2, b2);

//Мы можем использовать дефолтное значение
const arr_3 = [10];
const [a3, b3 = getDefault] = arr_3;
console.log(a3, b3);

function getDefault() {
  return 20;
}

//Можем использовать ...rest  оператор

const arr_4 = [10, 20, 30, 40, 50];
const [a4, b4, ...rest] = arr_4;
console.log(a4, b4, rest);

// Можно использовать свойства обьектов для разделения свойств для обьекта
const username = "Ада Лавлейс";
const user = {}; // сразу создали обьект
[user.firstname, user.lastname] = username.split(" "); // получили его свойства
console.log(user);

//Будет работать с любым итерируемым объектом (symbol.iterator)

//Деструктурируем строрку

const str = "JS";
const [a5, b5] = str;
console.log(a5, b5);
