"use strict";
//Методы call и apply
//В JS функции обьекты первого класса. Мы можем передавать одну функцию в другую

function greet(greeting, punctuation) {
  console.log(`${greeting},${this.name}${punctuation}`);
}
const user = { name: "Павел" };
//Call
//использовали как this внутри функции
greet.call(user, "Привет", "!");
//Аналогично массивом
greet.apply(user, ["Привет", "!"]);

const args = ["Привет", "!"];
greet.apply(user, args);

//Можно всегда использовать call
greet.call(user, ...args);
//стралочная функция не сменит контекст
const fn = () => {
  console.log(this);
};
fn.call(5);

//Разварачиваем значения аргументиов
function fn_1() {
  console.log([...arguments].filter((arg) => arg >= 5));
}

fn_1(-2, 10, 5);
