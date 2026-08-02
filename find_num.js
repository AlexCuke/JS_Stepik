let numFin = Math.ceil(Math.random() * 5);
console.log(numFin);
let num = +prompt("Введите числ от 1 до 5");

/*
let numFin = Math.ceil(Math.random() * 5);
switch (numFin) {
  case num:
    alert(`Верно, я загадал число ${numFin}`);
    break;
   case num!=:
    alert(`Нет, не ${num}, я загадал число ${numFin}.`);
}
*/

num = Number.parseFloat(num);
if (!Number.isInteger(num) || num < 1 || num > 5) {
  alert(`Нужно было ввести целое число от 1 до 5`);
} else if (numFin === num) {
  alert(`Верно, я загадал число ${numFin}`);
} else {
  alert(`Нет, не ${num}, я загадал число ${numFin}.`);
}
