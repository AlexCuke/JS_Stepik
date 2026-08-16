"use strict";

//Тип Symbol -используется для создания уникальных значений. Идеально подходит для добавления свойств в обьекты

const sym1 = Symbol();
console.log(sym1);

const sym2 = Symbol("id"); // добавим описание
console.log(sym2);

const sym3 = Symbol("id");
console.log(sym3);
console.log(sym2 === sym3); // не одинаковые

const userID = Symbol("userID");
console.log(userID.toString());

//Глобальный реестр символов
const sym01 = Symbol.for("id");
const sym02 = Symbol.for("id");

console.log(sym01 === sym02);

//Можно получить ключ
console.log(Symbol.keyFor(sym01));

//Если кключа нет в глобальном рееестре
const sym03 = Symbol("id");
console.log(Symbol.keyFor(sym03)); // underfined

///СИмволы хорошо подходят для ключей
//сквадратными скобками
const obj = { hello: "hi", [Symbol("key")]: "value1" };
console.log(obj);

const key2 = Symbol("key2");
//Можем добавить
obj[key2] = "value2";
console.log(obj);

console.log(obj.hello);

//Можем получить значение
console.log(obj[key2]);

// Символьные ключи ерез for  in не перечисляются
const symbols = Object.getOwnPropertySymbols(obj);
for (const symbol of symbols) {
  console.log(
    `Под символом ${symbol.toString} находится значение ${obj[symbol]} `,
  );
}
//Получаем все символы
console.log(Reflect.ownKeys(obj));

//Общеизвестные символы wellounsymbols

Symbol.iterator;

// .toStringTag;
console.log({}.toString());

const pizza = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  [Symbol.toStringTag]: "BestPizza",
};
console.log(pizza.toString());

//.toPrimitive - в зависимости от того что задали. Настройка обьекта
console.log("toprimitive");
const pizza1 = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  [Symbol.toPrimitive](hint) {
    //'string', 'number','default'
    if (hint == "string") {
      return `Пицца размер ${this.size}, цена: ${this.price}`;
    }
    if (hint == "number") {
      return this.price;
    }
    return true;
  },
};

console.log("Обьект " + pizza1);
console.log(String(pizza1));
console.log(+pizza1);

const arr = [10, 20, 30];
arr[Symbol.toPrimitive] = function (hint) {
  if (hint === "number") {
    return this.reduce((acc, val) => acc + val, 0);
  }
  return this.join(", ");
};
console.log(arr * 2);
console.log(`Мой массив ${arr}`);

// .iterator - определяет как будет перебираться обьект в цикле for

const arr1 = [10, 20, 30];
for (const val of arr1) {
  console.log(val);
}
const iterator = arr[Symbol.iterator]();

// у итератора есть метод next в итераторе возвращает обьект определенного вида перечисляет значения

console.log(iterator.next()); //{value: 10, done: false}
console.log(iterator.next()); //{value: 20, done: false}
console.log(iterator.next()); //{value: 30, done: false}
console.log(iterator.next()); //{value: undefined, done: true}
console.log(iterator.next()); //{value: undefined, done: true}
console.log(iterator.next()); //{value: undefined, done: true}
console.log(iterator.next()); //{value: undefined, done: true}

//Практика
const pizza2 = {
  title: "Gavaya",
  size: "Big",
  price: 250,
  ingridients: ["тесто", "соус", "помидоры", "сыр"],
  [Symbol.iterator]() {
    const ingridients = this.ingridients;
    let index = 0;
    return {
      next() {
        return {
          value: ingridients[index++],
          done: index > ingridients.length,
        };
      },
    };
  },
};
const iter = pizza2[Symbol.iterator]();
console.log(iter.next()); //{value: тесто, done: false}
console.log(iter.next()); //{value: соус, done: false}
console.log(iter.next()); //{value: помидоры, done: false}
console.log(iter.next()); //{value: сыр, done: false}
console.log(iter.next()); //{value: undefined, done: true}
console.log(iter.next()); //{value: undefined, done: true}
//for (const ingridients of pizza) {
//}
//Простой счетчик
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => {
        if (current > this.to) {
          return { done: true };
        }
        return { value: current++, done: false };
      },
    };
  },
};
for (const num of range) {
  console.log(num);
}

//Резюме по символам
//Практика зелья
const potion = {
  name: "Зелье невидимости",
  price: 500,
  effect: "Делает пьющего невидимым на 10 минут",
};
potion[Symbol.toPrimitive] = function (hint) {
  if (hint == "string") {
    return `Товар: ${potion.name}. Эффект: ${potion.effect}.`;
  }
  if (hint == "number") {
    return `${potion.price}`;
  }
  return true;
};
//Практика старт-энд
const data_new = {
  start: 0,
  end: -10,
  step: -3,
};

data_new[Symbol.iterator] = function () {
  let count = this.start;
  console.log(`count; ${count}`);
  console.log(`end; ${this.end}`);
  console.log(`step; ${this.step}`);
  return {
    next: () => {
      if (
        (count > this.end && this.step > 0) ||
        this.step === 0 ||
        (count < this.end && this.step < 0)
      ) {
        console.log(`newcount; ${count}>${this.end} || ${this.step}===0`);
        return { done: true };
      }
      count += this.step;
      console.log(`newcount; ${count}`);
      return { value: count - this.step, done: false };
    },
  };
};

const res = [];
for (const num of data_new) {
  res.push(num);
}
console.log(res);
const iter2 = data_new[Symbol.iterator]();
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(iter2.next()); //{value: тесто, done: false}
console.log(res);
