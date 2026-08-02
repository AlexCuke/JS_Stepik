"use strict";
/*
Анализ коллекции космических артефактов
Реализуйте функцию analyzeArtifacts(artifacts), которая будет анализировать коллекцию космических артефактов и выводить результаты. Каждый артефакт передается в виде объекта с уникальным идентификатором, типом, годом создания и количеством показов. Ваша функция должна:

Вывести список всех артефактов в формате:
Артефакт [ИД]: Тип - [Тип], Год - [Год], Показы - [Количество показов]

                  
Найти артефакты с наибольшим количеством показов и вывести их информацию.
Подсчитать, сколько артефактов каждого типа хранится в музее и вывести результат.
Между каждым заданием, в выводе, должна быть пустая строка.
const artifacts = {
  A101: { type: "метеорит", year: 1890, exhibits: 15 },
  A102: { type: "луноход", year: 1973, exhibits: 20 },
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 },
};
Артефакт A101: Тип - метеорит, Год - 1890, Показы - 15
Артефакт A102: Тип - луноход, Год - 1973, Показы - 20
Артефакт A103: Тип - скафандр, Год - 1969, Показы - 12
Артефакт A104: Тип - спутник, Год - 1957, Показы - 20
Артефакт A105: Тип - луноход, Год - 1971, Показы - 10

Артефакты с наибольшим количеством показов (количество показов 20):
A102: Тип - луноход, Год - 1973
A104: Тип - спутник, Год - 1957

Количество артефактов по типу:
метеорит: 1
луноход: 2
скафандр: 1
спутник: 1
*/

function analyzeArtifacts(artifacts) {
  let exibitsCount = 0;
  const typeCount = {};

  for (let key in artifacts) {
    let str = `Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}, Показы - ${artifacts[key].exhibits}`;
    const type = artifacts[key].type;
    const exhibits = artifacts[key].exhibits;
    if (exibitsCount < exhibits) {
      exibitsCount = exhibits;
    }
    if (typeCount[type]) {
      typeCount[type]++;
    } else {
      typeCount[type] = 1;
    }
    //console.log(artifacts[artrifact]);
    console.log(str);
  }
  console.log(
    `\nАртефакты с наибольшим количеством показов (количество показов ${exibitsCount}):`,
  );
  for (const key in artifacts)
    if (artifacts[key].exhibits === exibitsCount) {
      console.log(
        `${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}`,
      );
    }
  console.log(`\nКоличество артефактов по типу:`);
  for (const type in typeCount) console.log(`${type}: ${typeCount[type]}`);
}

const testArtifacts = {
  A101: { type: "метеорит", year: 1890, exhibits: 15 },
  A102: { type: "луноход", year: 1973, exhibits: 20 },
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 },
};

analyzeArtifacts(testArtifacts);
