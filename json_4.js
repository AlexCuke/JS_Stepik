"use strict";
// API Application Programming Interface
// Строку в JSON
const obj =
  '[{"name": "Монитор", "price": 5000, "size": "24 дюйма"}, {"name": "Наушники", "price": 3000, "type": "беспроводные"}, {"name": "Микрофон", "price": 2500, "sensitivity": "high"}]';
console.log(`Значение obj:`);
console.log(obj);
console.log("");
const jsonObj_0 = JSON.parse(obj);
console.log(`Значение JSON.parse(obj):`);
console.log(jsonObj_0);
console.log("");

const jsonObj = JSON.parse(obj, (key, value, context) => {
  return value;
});
console.log(`JSON.parse(obj, (key, value, context) => {return value;});:`);
console.log(jsonObj);
console.log("");

const jsonObj_1 = JSON.stringify(obj);
console.log(`JSON.stringify(obj):`);
console.log(jsonObj_1);
console.log("");

const jsonObj_2 = JSON.stringify(jsonObj_0);
console.log(`JSON.stringify(jsonObj_0):`);
console.log(jsonObj_2);
console.log("");

const jsonObj_4 = JSON.parse(obj, (key, value, context) => {
  return value;
});
console.log(`JSON.parse(obj, (key, value, context) => {return value;});:`);
console.log(jsonObj_4);
console.log("");
