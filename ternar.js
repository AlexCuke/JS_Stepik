"use strict";

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
