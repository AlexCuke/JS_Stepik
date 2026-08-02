"use strict";

//Область видимости scope

//Блоки кода
const language = {
  name: "Javascript",
};
const anotherValue = 1995;
const anotherkey = anotherValue;

language[anotherkey] = anotherValue;
console.log(language);
