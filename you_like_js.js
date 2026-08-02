/*
let answer = prompt("Вам нравится Javascript?");
if (answer.toLowerCase() === "да") {
  console.log("Конечно, отличный язык.");
} else {
  console.log("Не нравится? Вы кнопкой ошиблись?");
}
*/
/*
if (answer.toLowerCase() === "да") {
  alert("Вам нравится Javascript?");
} else {
  alert("Не нравится? Вы кнопкой ошиблись?");
}
*/

let answer = confirm("Вам нравится Javascript?");
if (answer) {
  alert("Вам нравится Javascript?");
} else {
  alert("Не нравится? Вы кнопкой ошиблись?");
}
