"use strict";

/*
Заметки из файла:

1)На вход будет подаваться объект, например:
{
  "inventory": [
    {"name": "меч", "count": 1},
    {"name": "щит", "count": 1},
    {"name": "зелье", "count": 3}
  ],
  "newItem": {"name": "кольчуга", "count": 1},
  "maxSize": 5
}
                 
Где inventory - текущий инвентарь пользователя.
2) Максимальный размер инвентаря задаётся параметром maxSize.
Карманы и сумки у нас не бесконечные, поэтому инвентарь имеет ограниченный размер. 
3)Если при добавлении нового предмета инвентарь переполнен, необходимо удалить самый старый предмет (первый в списке), 
чтобы освободить место.

Необходимо вывести получившийся инвентарь в формате JSON.

Если добавляемый предмет уже есть в инвентаре, то мы не добавляем его повторно, 
необходимо лишь увеличить его количество (count).
Если инвентарь не полон, новый предмет добавляется в конец.

Если инвентарь полон, то сначала мы удаляем самый старый предмет (первый в списке), 
после чего добавляем новый предмет в инвентарь.
*/

const data = {
  inventory: [
    { name: "меч", count: 1 },
    { name: "щит", count: 1 },
    { name: "зелье", count: 3 },
    { name: "кольчуга", count: 1 },
    { name: "лук", count: 1 },
  ],
  newItem: { name: "зелье", count: 2 },
  maxSize: 5,
};

/*
var data = {
  inventory: [
    { name: "меч", count: 1 },
    { name: "щит", count: 1 },
    { name: "зелье", count: 3 },
    { name: "кольчуга", count: 1 },
  ],
  newItem: { name: "доспехи", count: 1 },
  maxSize: 4,
};
*/
const oldData = new Object(data);
console.log("До изменений");
console.log(oldData);
const { inventory, newItem, maxSize } = data;
//Ищем есть ли добавляемое в инвентаре
const foundItem = inventory.find((item) => item.name);

if (foundItem) {
  foundItem.count += newItem.count;
} else {
  maxSize <= inventory.length
    ? inventory.shift().push(newItem)
    : inventory.push(newItem);
}
console.log(JSON.stringify(data.inventory));
console.log("После");
console.log(data);
