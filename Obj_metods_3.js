//Обьекты
//Object.getOwnPropertyDescriptor; - выдаст дескриптор свойства
//Object.getOwnPropertyDescriptors; - выдаст все дескрипторы
const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto);

Object.setPrototypeOf(obj, {
  Sayhello() {
    console.log("hello");
  },
});
obj.Sayhello();
console.log(obj);

//Object.freeze(); - делает обьект полностью неизменяемым
//Object.isFrozen();

const obj2 = { a: 1, inner: { hello: "hi" } };

console.log(Object.isFrozen(obj2));
Object.freeze(obj2);
console.log(Object.isFrozen(obj2));
console.log(obj2.a);
//Замораживается толькко сам обьеккт. Обьеккты внутри не замораживабтся
obj2.inner.hello = "Привет";
console.log(obj2);

//Object.preventExtensions; - запрещает добавлять новые свойства
//Object.isExtensible; - проверяет

const obj7 = {};
console.log(Object.isExtensible);

obj7.a = 5;
console.log(obj7);
Object.preventExtensions(obj7);
obj7.a = 10;
// obj7.b = 100;  будет ошибка
console.log(Object.isExtensible);

//bject.seal; - запечататать (не расширояемый и не удаляемый)
//Object.isSealed; - проверить

const obj8 = { a: 5 };
console.log(Object.isSealed(obj8));

Object.seal(obj8);

console.log(Object.isSealed(obj8));

obj8.a = 10;
// obj8.b = 100;  будет ошибка
//  delete obj.a будет ошибка

//Внутренних обьектов не касается

//Object.hasOwn - является ли свойство собственныим свойством обьекта
const obj9 = { name: "Павел", age: 35 };
console.log(Object.hasOwn(obj9, "name"));
console.log(obj9.constructor);
console.log(Object.hasOwn(obj9, "constructor"));

console.log(obj9.hasOwnProperty("name"));

//Object.groupBy(обьект, функция);

const products = [
  { id: 1, category: "фрукты", name: "Яблоко" },
  { id: 2, category: "фрукты", name: "Груша" },
  { id: 3, category: "овощи", name: "Морковь" },
  { id: 1, category: "овощи", name: "салат" },
];
//группировка овощи/фрукты
const groubByFr = Object.groupBy(products, (products) => products.category);
console.log(groubByFr);

const people = [
  { id: 1, name: "Александр", age: 38 },
  { id: 2, name: "Иван", age: 32 },
  { id: 3, name: "Мария", age: 25 },
  { id: 4, name: "Сергей", age: 30 },
];
//группировка во возратсу
const groubByAge = Object.groupBy(people, (person) => person.age);
console.log(groubByAge);

const inventory = [
  { id: 1, category: "фрукты", name: "Яблоко", quantity: 10 },
  { id: 2, category: "фрукты", name: "Груша", quantity: 3 },
  { id: 3, category: "овощи", name: "Морковь", quantity: 8 },
  { id: 4, category: "овощи", name: "салат", quantity: 15 },
  { id: 5, category: "мясо", name: "курица", quantity: 15 },
];

//действие в зависимостии от количества
const groubByStok = Object.groupBy(inventory, (product) => {
  return product.quantity <= 5 ? "Заказать" : "Достаточно";
});
console.log(groubByStok);
//ИЛИ
const groubByStok2 = Object.groupBy(inventory, ({ quantity }) => {
  return quantity <= 5 ? "Заказать" : "Достаточно";
});
console.log(groubByStok2);
//действие в зависимостии от количества с указанием другого  свойства
const groubByTypeAndStock = Object.groupBy(inventory, ({ type, quantity }) => {
  return `${type}_${quantity <= 5 ? "Заказать" : "Достаточно"}`;
});
console.log(groubByTypeAndStock);

//Object.is(знач 1, знач 2) - Сравнение двух значений на целове равенство как ===
//Отличие от === - обработка NaN и 0,-0
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(0 === -0);
console.log(Object.is(0, -0));
//В остальном идентичен ===
console.log(`В остальном идентичен ===`);
console.log(5 === 5);
console.log(Object.is(5, 5));
//Сравниваем обьекты
console.log(`Сравниваем обьекты`);
const asd = console.log({ name: "asd" } === { name: "asd" });
console.log(Object.is({ name: "asd" }, { name: "asd" }));

const obj_11 = { name: "asd" };
console.log(Object.is(obj_11, obj_11));
