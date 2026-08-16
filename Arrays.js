"use strict";
//Массивы

const arr10 = [10, 20, 30];
console.log(arr10);

//Индекс
console.log(arr10[0]);

//Длина
console.log(arr10.length);

// .at - переходим к индексу
console.log(arr10.at(1.5));

// length - 1  последнее значение
console.log(arr10[arr10.length - 1]);

//Array.from()

//array-like обьект (массивоподоюный0
const o = { length: 5 };
//перебираемый обьект)
//const arr=[]
//console.log(arr)

const arr = Array.from([2, 3, 6]);
console.log(arr);
const arr1 = Array.from("Javascript");
console.log(arr1);

const s = new Set("Javascript");
const arr2 = Array.from(s);
console.log(arr2);

const original = [10, 20, 30];
const arr3 = Array.from(original, (val, i) => val * i);
console.log(arr3);

const arr4 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr4);

//Array.isArray() - является ли значение массивом

console.log(Array.isArray("Js"));
console.log(Array.isArray(["J", "S"]));

//Array.of()
console.log(Array.of(10, 20, 30));

// Изменение элементов
//Arr.push() - добавлять в конец массива и возвращает новую длину массива

const arr5 = [10, 20, 30];
arr5.push(40, 50);
console.log(arr5);
console.log(arr5.push(60));

//Arr.pop() - удаление последнего элеметнаи возвращает его

var lastElem = arr5.pop();
console.log(arr5);

//Arr.unshift() - добавлять в начало  массива и возвращает новую длину массива

arr5.unshift(-20, -10, 0);
console.log(arr5);

//Arr.shift() -  удаление первый элеметна и возвращает его
arr5.shift();
console.log(arr5);
var firstElem = arr5.shift();
console.log(firstElem);
console.log(arr5);

//Arr.splice() - меняет, добавляет, изменяет элементы
// 1 арг - откуда начинаем менять
// 2 арг сколько элементов удалить
// 3 арг и после указываем что должны добавить

const arr6 = [10, 20, 30];
arr6.splice(1, 1, 15, 16);
console.log(arr6);
// если удалить значения то возвращает массив удаленных значений

const removed = arr6.splice(1, 2);
console.log(arr6);
console.log(removed);

// можно использоватьь отрицательные индексы (с конца)
arr6.splice(-1, 1);
console.log(arr6);

//toSplice() - полчаем новый массив в котором сращзу выполнено действие

const arr7 = [10, 20, 30];
const newArr = arr7.toSpliced(1, 1, 50);

//fill() - заполняет массив заданным значением c

arr7.fill(0, 1, 3);
console.log(arr7);

arr7.fill(0);
console.log(arr7);

//copyWithin() - заменяет часть массива (поставить часть значений на место других)
const arr8 = [10, 20, 30, 40, 50, 70];
arr8.copyWithin(0, 3);

console.log(arr8);

arr8.copyWithin(1, 2, 4);
console.log(arr8);

//isincludeы() есть ли какой-то элемент в массиве

const arr9 = [10, 20, 30];
console.log(arr8.includes(20));
console.log(arr8.includes(50));
