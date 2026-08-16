"use strict";

//Дескрипторы набор характеристик знчений свойств
//С их помощью  мы можем настроить обьекты более гибко
//Data descriptors описываютс свойства
//Accessor descripters - Дескрипторы доступа
//value
//writable
//ennumerable
//configurable

//get
//set

//Data descriptors описываютс свойства
//Object.defineProperty; - позволяет добавить свойство и настроить
const person = {};

Object.defineProperty(person, "name", {
  value: "Павел",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(person);
Object.defineProperties(person, {
  name: {
    value: "Павел",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 35,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(person);

//Флаги дескрипторов все они по умолчанию false
const person1 = {};
Object.defineProperty(person1, "name", {
  value: "Павел",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(person1);
