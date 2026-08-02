"use strict";
// API Application Programming Interface

"use strict";
// API Application Programming Interface

// JSON JavaScript Object Notation

const data = {
  name: "Товары",
  isAvalibale: true,
  items: [
    {
      name: "Товар 1",
      price: 1000,
      Tags: [],
    },
    {
      name: "Товар 2",
      price: 2000,
      Tags: [],
    },
  ],
};

const JsonData = JSON.stringify(data);
console.log(data);
console.log(JsonData);
const Data_2 = JSON.parse(JsonData);
console.log(Data_2);
console.log(Data_2.items);

const dateStr = '{"num": 22, "date": "2000-01-01T23:59:59-01:00"}';
const strToObj = JSON.parse(dateStr, (key, value) => {
  key === "date" ? (value = new Date(value)) : value;
  return value;
});
console.log(strToObj);
