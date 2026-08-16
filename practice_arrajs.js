"use strict";

// Итерация массива
// forEach() перебирает массив и выбимрает функцию для каждого элемента массива

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((val, idx) => console.log(idx, val));

const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 20 },
  { name: "Мария", age: 30 },
  { name: "Ёлка", age: 30 },
];

users.forEach((user, idx) =>
  console.log(`${idx + 1},${user.name}, ${user.age}`),
);
/*
getUser().forEach((user, idx, arr) => {
  const nextUser = arr[idx + 1];
  if (nextUser) {
    console.log(`Пользователь ${user.name} стоит рядом с ${nextUser.name}`);
  } else {
    console.log(`После пользователя ${user.name} никого нет`);
  }
});*/
//arr.keys() - возвращают обьект ключи итератора
//arr.values() - возвращают обьект значения итератора
//arr.entries() - возвращают обьект ключи-значения итератора
const fruits = ["яблоко", "Груша", "Арбуз"];
const iterator = fruits.keys();
for (const key of iterator) {
  console.log(key);
}

const iterator1 = fruits.values();
for (const value of iterator1) {
  console.log(value);
}

const iterator2 = fruits.entries();
for (const entry of iterator2) {
  console.log(entry);
}
// Можно преобразовать  в массив двумя способами
console.log(...iterator);
console.log(iterator1.toArray);
// Итератор одноразовый обьект
const obj = [
  { name: "Американо", price: 90 },
  { name: "Мuffин с черникой", price: 150 },
  { name: "Фреш апельсиновый", price: 180 },
];
/*
1. Капучино - 120 руб.
2. Круассан - 80 руб.
*/
const obj_iterator = obj.entries();
for (const [idx, value1] of obj_iterator) {
  console.log(`${idx + 1}. ${value1.name} - ${value1.price} руб.`);
}

const object = [
  { name: "Капитан Керн", iq: 150 },
  { name: "Глорибас", iq: 120 },
  { name: "Танос", iq: 200 },
];
object.sort((a, b) => b.iq - a.iq);
const object_iterator = object.entries();
for (const [idx, value2] of object_iterator) {
  console.log(`${idx + 1}: ${value2.name} (IQ: ${value2.iq})`);
}

// ПРАКТИКА

const sales = [
  { products: "Notebook", price: 1000, quantity: 2, category: "PC" },
  { products: "Laptop", price: 800, quantity: 5, category: "PC" },
  { products: "Book", price: 350, quantity: 2, category: "Books" },
  { products: "Mouse", price: 150, quantity: 2, category: "PC" },
];

const totalElectronicCost = sales
  .filter((item) => item.category === "PC") //Отфильтровали товары категории товары
  .map((item) => ({ ...item, price: item.price * 1.1 })) // новый массив где цена увеличена на 10 %
  .reduce((acc, item) => acc + item.price * item.quantity, 0); // вычислисть общую стоимость

console.log(`Общая стоимость электроники ${totalElectronicCost}`); // вывести в консоль

const students = [
  { name: "Ann", age: 20, gpa: 4.5, faculity: "Medicine" },
  { name: "Ivan", age: 22, gpa: 3.8, faculity: "Engeneer" },
  { name: "Petr", age: 20, gpa: 4.2, faculity: "Engeneer" },
  { name: "Maria", age: 20, gpa: 4.5, faculity: "Fisics" },
];

const highGpaStudents = students
  .filter((student) => student.gpa > 4) // отфильтровать студентов со средним балом выше 4
  .toSorted((a, b) => a.age - b.age) // сортировка отфильтпованных студентов по возрасту
  .map((student) => student.name) // создали строку с именами студентов
  .join(", ");

console.log(`Студенты с самым высоким балом: ${highGpaStudents}`);

const transaction = [
  { type: "income", amount: 1000, category: "ЗП" },
  { type: "expense", amount: 200, category: "Product" },
  { type: "income", amount: 500, category: "Freelace" },
  { type: "expence", amount: 300, category: "transport" },
];
/*
const totalincome = transaction
  .filter((transaction) => transaction.type === "income")
  .reduce((acc, transaction) => acc + transaction.amount, 0);
const totalexpence = transaction
  .filter((transaction) => transaction.type === "expense")
  .reduce((acc, transaction) => acc + transaction.amount, 0);
  */
const { totalincome, totalexpence } = transaction.reduce(
  (acc, transaction) => {
    if (transaction.type === "income") {
      acc.totalincome += transaction.amount;
    } else if (transaction.type === "expense") {
      acc.totalexpence += transaction.amount;
    }
    return acc;
  },
  {
    totalincome: 0,
    totalexpence: 0,
  },
);

const balance = totalincome - totalexpence;

const balanceStatus =
  balance > 0 ? "Положительный" : balance < 0 ? "Отрицательный" : "нулевой";

console.log(`Итоговый баланс ${balance} ${balanceStatus}`);

//Группировка данных

const books = [
  { title: "Война и мир", author: "Лев толстой", year: 1869 },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
  },
  { title: "Братья Карамазовы", author: "Федор Достоевский", year: 1880 },
  { title: "Анна Каренина", author: "Лев толстой", year: 1880 },
];
//Сгрупировать книгии по автору
const groupedBooks = books.reduce((acc, book) => {
  if (!acc[book.author]) {
    acc[book.author] = [];
  }
  acc[book.author].push(book);
  return acc;
}, {});
console.log(groupedBooks);
//Отсмортировать в новом массиве от старых к новым
//Вывести в формате
for (const [author, book] in Object.entries(groupedBooks)) {
  const sortedBooks = books.toSorted((a, b) => a.year - b.year);
  console.log(`Автор: ${author}`);
  console.log(`Книги: `);
  sortedBooks.forEach((book) => console.log(`${book.title} - ${book.year}`));
}

const peoples = [
  { name: "Анна", age: 24, salary: 4500000 },
  { name: "Иван", age: 28, salary: 6000000 },
  { name: "Мария", age: 30, salary: 5500000 },
  { name: "Петр", age: 26, salary: 4800000 },
];
//Отфильтровать сотрудников, оставить только тех, которые старше 25 лет и имеют зарплату выше 5000000.
const filteredPeoples = peoples.filter(
  (man) => man.age > 25 && man.salary > 5000000,
);
console.log(filteredPeoples);
//Для каждого отфильтрованного сотрудника рассчитать бонус в размере 10% от зарплаты и добавить это значение как новое поле bonus,
// при этом оригинальные объекты (из первого пункта) должны остаться неизмененными.
// Дробной части быть не должно, если так получилось - округляем вниз.
const newPeoples = filteredPeoples.map((man) => ({
  ...man, // копируем все свойства оригинального объекта
  bonus: Math.floor(man.salary * 0.1), // 10% от зарплаты, округление вниз
}));

console.log(newPeoples);
//Отсортировать результаты по убыванию зарплаты (от самой высокой к самой низкой)

newPeoples.sort((a, b) => b.salary - a.salary);
//Вывести в консоль имена сотрудников и их бонусы в формате:
//[имя] (возраст: [возраст]) - бонус к зарплате: [бонус]
for (const [name, age, bonus] in Object.entries(newPeoples)) {
  newPeoples.forEach((people) =>
    console.log(
      `${people.name} (возраст:${people.age})- бонус к зарплате: ${people.bonus}`,
    ),
  );
}

const input =
  "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя";
const chars = input.toLowerCase().split(""); // переводим строку в массив
for (const item of chars) {
  console.log(item);
}
console.log(chars);
const count = {};
chars.forEach((ch, i) => {
  if (!count[ch]) {
    count[ch] = { count: 1, firstIndex: i };
  } else {
    count[ch].count++;
  }
});

// Преобразуем в массив, сортируем, берем первые 3
const result = Object.entries(count)
  .map(([ch, data]) => [ch, data.count, data.firstIndex])
  .sort((a, b) => b[1] - a[1] || a[2] - b[2])
  .slice(0, 3)
  .map(([ch, cnt]) => [ch, cnt]);

console.log(JSON.stringify(result));
