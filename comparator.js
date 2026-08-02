"use strict";

//Область видимости scope

//Блоки кода

const comparator = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

const comparator_2 = (a, b) => a - b;
