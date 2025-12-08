/**
 * Задание 1: Создать объект "книга" и поработать с его свойствами
 */

// 1. Создай объект книги
const book = {
  title: "Гарри Поттер",
  author: "Дж. К. Роулинг",
  year: 1997,
  pages: 320,
  isRead: false
};

console.log("1. Объект книга:", book);

// 2. Получить значения свойств (3 способа)
console.log("\n2. Получение значений:");
console.log("Название (через точку):", book["title"]);
console.log("Автор (через скобки):", book["year"]);
console.log("Год (переменная):", book["year"]);

// 3. Изменить значения
console.log("\n3. Изменение значений:");
book.year = 2001;
book["pages"] = 350;
book.isRead = true;

console.log("После изменений:", book);

// 4. Добавить новые свойства
console.log("\n4. Добавление новых свойств:");
book.genre = "Фэнтези";
book["language"] = "Русский";
book.price = 500;

console.log("С новыми свойствами:", book);

// 5. Удалить свойство
console.log("\n5. Удаление свойства:");
delete book.price;
console.log("После удаления price:", book);

// 6. Проверить наличие свойств
console.log("\n6. Проверка наличия свойств:");
console.log("Есть ли author?", "author" in book);
console.log("Есть ли price?", "price" in book);
console.log("Есть ли pages?", book.hasOwnProperty("pages"));

// 7. Перебрать все свойства
console.log("\n7. Все свойства книги:");
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

// 8. Посчитать количество свойств
console.log("\n8. Количество свойств:");
const keys = Object.keys(book);
console.log("Всего свойств:", keys.length);
console.log("Список ключей:", keys);

// 9. Получить все значения
console.log("\n9. Все значения свойств:");
const values = Object.values(book);
console.log("Значения:", values);

// 10. Получить пары ключ-значение
console.log("\n10. Пары ключ-значение:");
const entries = Object.entries(book);
for (let [key, value] of entries) {
  console.log(`${key} → ${value}`);
}