function* mergeSortedStreamsGenerator(streams) {
  console.log(streams);
  // Ваша логика генератора
}

// Проверка решения (не трогаем):
process.openStdin().addListener("data", (data) => {
  const arrays = JSON.parse(data.toString());
  const streams = arrays.map((arr) => arr[Symbol.iterator]());
  console.log([...mergeSortedStreamsGenerator(streams)].join(","));
});

// ================================================================
// ВРЕМЕННЫЙ БЛОК ДЛЯ ТЕСТА В VS CODE (Удалите перед отправкой)
// ================================================================
process.nextTick(() => {
  const testData = JSON.stringify([
    [1, 3, 5],
    [2, 4, 6],
    [0, 7, 8],
  ]);
  process.stdin.emit("data", Buffer.from(testData));
});
