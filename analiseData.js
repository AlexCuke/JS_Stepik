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

/*
{ name: 'Павел',
  address: 'Санкт-Петербург, Невский проспект',
  friends: [ 'Игорь', 'Алексей' ],
  notifications: [ 'sms', 'push' ],
  activityTypes: [ 'work', 'sleep' ] }
  */
