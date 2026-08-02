"use strict";
// Деструктуризация обьектов
/*
const user = { firstname: "Тим", lastname: "Бернерс-Ли", bithYear: 1955 };
const { firstname, lastname, bithYear } = user;
console.log(user);
*/

// Можно сразу создать переменные с другими названиями и положить свойство из обьекта
/*
const user = { firstname: "Тим", lastname: "Бернерс-Ли", bithYear: 1955 };
const { firstname: fname, lastname, bithYear: year } = user;
console.log(fname);
console.log(year);
*/

//Значение по умолчанию. Можно задать значение по умолчанию если  в обьекте не будет этого значения
/*
const {
  firstname: fname,
  lastname,
  bithYear: year,
  profession = getDefaulprofession(),
} = user;
console.log(fname);
console.log(year);
console.log(profession);

function getDefaulprofession() {
  return "Программист";
}
*/

//Вложенные обьекты. С ними сложнее. Можно создать обьект а из него достать свойства
/*
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

const {
  firstname: username,
  proffesional: prof = getDefaulprofession(),
  address: { city: town, country },
  achievements: [
    { year: year0, title: title0 },
    ,
    { year: year2, title: title2 },
  ],
} = user;

console.log(username);
console.log(prof);
console.log(town);
console.log(country);
console.log(year0, title0);
console.log(year2, title2);
function getDefaulprofession() {
  return "Программист";
}
*/
