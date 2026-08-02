"use strict";

//обеьект Date

const now = new Date(); // текущая дата и время
console.log(now);
console.dir(now);
const specDate = new Date("2023-12-31"); // текущая дата и время

console.log(specDate);
console.dir(specDate);

const timestampDate = new Date(12315124542); // текущая дата и время

console.log(timestampDate);
console.dir(timestampDate);

//изменение даты
const my2007 = new Date(2007, 23, 21, 55, 21, 898);
my2007.setFullYear(2020);
my2007.setUTCFullYear(2020);

my2007.setHours(21);
my2007.setDate(20);
my2007.setMinutes(16);
console.log(my2007);

//автокорректировка даты

const my2008 = new Date(2008, 15);
console.log(my2008);
my2007.setDate(50);

//Замеры времени Date.now() текущая дата и время

console.log(Date.now());

console.log(Date.now());

function fn() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result = +1;
  }
  return result;
}
/*
const start = Date.now();
console.log(fn());
const end = Date.now();
console.log(`Время выполнение кода ${end - start} мс`);
*/
//Получение даты из строки
//Date.parse() -всегда возвращает timestamp
const ts1 = Date.parse("2007");
console.log(ts1, new Date(ts1));

const ts2 = Date.parse("2007-01");
console.log(ts2, new Date(ts2));

//формат даты/времени
const my2009 = new Date(2007, 23, 21, 55, 21, 898);
console.log(my2007.toLocaleDateString());
console.log(my2007.toLocaleTimeString());
console.log(my2007.toLocaleString("ru-RU"));

//Обьект Intl - Однако, в JavaScript существует встроенный объект Intl,
// он предоставляет удобные средства для локализации не только дат,
// но и чисел, валют и других данных.Intl — это встроенный глобальный объект
// , предназначенный для интернационализации. Если проще - это объект, который позволяет
// форматировать данные с для разных языков. Например, вы можете отображать даты по-русски, по-английски или по-французски,
// в зависимости от настроек браузера у пользователя (либо можете сами укажете строго настройки).

console.log(my2008.valueOf());
console.log(my2008.getMilliseconds());
console.log(my2008.getTime());
console.log(my2008.timestamp());

c;
