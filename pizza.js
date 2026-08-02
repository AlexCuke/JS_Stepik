//size=prompt("Введите размер пиццы");
//size="маленькая";
size = "";

if (size === null || size === undefined) {
  console.log("Вы не выбрали размер!");
} else {
  let normalizedSize = size.trimStart().trimEnd().toLowerCase();

  if (normalizedSize === "маленькая") {
    console.log("Маленькая пицца стоит 800 руб.");
  } else if (normalizedSize === "средняя") {
    console.log("Средняя пицца стоит 1200 руб.");
  } else if (normalizedSize === "большая") {
    console.log("Большая пицца стоит 1500 руб.");
  } else {
    console.log("Такого размера у нас нет!");
  }
}
