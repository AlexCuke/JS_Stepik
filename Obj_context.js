"use strict";
//контекст - значение которое ледит в this
console.log(this);

const person = {
  firstname: "Павел",
  greet() {
    console.log(`Привет, меня зовут ${this.firstname}`);
  },
};
person.greet();

//This у стрелочной функции фиксируется в момент создания

console.log(this);
const fn = () => {
  console.log(this);
};
fn();

const person_1 = {
  firstname: "Павел",
  greet: () => {
    // В этом примере this=Window
    console.log(this);
    console.log(`Привет, меня зовут ${this.firstname}`);
  },
  greet_1() {
    // В этом примере this=person_1.firstname
    const arrowFn = () => {
      console.log(`Привет, меня зовут ${this.firstname}`);
    };
    arrowFn();
  },
};

person_1.greet();
person_1.greet_1();

//Функции и аргументы ( Обычные функции имеют обьект argumenst)

function fn_1() {
  console.log(arguments);
  for (const arg of arguments) console.log(arg);
}

fn_1(2, "ку", false);
//разное поведение с use strict и без
function fn_2(num) {
  num += 5;
  console.log(num);
  console.log(arguments);
}
fn_2(2, "ку", false);

//У стрелочных функций не arguments // используем рест оператор

const fn_3 = (...rest) => {
  console.log(rest);
};
fn_3(2, "ку", false);

//Проблемы с контекстом

const person_2 = {
  firstname: "Павел",
  greet() {
    console.log(this);
    console.log(`Привет, меня зовут ${this.firstname}`);
  },
};

person_2.greet();
//Если таймаут setTimeout то this сбросится
setTimeout(person_2.greet, 1000);
//Исправить (внутрь функцию)
setTimeout(function () {
  person_2.greet();
}, 1000);
//или стрелочной функцией

setTimeout(() => person_2.greet(), 1000);

const person_3 = {
  firstname: "Павел",
  greet(name) {
    console.log(this);
    console.log(`Привет ${name}, меня зовут ${this.firstname}`);
  },
};
["Анна", "Иван"].forEach(person_3.greet, person_3);

const person_4 = {
  firstname: "Павел",
  friends: ["Анна", "Иван"],
  greetFriends() {
    console.log(this);
    this.friends.forEach((friend) => {
      console.log(`Привет ${friend}, меня зовут ${this.firstname}`);
    });
  },
};
person_4.greetFriends();
