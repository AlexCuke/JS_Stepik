"use strict";

//Геттеры и сеттеры
//Геттеры - для получения данные
//сеттеры Для установки данных

const rectangle = {
  wigth: 2,
  heigth: 3,
  get area() {
    return this.wigth * this.heigth;
  },
  get perimetr() {
    return (this.wigth + this.heigth) * 2;
  },
  set dimensions(dimensions) {
    const [w, h] = dimensions.split(" ").map(Number);
    this.heigth = h;
    this.wigth = w;
  },
};

console.log(rectangle);
console.log(rectangle.area);
console.log(rectangle.perimetr);

rectangle.dimensions = "5 10";
console.log(rectangle);

//Дескрипторы доступа

const rect = {};

Object.defineProperties(rect, {
  wigth: { value: 2, writable: true, enumerable: true, configurable: true },
  heigth: { value: 3, writable: true, enumerable: true, configurable: true },
  area: {
    get() {
      return this.heigth * this.wigth;
    },

    enumerable: true,
    configurable: true,
  },
  perimetr: {
    get() {
      return 2 * (this.heigth + this.wigth);
    },

    enumerable: true,
    configurable: true,
  },
  dimensions: {
    set(dimensions) {
      const [w, h] = dimensions.split(" ").map(Number);
      this.heigth = h;
      this.wigth = w;
    },

    enumerable: true,
    configurable: true,
  },
});

console.log(rect);
console.log(rect.perimetr);

rect.dimensions = "5 10";
console.log(rect.perimetr);
console.log(rect.area);
