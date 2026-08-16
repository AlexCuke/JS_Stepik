"use strict";

//Обьекты и свойства обьектов
//Порядок перебора свойств

const product = { title: "Картошка", title: 25 };
for (const key in product) {
  console.log(`Свойство ${key}, хранит значение ${product[key]}`);
}

const obj = { 5: 5, "-1": 1, 1.2: 1.2, Привет: "Привет", 3: 3 };
obj[0] = 0;
obj[-2] = -2;
console.log(Object.keys(obj));

//1 Целочисленные ключи
//2 Ключи в порядке добавления

//Если важен порядок ключей используем map
const map = new Map();
map.set(5, "five");
map.set("Привет", "Hello");
map.set("-1", "minus one");
for (const [key, value] of map) {
  console.log(`Ключ ${key}, значение ${value}`);
}

//Клонирпование и копирование обьектов
//Примитивные типы передаются по значению
//Внутри функции изменили только копию. Когда передаем внутрь функции происходит передача копии
function fn(number) {
  number++;
  console.log("Внутри функции", number);
}

let number = 5;
fn(number);
console.log("Снаружи", number);

//Обьект - ссылочный тип
//Передается копия ссылки на значение

function fn1(obj1) {
  obj1.value++;
}

const myObject = { value: 5 }; // 0xAABC42
fn1(myObject);
console.log(myObject.value);

function fn2(arr) {
  arr.push(4);
}
const arr = [1, 2, 3];
fn2(arr);
console.log(arr);

function fn3(obj) {
  // 0xAABC42
  obj = { value: 100 }; // 1xSSBC42
}
const obj2 = { value: 5 };
fn3(obj2);
console.log(obj2); // 0xAABC42

//Сравнение значений
//В примитивных типах сравниваются значения
const num1 = 5;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 == num2);

const str1 = "Hello";
const str2 = "Hello";
console.log(str1 === str2);
console.log(str1 == str2);

//Кроме Nan

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

//Обекты сравниваются по ссылке

const obj11 = { a: 1, b: 1 }; //0x12354C
const obj12 = { a: 1, b: 1 }; //0xCCAABB
const obj13 = obj11; //0x12354C

console.log(obj11 === obj12); // сравниваем ссылки (хранятся в разных местах ОП) 0x12354C=== 0xCCAABB
console.log(obj11 === obj13); // сравниваем ссылки 0x12354C=== 0x12354C
console.log(obj11 == obj12); // сравниваем ссылки (хранятся в разных местах ОП) 0x12354C== 0xCCAABB
console.log(obj11 == obj13); // сравниваем ссылки 0x12354C== 0x12354C

//Клонирование обьектов
const o1 = {}; //0x12354C
const o2 = o1; //0x12354C В ОП фактически один обьект

o2.value = 5;
console.log(o1);

//Поверхностое копирование (создает новый обьект и все свойства первого уровня) и копирует только перечисляемые свойства (не свойства по умолчанию)
const original = {
  a: 1,
  b: {
    c: 2,
  },
};

const copy = Object.assign({}, original);
//или  const copy = {...original};
console.log(copy);
console.log(original === copy);
copy.a = 5;
console.log(copy);
console.log(original);

copy.b.c = 10; // во втором уровне изменится везде и в копируемом и в оригинальном
console.log(copy);
console.log(original);

//Копирование JSON
//ГЛубокое копирование
//JSON.parse(JSON.stringify(original)); -работает с простыми массивами

const original1 = {
  a: 1,
  b: {
    c: 2,
  },
};

const deepCopy = JSON.parse(JSON.stringify(original1)); // создал строку json и распарсил  в новык обьекты
deepCopy.b.c = 100;
console.log(deepCopy);
console.log(original1);

//НЕ скопирует функции, Underfind - будет отсутсвует, не склонирует символы, дата будет строкой,map, set переведет в обынче обьекты,
// не копирует цикличные ссылки
const obj5 = { a: 1 };
obj5.self = obj5;
console.log(obj5);

//Свою функцию
console.log("Свою функцию");
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (const key of Object.keys(obj)) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}
const original7 = {
  a: 1,
  b: {
    c: 2,
  },
};

const deepCopy1 = deepClone(original7);
deepCopy1.b.c = 100;

console.log(deepCopy1);
console.log(original7);

//Есть ограничения на использование. Пример
const original_new = {
  date: new Date(),
  fn: () => console.log("test"),
  undef: undefined,
};
const copy_new = deepClone(original_new);
console.log(copy_new);

//https://habr.com/ru/companies/otus/articles/897886/
//structuredClone()
