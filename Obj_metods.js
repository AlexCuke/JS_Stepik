"use strict";

//Обьекты
///Object - функция конструктор обьектов

const obj = {};
console.log(obj);
// Object.assign() - копирует перечисляемые сваойства в целевой обьект
const target = { a: 1, b: 3 };
const source = { c: 3, [Symbol("hello")]: 410 };
const result_0 = Object.assign(target, source);
console.log(result_0);
console.log(result_0 === target);
//Object.create(Обьект-прототип) создает обьект с прототипом

const proto = {
  greet() {
    console.log(`HEllo`);
  },
};

const obj1 = Object.create(proto);
console.log(obj1);

const obj2 = Object.create(null, {
  firstname: {
    value: "Павел",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastname: {
    value: "Тарасов",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullname: {
    get() {
      return `${this.firstname} ${this.lastname}`;
    },
    set(value) {
      const [first, last] = value.split(" ");
      this.firstname = first;
      this.lastname = last;
    },
    enumerable: true,
    configurable: true,
  },
});
console.log(obj2);
console.log(obj2.fullname);

obj2.fullname = "Иван Иванов";
console.log(obj2);
console.log(obj2.fullname);

//Object.entries - возращаеот массивы под  индексом 0 ключ, под  индексом 1 значение
const obj3 = { a: 2, b: 3, c: 4 };
const entries = Object.entries(obj3);
console.log(entries);

const map = new Map(Object.entries(obj3));
console.log(map);

for (const [key, value] of Object.entries(obj3)) {
  console.log(key, value);
}

//Object.fromEntries - обратная функция Object.entries
const entries1 = [
  ["a", 5],
  ["b", 2],
];

const objE = Object.fromEntries(entries1);
console.log(objE);

const mapE = new Map(entries1);
console.log(mapE);

const objE1 = Object.fromEntries(map);
console.log(objE1);

const obj4 = { a: 1, b: 5, c: 20 };
let result = Object.entries(obj4);
console.log(obj4);
//Знгачения которые больше 3х
result = Object.fromEntries(Object.entries(obj4).filter(([_, val]) => val > 3));
console.log(result);

//
//Object.keys; - массив ключей
//Object.values; - массив значений
const obj5 = { a: 2, b: 3, c: 4 };
console.log(Object.keys(obj5));
console.log(Object.values(obj5));

const sum = Object.values(obj5).reduce((acc, val) => acc + val, 0);
console.log(sum);

//Праквтика
//Миграция данных пользователя

const data = {
  oldUser: {
    userName: "Алексей Смирнов",
    userEmail: "alexey@mail.ru",
    profilePic: "photo.jpg",
  },
  fieldMapping: {
    userName: "login",
    userEmail: "email",
  },
};

const { oldUser, fieldMapping } = data;
console.log(oldUser);
console.log(fieldMapping);
const oldUser_1 = Object.entries(oldUser);
for (const a of oldUser_1) console.log(a);
const fieldMapping_1 = Object.entries(fieldMapping);
for (const b of fieldMapping_1) console.log(b);

const mapE = new Map(oldUser_1);
console.log(mapE);
const mapA = new Map(fieldMapping_1);
console.log(mapA);

const newUser = Object.fromEntries(
  Object.entries(oldUser)
    .filter(([key]) => fieldMapping[key])
    .map(([key, value]) => [fieldMapping[key], value]),
);

//Object.getOwnPropertyDescriptor; - выдаст дескриптор свойства
//Object.getOwnPropertyDescriptors; - выдаст все дескрипторы
const obj = { a: 1, b: 2 };
const desc = Object.getOwnPropertyDescriptor(obj, "a");
console.log(desc);
const descs = Object.getOwnPropertyDescriptors(obj);
console.log(descs);

//Object.getOwnPropertyNames(obj)
// Object.getOwnPropertySymbols(obj)
const obj1 = Object.create(Object.prototype, {
  a: { value: 1, enumerable: true },
  b: { value: 2, enumerable: false },
  [Symbol("Hello")]: { value: 2, enumerable: false },
});
console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertySymbols(obj1));
