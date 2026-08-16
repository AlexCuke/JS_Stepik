"use strict";

//Обьекты
//Object.getOwnPropertyDescriptor; - выдаст дескриптор свойства
//Object.getOwnPropertyDescriptors; - выдаст все дескрипторы
const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto);

Object.setPrototypeOf(obj, {
  Sayhello() {
    console.log("hello");
  },
});
obj.Sayhello();
console.log(obj);

//Object.freeze(); - делает обьект полностью неизменяемым
//Object.isFrozen();

const obj2 = { a: 1, inner: { hello: "hi" } };

console.log(Object.isFrozen(obj2));
Object.freeze(obj2);
console.log(Object.isFrozen(obj2));
console.log(obj2.a);
//Замораживается толькко сам обьеккт. Обьеккты внутри не замораживабтся
obj2.inner.hello = "Привет";
console.log(obj2);

//Object.preventExtensions; - запрещает добавлять новые свойства
//Object.isExtensible; - проверяет

const obj7 = {};
console.log(Object.isExtensible);

obj7.a = 5;
console.log(obj7);
Object.preventExtensions(obj7);
obj7.a = 10;
// obj7.b = 100;  будет ошибка
console.log(Object.isExtensible);

//bject.seal; - запечататать (не расширояемый и не удаляемый)
//Object.isSealed; - проверить

const obj8 = { a: 5 };
console.log(Object.isSealed(obj8));

Object.seal(obj8);

console.log(Object.isSealed(obj8));

obj8.a = 10;
// obj8.b = 100;  будет ошибка
//  delete obj.a будет ошибка

//Внутренних обьектов не касается

//Object.hasOwn - является ли свойство собственныим свойством обьекта
const obj9 = { name: "Павел", age: 35 };
console.log(Object.hasOwn(obj9, "name"));
console.log(obj9.constructor);
console.log(Object.hasOwn(obj9, "constructor"));

console.log(obj9.hasOwnProperty("name"));
