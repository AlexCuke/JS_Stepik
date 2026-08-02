"use strict";

//Область видимости scope

//Блоки кода

function isSorted(arr) {
  let a = true;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) a = true;
    else {
      a = false;
      break;
    }
  }
  return a;
}
