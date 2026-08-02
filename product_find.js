let item = prompt("Введите название товара");
item = item.trim().toLowerCase();
switch (item) {
  case "Мышка Б54".toLowerCase():
    alert("2200");
    break;
  case "Клавиатура К22 Б54".toLowerCase():
    alert("9400");
    break;
  case "Монитор М123".toLowerCase():
    alert("52000");
    break;
  default:
    alert(`Продукт ${item} не найден`);
}

/*
userAge = Number.parseInt(userAge);
if (!userAge || userAge < 0) {
  alert("Неверный ввод :)");
} else if (userAge < 18) {
  alert("Привет :)");
} else if (userAge < 50) {
  alert("Здравствуйте.");
} else if (userAge < 100) {
  alert("Почетный возраст.");
}
*/
