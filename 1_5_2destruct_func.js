"use strict";
// Деструктуризация функций

function printInfo(
  firstname = "Аноним",
  lastname = null,
  bithYear = "Неизвестно",
  profession = "Не задано",
) {
  console.log(firstname, lastname, bithYear, profession);
}
printInfo("Тим", undefined, undefined, "Программист");

//Лучше сразу принять обьект и деструктурировать
const user = {
  firstname: "Тим",
  profession: "Программист",
};

printInfo(user);

//Все значения по умолчанию
printInfo({});

//Можно сразу в функции поставить значение по умолчанию (пустой обьект по умолчанию)
function printInfo_1({
  firstname = "Аноним",
  lastname = null,
  bithYear = "Неизвестно",
  profession = "Не задано",
} = {}) {
  console.log(firstname, lastname, bithYear, profession);
}
printInfo_1();
