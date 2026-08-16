"use strict";

// arr.reduce((acc,val,idx) => {})  -агрегация
// acc- аккумулятор, val- значение, idx - начальное значение

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum);

const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 20 },
  { name: "Мария", age: 30 },
  { name: "Ёлка", age: 30 },
];

const averAge = users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averAge);

// arr.reduceRight((acc,val,idx,arr) => {})  -агрегация (но перебирает массив справа налево)
// acc- аккумулятор, val- значение, idx - начальное значение

const words = ["!", "World", "Hello"];
const sentence = numbers.reduce((acc, word) => `${acc} ${word}`, " ");
console.log(sentence);

//Группировка с arr.reduce()

const letters = ["a", "b", "c", "b", "a"];

// {a:2, b:2, c:2}

const countes = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(countes);
//Групируем по какому-то свойству
const employees = [
  { name: "Анна", department: "Инженерия" },
  { name: "Иван", department: "HR" },
  { name: "Мария", department: "Инженерия" },
  { name: "Ёлка", department: "HR" },
];

const groupByDepartment = employees.reduce((acc, employee) => {
  if (!acc[employee.department]) {
    acc[employee.department] = [];
  }
  acc[employee.department].push(employee);
  return acc;
});
console.log(groupByDepartment);
