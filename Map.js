"use strict";

//Структуры Map. Могут храниться разные знеачения любого типа
//При создании передаем массив массивов [ключ, значение]
const map = new Map([
  ["name", "Алекс"],
  ["firstname", "Давыдов"],
]);

console.log(map);

//Можно добавить значения

map.set("eye color", "голубые").set("married", true);
console.log(map);

//Можно получить значения
console.log(map.get("name"));

//Можно проверить наличие значения
console.log(map.has("age"));
//Можно удалить значения
map.delete("eye color");
console.log(map);
//Можно узнать размер
console.log(map.size);
//Можно очистить массив
map.clear;
console.log(map);

("use strict");

//Структуры Map. Могут храниться разные знеачения любого типа

const map = new Map([
  ["name", "Алекс"],
  ["firstname", "Давыдов"],
]);
//Перебираем ключи  и значевния
map.forEach((value, key) => {
  return console.log(`${key} - ${value}`);
});

console.log(map.keys);
console.log(map.values);
console.log(map.entries);

for (const [key, value] of map) {
  console.log(`${key} - ${value}`);
}

const original = new Map([
  ["один", 1],
  ["три", 3],
]);
console.log(original);
// соединим два Map
const map1 = new Map([["один", 1]]);

const map2 = new Map([["три", 3]]);

const mergedMap = new Map([...map1, ...map2]);
console.log(mergedMap);

// Использование (можно закешировать данные)
const cache = new Map();
function fetchDataWithCache(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const data = fetchData(key);
  cache.set(key, data);
  return data;
}

function fetchData(key) {
  return `Data for ${key}`;
}

fetchData(2);
fetchData(5);
fetchData(2);

console.log(fetchDataWithCache(2));
console.log(fetchDataWithCache(5));
console.log(fetchDataWithCache(2));
console.log(cache);

// Нюансы map. Так как в качестве ключей map может хранить что угодно

const user1 = { name: "Тимур" };
const user2 = { name: "Тимур" };

const map5 = new Map();
map5.set(user1, "Admion");

console.log(map.get(user1));
console.log(map.get(user2));
