"use strict";

//Array.from() -создает массив из array-like обьект

//array-like обьект (массивоподоный перебираемый обьект)
//const arr=[]
//console.log(arr)
//const arr = Array.from([2, 3, 6]);
//const arr1 = Array.from("Javascript");
//const arr3 = Array.from(original, (val, i) => val * i);
//const arr4 = Array.from({ length: 5 }, (_, i) => i + 1);

//Array.isArray() - является ли значение массивом
//console.log(Array.isArray("Js"));
//console.log(Array.isArray(["J", "S"]));

//Array.of()
//console.log(Array.of(10, 20, 30));

// Изменение элементов
//Arr.push() - добавлять в конец массива и возвращает новую длину массива

//Arr.pop() - удаление последнего элеметна и возвращает его

//Arr.unshift() - добавлять в начало  массива и возвращает новую длину массива

//Arr.shift() -  удаление первый элеметна и возвращает его

//Arr.splice() - меняет, добавляет, изменяет элементы
// 1 аргумент - откуда начинаем менять
// 2 аргумент сколько элементов удалить
// 3 аргумент и после указываем что должны добавить

//const arr6 = [10, 20, 30];
//arr6.splice(1, 1, 15, 16);
//console.log(arr6);

// если удалить значения то метод возвращает массив удаленных значений
//const removed = arr6.splice(1, 2);
//console.log(arr6);
//console.log(removed);

// можно использоватьь отрицательные индексы (с конца)
//arr6.splice(-1, 1);
//console.log(arr6);

//toSplice() - полчаем новый массив в котором сразу добавлено значение действие
//const arr7 = [10, 20, 30];
//const newArr = arr7.toSpliced(1, 1, 50);

//fill() - заполняет массив заданным значением
//arr7.fill(0, 1, 3);
//console.log(arr7);

//copyWithin() - заменяет часть массива (поставить часть значений на место других)
//const arr8 = [10, 20, 30, 40, 50, 70];
//arr8.copyWithin(0, 3);
//console.log(arr8);

//isinclude() есть ли какой-то элемент в массиве
//const arr9 = [10, 20, 30];
//console.log(arr8.includes(20));
