let userName = prompt("Как Вас зовут?");
if (!userName && userName.trim()) {
  alert("Введено неверное имя.");
} else {
  {
    alert(`Добрый день ${userName.trim()}!`);
  }
}

/*
if (answer.toLowerCase() === "да") {
  alert("Вам нравится Javascript?");
} else {
  alert("Не нравится? Вы кнопкой ошиблись?");
}


let answer = confirm("Вам нравится Javascript?");
if (answer) {
  alert("Вам нравится Javascript?");
} else {
  alert("Не нравится? Вы кнопкой ошиблись?");
}
  
  
*/
