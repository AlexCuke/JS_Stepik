let number = 5;
let fact = 1;
number = prompt("enter the number");
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}

console.log(fact);

//.toString - число в строку
const num = 52;
console.log(num);
console.log(num.toString());
console.log(num.toString(2));
console.log(num + ""); // число превратит в строку и склеит 2 строки
console.log((52.2).toString(2));
console.log((52).toString(2));



//Строку в числов  Number(str)
const str = "52.86";
console.log(str);
console.log(+str);
console.log(Number(str));

//.parseIns(str) Строку в целочисленное число  Number(str) собирает слева направо значение
console.log(Number.parseIns(str);

//.parseFloat(str) Строку в дробное число  Number(str) собирает слева направо значение
console.log(Number.parseFloat(str);
console.log(Number(str));



//string -строка

//const str1 = "Hello";
//const str2 = "Hello";
//const str3 = `Hello`;

//const count = 5;
//console.log(`У меня есть ${count + 1} яблок`);
//console.log(`У меня есть" +(count+1)+" яблок`);

const str = `
Привет
пока
`;
const str1 = "Привет\nпока";

console.log(str);
console.log(str1);
console.log("Привет \"Павел"\пока");

let num1 = 5;
const postfix = ++num1;

console.log(postfix);
console.log(num1);

let num2 = 5;
const prefix = num2++;

console.log(prefix);
console.log(num2);

const isUserLogin=true;
if(!isUserAdmin){
    console.log("Вход запрещен");
}

console.log((num<10 || num>20))

//Оператор нулевого слияния

const userName = prompt("Как вас зовут?");
alert(`Привет, ${userName || "незнакомец"}!`);

//Оператор нулевого слияния

const lang = prompt("Какой язык программирования вы хотите изучить?");
if (lang == "javascript") {
  console.log("Все верно!");
} else {
  console.log("Не знаете? JavaScript!");
}

const userName = prompt("Как вас зовут?");
if (userName === "Иван") {
  console.log("Ура!");
}

const messageCount = prompt("Сколько сообщений необходимо отправитть?");
if (messageCount) {
  console.log("Ура!");
}

str.toLowerCase;

//Тернаный оператор - работает с тремя  операндами условие?  "ADMIN"? true: false;
/*
const userRole = "ADMIN";
let accessAlloaded;
if (userRole === "ADMIN") {
  accessAlloaded = true;
} else {
  accessAlloaded = false;
}
console.log(accessAlloaded);
*/

/*
const userRole = "ADMIN";
let accessAlloaded=false;
if (userRole === "ADMIN") {
  accessAlloaded = true;
} 
console.log(accessAlloaded);
*/
/*
const userRole = "ADMIN";
let accessAlloaded = userRole === "ADMIN" ? true : false;
if (accessAlloaded = true) {
  console.log("Доступ разрешен");
} else {
   console.log("Доступ запрещен");
}
*/
/*
const userRole = "ADMIN";
let accessAlloaded = userRole === "ADMIN" ? true : false;
if (accessAlloaded) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

*/
/*
const userRole = "ADMIN";
let accessAlloaded = userRole === "ADMIN" ? true : false;
accessAlloaded
  ? console.log("Доступ разрешен")
  : console.log("Доступ запрещен");
*/
/*
const userRole = "ADMIN";
let accessAlloaded = userRole === "ADMIN" ? true : false;
console.log(accessAlloaded ? "Доступ разрешен" : "Доступ запрещен");
*/
/*
const userRole = "ADMIN";
let accessAlloaded = userRole === "ADMIN";
console.log(accessAlloaded ? "Доступ разрешен" : "Доступ запрещен");
*/
const userRole = "ADMIN";
let accessAllowed = userRole === "ADMIN";
console.log(`Доступ ${accessAllowed ? "разрешен" : "запрещен"}`);
//Function declaration function alertHello() {alert('Привет')}
/*
function alertHello() {
  alert('Привет')
}
*/
//Function expression const alertHello = function () {alert("Привет");};
const alertHello = function () {
  alert("Привет");
};
alertHello;
