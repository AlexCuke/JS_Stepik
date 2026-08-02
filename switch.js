"use strict";
/*
const color = prompt("Введите название цвета: ");
if (color === "red") {
  console.log("Код красного цвета #FF0000 или rgb(255,0,0)");
} else if (color === "green") {
  console.log("Код зеленого цвета #00FF00 или rgb(0,255,0)");
} else if (color === "blue") {
  console.log("Код синего цвета #0000FF или rgb(0,0,255)");
} else if (color === "gray" || color === "grey") {
  console.log("Код серого цвета #808080 или rgb(128,128,128)");
} else {
  console.log("Смотри таблицу соответствия цветов");
}
  */

const color = prompt("Введите название цвета: ");
switch (color) {
  case "red":
    console.log("Код красного цвета #FF0000 или rgb(255,0,0)");
    break;
  case "green":
    console.log("Код зеленого цвета #00FF00 или rgb(0,255,0)");
    break;
  case "blue":
    console.log("Код синего цвета #0000FF или rgb(0,0,255)");
    break;
  case "gray":
  case "grey":
    console.log("Код серого цвета #808080 или rgb(128,128,128)");
    break;
  default:
    console.log("Смотри таблицу соответствия цветов");
}

switch (animal) {
  case "кошка":
  case "собака":
  case "хомяк":
    console.log("Это домашнее животное.");
    break;
  case "рыба":
  case "птица":
  case "черепаха":
  case "ящерица":
    console.log("Это экзотический питомец.");
    break;
  default:
    console.log("Это мне неизвестно.");
}
