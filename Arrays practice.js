"use strict";
/*
Сортировка практика
Вам на вход подается массив объектов, представляющих фильмы.
 Каждый фильм содержит следующие поля:

title — название фильма (строка),
rating — рейтинг фильма (число с плавающей точкой),
year — год выхода фильма (целое число).
Вам необходимо отсортировать фильмы по следующим правилам:

По убыванию рейтинга.
При равном рейтинге - по убыванию года выхода.
Если год тоже совпадает, сортируем по названию фильма в алфавитном порядке.
После сортировки сформируйте строку, в которой фильмы перечислены через запятую и пробел в формате:

Название (Рейтинг, Год)

Полученную строку необходимо вывести.

Чтобы было понятней, подается следующий массив:

[
  {"title": "Фильм C", "rating": 8.5, "year": 2020},
  {"title": "Фильм A", "rating": 8.5, "year": 2020},
  {"title": "Фильм B", "rating": 8.5, "year": 2019},
  {"title": "Фильм D", "rating": 9.0, "year": 2021}
]
                 
Результат должен получиться следующий:

Фильм D (9.0, 2021), Фильм A (8.5, 2020), Фильм C (8.5, 2020), Фильм B (8.5, 2019)
*/

const data1 = [
  { title: "Звёздные войны", rating: 8.7, year: 1977 },
  { title: "Индиана Джонс", rating: 8.3, year: 1981 },
  { title: "Терминатор", rating: 8.1, year: 1984 },
];
const sortedBydata1 = data1.toSorted((a, b) => {
  if (a.rating != b.rating) {
    return b.rating - a.rating;
  }
  if (a.year != b.year) {
    return b.year - a.year;
  }
  return a.title - b.title;
});
const result = sortedBydata1
  .map((user) => `${user.title} (${user.rating}, ${user.year})`)
  .join(", ");
console.log(result);

/*
Сортировка категорий и подкатегорий
Вам необходимо реализовать функцию sortCategories(categories), 
которая принимает массив объектов, представляющих категории товаров. 
Каждая категория имеет имя (name) и список подкатегорий (subcategories). 
Каждая подкатегория тоже содержит имя (name) и уровень популярности (popularity).

Необходимо из функции вернуть полностью новый массив, с новыми объектами внутри. 
При этом, необходимо отсортировать категории по имени в алфавитном порядке
 (по возрастанию), а внутри каждой категории отсортировать подкатегории по 
 популярности в порядке убывания. Исходный массив должен остаться без изменений.

Примечание:
Обратите внимание, что вам необходимо оставить переданный в функцию массив 
без изменений. Проверяться это не будет, но вам за это потом отвечать ;)
Учтите, что некоторые категории могут не иметь подкатегорий, о
днако такие категории тоже должны присутствовать в результате.
Пример:
В функцию подается следующий массив:

*/
const data = [
  {
    name: "Игрушки",
    subcategories: [
      { name: "Конструкторы", popularity: 95 },
      { name: "Мягкие игрушки", popularity: 88 },
    ],
  },
  {
    name: "Канцелярия",
    subcategories: [],
  },
  {
    name: "Аптека",
    subcategories: [
      { name: "Витамины", popularity: 76 },
      { name: "Лекарства", popularity: 92 },
    ],
  },
];
console.log(data);
function sortCategories(categories) {
  // 1. Создаём глубокую копию, чтобы не мутировать исходный массив
  const cloned = structuredClone(categories);

  // 2. Сортируем категории по имени (по возрастанию, A–Z)
  cloned.sort((a, b) => a.name.localeCompare(b.name));

  // 3. Для каждой категории сортируем её подкатегории по популярности (по убыванию)
  for (const category of cloned) {
    // Если подкатегорий нет, ничего не делаем (sort на пустом массиве безопасен)
    category.subcategories.sort(
      (subA, subB) => subB.popularity - subA.popularity,
    );
  }

  return cloned;
}

// Проверка
console.log(sortCategories(data));

/*
data1.sort((a, b) => {
  if (a.rating != b.rating) {
    return (b.rating = a.rating);
  }
  if (a.year != b.year) {
    return (b.year = a.year);
  }
  return b.title - a.title;
});
console.log(data1);
//const sortedBydata = data.toSorted((a, b) => a.rating.localeCompare(b.rating));
const sortedBydata1 = data.toSorted((a, b) => b.rating - a.rating);
console.log(sortedBydata1);

/*
//arr.sort() - сортирует и меняет наш массив.Сравнивает посимвольно как строки
const words = ["помидор", "огурец", "банан"];
words.sort();
console.log(words);

//arr.toSorted - сортирует и возвращает новый массив (отсортированный).Сравнивает посимвольно как строки
const words1 = ["помидор", "огурец", "банан"];
const sortedWords = words.toSorted();
console.log(sortedWords);

//arr.sort((a,b)=>{if (a<b) {return -1}if (a>b) {return 1} return 0}) - сортирует и меняет наш массив.
// Сравнивает по числам
//arr.sort((a,b)=>a-b) - сортирует и меняет наш массив.
// Сравнивает по числам
const numbers = [5, 7, 6, 4, 9];
numbers.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(numbers);
const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 20 },
  { name: "Мария", age: 30 },
  { name: "Ёлка", age: 30 },
];
const sortedByUser = users.toSorted((a, b) => a.name - b.name);
//.localeCompare() учитывает особенности буквы ё
const sortedByUser1 = users.toSorted((a, b) => a.name.localeCompare(b.name));
*/
//Двойная сортировка

const products = [
  { name: "Молоко", price: 80, arrivalDate: "2023-05-01" },
  { name: "Масло", price: 100, arrivalDate: "2023-05-11" },
  { name: "Арбуз", price: 50, arrivalDate: "2023-05-21" },
];

products.sort((a, b) => {
  if (a.price != b.price) {
    return (b.price = a.price);
  }
  return new Date(a.arrivalDate) - new Date(b.arrivalDate);
});
console.log(products);
/*
//arr.reverse(); - переворачивает массив

const letters = ["a", "b", "c", d];
letters.reverse();
console.log(letters);
//arr.toReverse(); - не изменяет массив и возвращает перевернутый массив

const letters1 = ["a", "b", "c", d];
const letters2 = letters1.toReverse();
console.log(letters2);

//arr.concat() - добавляект массив к массиву. Не изменяет первчиный массив

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combined = arr1.concat(arr2, arr3);
console.log(combined);

//arr.join() - обьединяет массив в строку но не меняет начальный массив

const words2 = ["Это", "тест", "метода", "join"];
words2.join(" ");
console.log(words2);

const data = [
  { name: "Анна", age: 25 },
  { name: "Мария", age: 30 },
  { name: "Павел", age: 20 },
];

const result = data.map((user) =>
  `${user.name} (${user.age} - лет)`.join(", ")
);

console.log([].join());
console.log([1, , undefined, null, 3].join());
*/
