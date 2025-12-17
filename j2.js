// 1. Создайте объект Date для текущей даты и времени
const now = new Date();
console.log(now);

console.log(new Date(2024, 11, 25))
console.log(new Date(2024, 11, 31, 23, 59, 59))
// 2. Создайте Date для конкретной даты: 25 декабря 2024 года
// 3. Создайте Date из строки: "2024-12-31T23:59:59"

const dat = new Date('2024-06-15T14:30:00');
const date = new Date();

console.log("--------------------------------------");
console.log(date);
// 4. Получите год, месяц, день месяца, день недели
console.log("Год - ",date.getFullYear());
console.log("Месяц - ",date.getMonth());
console.log("День - ",date.getDay());
console.log("День недели - ",date.getDate());
// 5. Получите часы, минуты, секунды, миллисекунды
console.log("Часы - ",date.getHours());
console.log("Минуты - ",date.getMinutes());
console.log("Секунды - ",date.getSeconds());
console.log("Милесекунды - ",date.getMilliseconds());

// 6. Получите timestamp (количество миллисекунд с 1 января 1970)
console.log("timestamp - ",Date.now());

console.log("--------------------------------------");

// 7. Установите конкретный год (2030)
const d = new Date();
d.setFullYear(2030);
console.log("2030 год установлен - ", d.toString());
// 8. Установите месяц на февраль (1)
d.setMonth(1);
console.log("Февраль - ", d.toString());
// 9. Установите дату на 25 число
d.setDate(25);
console.log("Дата 25 ое  - ", d.toString());
// 10. Установите время на 08:15:30
d.setHours(8)
console.log("Часов 8  - ", d.toString());
d.setMinutes(15)
console.log("Минут 15  - ", d.toString());
d.setSeconds(30)
console.log("Секунд 30  - ", d.toString());
console.log("--------------------------------------");
