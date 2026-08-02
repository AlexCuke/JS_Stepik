"use strict";

// Павел Тарасов
console.log(fullName("Павел", "ТАРАСОВ"));
// Павел Тарасов
console.log(fullName("павеЛ", "тАРаСоВ"));

function capitalize(str) {
  const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

function fullName(first, last) {
  return `${capitalize(first)} ${capitalize(last)}`;
}
