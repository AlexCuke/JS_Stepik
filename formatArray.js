"use strict";

//Область видимости scope

//Блоки кода

const formatArray = (arr) => {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i < arr.length - 1) {
      str += " -> ";
    }
  }
  return str;
};
