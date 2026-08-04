"use strict";
/*
Вам дается список задач (tasks),
 каждая задача имеет определённый приоритет: low, medium или high.
  Приоритеты расположены в порядке возрастания важности: low < medium < high.

Вам нужно вывести в консоль индекс последней задачи, 
приоритет которой равен или выше необходимого приоритета (targetPriority).
 Если такой задачи нет, значит выводим -1.
*/
const data = {
  tasks: [
    { title: "Проверить почту", priority: "low" },
    { title: "Подготовить отчет", priority: "medium" },
    { title: "Созвон с клиентом", priority: "high" },
    { title: "Обновить документацию", priority: "low" },
    { title: "Исправить критическую ошибку", priority: "high" },
  ],
  targetPriority: "medium",
};

const priorityTarg = ["low", "medium", "high"];

const { tasks, targetPriority } = parsed;
let newTasks = [];
for (let task of tasks) {
  newTasks.push(task.priority);
}

const targetIndex = priorityTarg.lastIndexOf(targetPriority);
let lastInd = -1;
for (let i = targetIndex; i < 3; i++) {
  if (lastInd <= newTasks.lastIndexOf(priorityTarg[i])) {
    lastInd = newTasks.lastIndexOf(priorityTarg[i]);
  }
}
console.log(lastInd);
