"use strict";

//Метод bind - Позволяет привязатьь значение к контектсу функции bind(контекст)
//Создает новую функцию  которая выполнит функцию до юbind с контектсом который  мы передали в bind

const person = {
  firstname: "Павел",
  greet() {
    console.log(`Привет, меня зовут ${this.firstname}`);
  },
};
setTimeout(person.greet.bind(person), 1000);

const greetFn = person.greet.bind(person);
greetFn();

const newGreetFn = person.greet.bind({ firstname: "Андрей" });
newGreetFn();

//Передача параметров в bind

function greet1(greeting, punctuation) {
  console.log(`${greeting}, меня зовут ${this.firstname}${punctuation}`);
}
const person1 = { firstname: "Павел" };

//Можем проставить конктекст и прописать какие будут переданы аргументы
const greetFn1 = greet1.bind(person);
greetFn1("Привет", "!");

const greetFn2 = greet1.bind(person, "Привет");
greetFn2(".");

const greetFn3 = greet1.bind(person, "Привет", "?");
greetFn2();

//У стрелочной функции нельзя изменить контектс

//Своя функция Bind
//

function myBind(fn, context, ...boundArgs) {
  // [Привет]
  return function (...callArgs) {
    //[!]
    return fn.call(context, ...boundArgs, ...callArgs);
  };
}

function greet2(greeting, punctuation) {
  console.log(`${greeting}, меня зовут ${this.firstname}${punctuation}`);
}
const person2 = { firstname: "Павел" };

const greetFn4 = myBind(greet2, person, "Привет");
greetFn4("!!!");
