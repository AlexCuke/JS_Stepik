"use strict";
// API Application Programming Interface
// Строку в JSON

console.log(obj);
("use strict");
// API Application Programming Interface
// Строку в JSON
const jsonString = '{"num":50, "date": "2024-12-25T12:00:00Z" }';
/*
const obj = JSON.parse(jsonString, (key, value, context) => {
  return value;
});
console.log(obj);
*/
/*
const obj = JSON.parse(jsonString, (key, value, context) => {
  if (key == "date") {
    return new Date(value);
  }

  return value;
});
console.log(obj);
*/
// Использование context
/*
const newjsonString = '{"val": 1231242524143125241}';
const obj = JSON.parse(newjsonString, (key, value, context) => {
  if (key == "val") {
    return BigInt(context.source);
  }
  return value;
});
console.log(obj);
*/
//Строка некорректно записана Проверка Try catch
const json = '{ name: "Товар", price: 1500}';
try {
  const obj = JSON.parse(json);
} catch (error) {
  console.log(`Не удалось распарсить строку ${json}`);
}

const obj = [
  { name: "Мышка", price: 1000 },
  { name: "Клавиатура", price: 1500 },
];

const data = obj.toString();
const data_1 = JSON.stringify(obj);
const users = JSON.parse(data_1);

console.log(users.map((user) => `${user.name}`));

/*
const testData = '[{"name": "Ivan", "age": 25}, {"name": "Anna", "age": 29}]';

// Парсим как обычно
const users_1 = JSON.parse(testData);
// Перебираем пользователей
const ages = users_1.map((user) => `${user.name} ${user.age} years old`);
// Выводим строчный ответ, а не массив
console.log(ages.join(", "));
*/
