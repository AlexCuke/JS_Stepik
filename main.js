"use strict";

const arr = [
  { name: "Аня", score: 95 },
  { name: "Петя", score: 45 },
  { name: "Саша", score: 85 },
  { name: "Лена", score: 92 },
];
console.log(arr);
// сортируем у кого оценка больше 50
const newarr1 = newarr.map((student) => {
  return {
    name: student.name,
    grade: student.score >= 90 ? "A" : "B",
  };
});
const jsonString = JSON.stringify(newarr1);
console.log(jsonString);
