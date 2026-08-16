"use strict";

//Функции-генераторы и итераторы
//В отличии от обычнызх функций мы их можем прервать выполнить чтото другое и потом продолжить

function* myGen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = myGen();
console.log(iter);

console.log(iter.next()); //{value: 1, done: false}
console.log(iter.next()); //{value: 2, done: false}
console.log(iter.next()); //{value: 3, done: false}
console.log(iter.next()); //{value: undefined, done: true}
console.log(iter.next()); //{value: undefined, done: true}
console.log(iter.next()); //{value: undefined, done: true}
console.log(iter.next()); //{value: undefined, done: true}

//Функции-генераторы возвращают интераторы - обьекты с методом next
//Итераторы одноразовые

for (const val of myGen()) {
  console.log(val);
}

const arr = [100, ...myGen()];
console.log(arr);

function* myGen1(start) {
  yield start++;
  yield start++;
  yield start++;
  yield start;
}
for (const val1 of myGen1(3)) {
  console.log(val1);
}
//Бесконечный генератор
function* myGen2(start) {
  let num = start;
  while (true) {
    yield start++;
  }
}

// Можно прервваться и потом продолжить
const iter1 = myGen2(10);
console.log(iter1.next().value);
console.log(iter1.next().value);
console.log("привет");
console.log(iter1.next().value);
console.log(iter1.next().value);
//Добавим условия остановки
/*
for (const val of myGen2(50)) {
  console.log(val);
  if (val > 75) break;
}
*/
//Упрощают создание итерируемых обьектов

const pizza = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  ingridients: ["тесто", "соус", "помидоры", "сыр"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index >= this.ingridients.length) {
          return { done: true };
        }
        return {
          value: this.ingridients[index++],
          done: false,
        };
      },
    };
  },
};
const iter3 = pizza[Symbol.iterator]();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());

for (const ingridient1 of pizza) {
  console.log(ingridient1);
}

const ingridient = [...pizza];
console.log(ingridient);

//Можно очень сильно упростить c помощью йункцциигенератора итератора
const pizza2 = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  ingridients: ["тесто", "соус", "помидоры", "сыр"],
  *[Symbol.iterator]() {
    for (const value of this.ingridients) {
      yield value;
    }
  },
};
console.log(pizza2);
const iter3_neww = pizza[Symbol.iterator]();
console.log(iter3_neww.next());
console.log(iter3_neww.next());
console.log(iter3_neww.next());
console.log(iter3_neww.next());
console.log(iter3_neww.next());
console.log(iter3_neww.next());

for (const ingridient1 of pizza) {
  console.log(ingridient1);
}

const ingridient2 = [...pizza];
console.log(ingridient2);
const pizza3 = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  ingridients: ["тесто", "соус", "помидоры", "сыр"],
  *[Symbol.iterator]() {
    yield* this.ingridients;
  },
};
const item4_neww = pizza[Symbol.iterator]();
console.log(item4_neww.next());
console.log(item4_neww.next());
console.log(item4_neww.next());
console.log(item4_neww.next());
console.log(item4_neww.next());

const range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};
for (const num of range) {
  console.log(num);
}

const myRange = [...range];
console.log(myRange);

const range_new = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      if (i % 2 == 0) yield i;
    }
  },
};

for (const num of range_new) {
  console.log(num);
}

//Композиции генераторов *yeild - делегируем итерацию другому генератору или итерирующему обьекту

function* gen1() {
  yield 2;
  yield 3;
}

function* gen2() {
  yield 5;
  yield 6;
}

function* mygenerator() {
  yield 1;
  yield* gen1();
  yield 4;
  yield* gen2();
  yield 7;
}
for (const val of mygenerator()) {
  console.log(val);
}

//Работает с любыми итерируемыми обьектами

function* myGen6() {
  yield* [10, 20, 30];
  yield* "Hello";
}
console.log(...myGen6());
//хороший пример композиции генераторов) (перебор букв и цифр по юникоду)
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  yield* generateSequence(48, 57); // 0..9
  yield* generateSequence(65, 90); // A..Z
  yield* generateSequence(97, 122); // a..z
}

let str = "";
for (let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}
console.log(str); // "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//Передача значение в yield

function* counter() {
  let count = 0;
  while (true) {
    const increment = yield count; //yield вернет значение count но когда следующий раз будем передавать next можем присвоить какое то занчание
    count += increment || 0;
  }
}

const gen = counter();

console.log(gen.next().value);
console.log(gen.next(3).value); // 3 попадет вместо yeild
console.log(gen.next(5).value); // 5 попадет вместо yeild
console.log(gen.next(7).value); // 7 попадет вместо yeild
console.log(gen.next().value); // 0 попадет вместо yeild

//Со  строковым значением тоже работает
function* questionGenerator() {
  console.log("Начало");

  // 1. yield отдает "Как вас зовут?" и приостанавливается
  const name = yield "Как вас зовут?";

  // 3. name становится "Алексей" (значение следующего next())
  console.log(`Привет, ${name}!`);

  yield "Приятно познакомиться";
}

const gen5 = questionGenerator();

// Запуск до первого yield
console.log(gen5.next().value); // "Как вас зовут?"

// Передача значения в генератор
console.log(gen5.next("Алексей").value); // "Привет, Алексей!" -> "Приятно познакомиться"

function* ascQuestion() {
  const name = yield "Как Вас зовут?";
  const age = yield "Сколько Вам лет";
  return `Привет ${name}! Надеюсь тебе хорошо жилось ${age} лет`;
}
const gen7 = ascQuestion();
console.log(gen7.next().value);
console.log(gen7.next("Александр").value);
console.log(gen7.next(38).value);

//Можно выбросить ошибку

function* counter() {
  let count = 0;
  while (true) {
    try {
      const increment = yield count; //yield вернет значение count но когда следующий раз будем передавать next можем присвоить какое то занчание
      count += increment || 0;
    } catch (err) {
      console.error("Ошибка в генераторе", err.message);
      count = 0;
    }
  }
}

const gen14 = counter();

console.log(gen14.next().value);
console.log(gen14.next(3).value); // 3 попадет вместо yeild
console.log(gen14.next(5).value); // 5 попадет вместо yeild
console.log(gen14.next(7).value); // 7 попадет вместо yeild
console.log(gen14.throw(new Error("Слишком большое число"))); // Можно выбросить ошибку
console.log(gen14.next(3).value); // 5 попадет вместо yeild
console.log(gen14.next(5).value); // 7 попадет вместо yeild

//Нюансы
//Можно использорвать return в итераторах но тогда итератор заверщшает свою работу

function* fn11() {
  yield 1;
  return 2;
  yield 3;
}
const iter11 = fn11();
console.log(iter11.next());
console.log(iter11.next());
console.log(iter11.next());
console.log(iter11.next());
console.log(iter11.next());

//Функции генеарторы можно записвть function* fn11(){} или function *fn11() {}
//Чаще применяются в бибилиотеках, для ассинхронного управления потоком и т д
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const ids = idGenerator();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

const obj6 = {
  name: "Алекс",
  *gen6() {
    yield this;
  },
};
const iter6 = obj6.gen6();
console.log(iter6.next());
/*
const genFn = obj6.gen;
const iter6 = genFn();
console.log(iter6.next());
*/
