"use strict";
// API Application Programming Interface
// Строку в JSON
const json = '[{"name": "Павел", "age": 35}, {"name": "Мария", "age": 25}]';
function ageData(obj) {
  let i = 0;
  let allAge = 0;
  for (const item of obj) {
    if (item.age) {
      allAge += item.age;
      i++;
    }
  }
  return Math.round(allAge / i);
}
function testJSStepik(data) {
  try {
    const obj = JSON.parse(data);
    console.log(ageData(obj));
  } catch (error) {
    console.log(`Не удалось распарсить строку ${data}`);
  }
}

testJSStepik('[{"name": "Павел", "age": 35}, {"name": "Мария", "age": 25}]');
testJSStepik(
  '[{"username": "Сергей", "age": 55}, {"username": "Анна", "age": 40}, {"username": "Петр", "age": 29}]',
);
testJSStepik(
  '[{"age": 50, "profession": учитель}, {"age": 29, "profession": инженер}]',
);
testJSStepik(
  '[{"name": "Марат", "age": 10}, {"name": "Ольга", "hobbie": "Плавание"}, {"name": "Тимур", "age": 44}]',
);

/*s

process.openStdin().addListener("data", (data) => {}
*/

process.openStdin().addListener("data", (data) => {
  const input = data.toString().trim();
  testJSStepik(input);
});

process.openStdin().addListener("data", (data) => {
  const input = data.toString().trim();
  testJSStepik(input);
});

function ageData(obj) {
  // Проверка, что это массив
  if (!Array.isArray(obj) || obj.length === 0) {
    return 0;
  }
  
  let i = 0;
  let allAge = 0;
  
  for (const item of obj) {
    if (item.age && typeof item.age === 'number') {
      allAge += item.age;
      i++;
    }
  }
  
  if (i === 0) {
    console.log(`Ни один объект не содержит свойства age`);
    return 0; // Возвращаем 0
  } else {
    return Math.round(allAge / i); // Исправлено: добавил return
  }
}

function testJSStepik(data) {
  try {
    const obj = JSON.parse(data);
    const result = ageData(obj);
    console.log(result); // Теперь result будет числом или 0
    return result;
  } catch (error) {
    console.log(`Невалидный JSON`);
    return null;
  }
}
}
