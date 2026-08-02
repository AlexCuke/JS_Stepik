"use strict";
// Деструктуризация  массивов

//Можно перебрать массив
/*
const users = [
  { firstname: "Тим", lastname: "Бернерс-Ли" },
  { firstname: "Ада", lastname: "Лавлейс" },
];

for (const obj of users) {
  console.log(obj);
}
*/
//Можно сразу десериализовать
/*
const users = [
  { firstname: "Тим", lastname: "Бернерс-Ли" },
  { firstname: "Ада", lastname: "Лавлейс" },
];

for (const { firstname: name, lastname } of users) {
  console.log(name, lastname);
}

//Object.entries - сразу получаем 2 массива с индексами

console.log(Object.entries(users));

for (const arr of Object.entries(users)) {
  console.log(arr);
}

// Получаем индекс и значение
for (const [i, user] of Object.entries(users)) {
  console.log(i, user);
}

//Красиво

for (const [i, user] of Object.entries(users)) {
  console.log(`${+i + 1}: ${user.firstname} ${user.lastname} - программист`);
}

for (const [i, { firstname, lastname }] of Object.entries(users)) {
  console.log(`${+i + 1}: ${firstname} ${lastname} - программист`);
}
*/
const user = {
  firstname: "Тим",
  lastname: "Бернерс-Ли",
  bithYear: 1955,
  address: { city: "Лондон", country: "Великобритания" },
  achievements: [
    { year: 1989, title: "Создание World Wide Web" },
    { year: 2004, title: "Рыцарь Британской Империи" },
    { year: 2016, title: "Премия Тьюринга" },
  ],
};

const { firstname, address, ...rest } = user;
console.log({ firstname, address, ...rest });
