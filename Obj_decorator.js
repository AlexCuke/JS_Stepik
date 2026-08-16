"use strict";
//Декораторы создаюбтся с помощью функций которые принимают другую функцию
//Добавили логику функции другой функцией
function sum(a, b) {
  return a + b;
}
function logTime(fn) {
  return function (...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`Время выполнения функции: ${end - start} ms`);
    return result;
  };
}

const decoratedSum = logTime(sum);
console.log(decoratedSum(5, 10));
console.log(decoratedSum(2, 10));
console.log(decoratedSum(11, 10));
console.log(decoratedSum(6, 10));

const obj = {
  a: 15,
  b: 10,
  sum() {
    return this.a + this.b;
  },
};
const decoratedSum_1 = logTime(() => obj.sum());
console.log(decoratedSum_1());

function logTime_1(fn) {
  return function (...args) {
    const start = performance.now();
    const result = fn.call(this, ...args);
    const end = performance.now();
    console.log(`Время выполнения функции: ${end - start} ms`);
    return result;
  };
}
const decoratedSum_2 = logTime_1(obj.sum);
console.log(decoratedSum_2.call(obj));

obj.sum - logTime_1(obj.sum);
console.log(obj.sum());
