"use strict";
const data1 = {
  user: {
    id: 1,
    name: "Иван",
    age: 30,
    email: "ivan@example.com",
    address: {
      street: "Красная площадь",
      city: "Москва",
      postalCode: "101000",
    },
    hobbies: ["фотография", "путешествия", "чтение"],
    friends: [
      {
        id: 2,
        name: "Мария",
        age: 28,
        interests: ["живопись", "фотография"],
      },
      {
        id: 3,
        name: "Алексей",
        age: 32,
        interests: ["спорт", "музыка", "путешествия"],
      },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "ru",
  },
  activities: [
    {
      type: "workout",
      date: "2023-10-01",
      duration: 60,
      details: {
        activityType: "бег",
        distance: 5,
      },
    },
    {
      type: "reading",
      date: "2023-10-02",
      duration: 90,
      details: {
        bookTitle: "Война и мир",
        pagesRead: 50,
      },
    },
  ],
};

const json1 = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

const json2 = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
];
/*
function analiseData(data) {
  let newData = {};
  newData["name"] = data.user.name;
  let address = `${data.user.address.city}, ${data.user.address.street}`;
  newData["address"] = address;
  let friends = [];
  for (let friend in data.user.friends) {
    friends.push(data.user.friends[friend].name);
  }
  let notifications = [];
  for (let note in data.settings.notifications) {
    if (data.settings.notifications[note] == true) notifications.push(note);
  }
  let activityTypes = [];
  for (let activity in data.activities) {
    activityTypes.push(data.activities[activity].type);
  }
  newData["friends"] = friends;
  newData["notifications"] = notifications;
  newData["activityTypes"] = activityTypes;
  console.log(newData);
}

analiseData(data1);
*/
/*
{ name: 'Павел',
  address: 'Санкт-Петербург, Невский проспект',
  friends: [ 'Игорь', 'Алексей' ],
  notifications: [ 'sms', 'push' ],
  activityTypes: [ 'work', 'sleep' ] }
  */
/*
const obj1 = JSON.stringify(json2);
console.log(obj1);
const obj = JSON.parse(obj1);
console.log(obj);
*/

const data = {
  name: "Товары",
  isAvailable: true,
  items: [
    {
      name: "Товар 1",
      price: 1500,
      tags: ["новинка", "скидка"],
    },
    {
      name: "Товар 2",
      price: 5000,
      tags: [],
    },
  ],
  meta: null,
};

let jsonData = JSON.stringify(data);
console.log(jsonData);
// {"name":"Товары","isAvailable":true,"items":[{"name":"Товар 1","price":1500,"tags":["новинка","скидка"]},{"name":"Товар 2","price":5000,"tags":[]}],"meta":null}
