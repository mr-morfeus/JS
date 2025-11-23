const movies = ["ф1","ф2","ф3","ф4","ф5"]

console.log(`Первый - ${movies[0]} `); 

console.log(`Последний - ${movies[movies.length-1]} `);

console.log(`Все - ${movies.length} `);

let shoppingList = ["milk", "bread"];

// 1. Добавьте "eggs" и "butter" в конец
// 2. Добавьте "water" в начало
// 3. Удалите последний элемент и сохраните его в переменную
// 4. Проверьте, есть ли "bread" в списке

shoppingList.push("eggs","butter");
console.log(shoppingList);

shoppingList.unshift("water");
console.log(shoppingList);

const last_el = shoppingList.pop();
console.log(shoppingList);

const found = shoppingList.find(found => found === "bread");
console.log(`Проверка в списке ${found}`);

const hasBread = shoppingList.includes("bread");
console.log(`Проверка в списке ${hasBread}`);

const fruits = ["apple", "banana", "orange"];

// forEach принимает функцию-колбэк
fruits.forEach(function(fruit, index) {
    console.log(`${index + 1}. ${fruit}`);
});
// Со стрелочной функцией
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

const scores = [85, 92, 78, 95, 88];

// 1. Используя forEach, выведите каждый результат в формате:
// "Результат 1: 85 баллов"
// "Результат 2: 92 балла"
// 2. Найдите сумму всех результатов

scores.forEach((scores, ind) => {
    console.log(`Результат ${ind + 1}: ${scores}`);
});

let total = 0;
scores.forEach(scores => {
    total = scores + total;
});
// ваш код с forEach
console.log(`Общая сумма: ${total}`);

const products = [
    { name: "Laptop", price: 1000, category: "electronics" },
    { name: "Book", price: 20, category: "education" },
    { name: "Phone", price: 500, category: "electronics" },
    { name: "Pen", price: 5, category: "office" }
];
//console.log(products[0].name);
// 1. Получите массив только названий продуктов
const names = products.map(name => name.name);
console.log(names);

// 2. Отфильтруйте только электронику
const electronics = products.filter(electr => electr.category === "electronics");
    console.log(electronics);
// 3. Найдите общую стоимость всех продуктов
const totalPrice = products.reduce((sum,elmas) => sum + elmas.price,0);
    console.log(totalPrice);
/********************************************************************************** */
// Создаем менеджер задач
let tasks = [];

// Функции для работы с задачами
function addTask(title) {
    tasks.push({ title, completed: false });
}

function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
    }
}

function showTasks() {
    console.log("=== ВАШИ ЗАДАЧИ ===");
    tasks.forEach((task, index) => {
        const status = task.completed ? "✅" : "⏳";
        console.log(`${index + 1}. ${status} ${task.title}`);
    });
}

function showPendingTasks() {
    const pending = tasks.filter(task => !task.completed);
    console.log("=== НЕВЫПОЛНЕННЫЕ ЗАДАЧИ ===");
    pending.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title}`);
    });
}

// Использование
addTask("Изучить массивы в JavaScript");
addTask("Попрактиковаться с методами массивов");
addTask("Создать свой проект");

completeTask(0); // Отмечаем первую задачу выполненной

showTasks();
showPendingTasks();
/*******************************Повторение*************************************************/ 
let shoppingList1 = ["молоко", "хлеб"];

// 1. Добавь "яйца" и "сыр" в конец списка
// 2. Добавь "вода" в начало списка
// 3. Удали последний элемент и сохрани его в переменную removedItem
// 4. Удали первый элемент и сохрани его в переменную firstItem
// 5. Добавь "кофе" на вторую позицию (используй splice)

shoppingList1.push("яйца", "сыр"); 
shoppingList1.unshift("вода");
const removedItem = shoppingList1.pop();
const firstItem = shoppingList1.shift();
shoppingList1.splice(1,0,"кофе");
console.log(shoppingList1);
console.log(removedItem);
console.log("Список покупок:", shoppingList1);
console.log("Удаленные элементы:", removedItem, firstItem);

let colors = ["red", "green", "blue", "yellow", "purple"];

// 1. Удали "blue" из массива
// 2. Добавь "orange" после "green"
// 3. Замени "yellow" на "pink"
// 4. Удали два элемента начиная с индекса 1
let index_color = colors.indexOf("blue");
colors.splice(index_color,1);
console.log("Результат:", colors);

let index_green = colors.indexOf("green");
colors.splice(index_green+1,0,"orange");
console.log("Результат:", colors);

let index_yellow = colors.indexOf("yellow");
colors.splice(index_yellow,1,"pink");
console.log("Результат:", colors);

colors.splice(1,2);
console.log("Результат:", colors);

let students = ["Анна", "Петр", "Мария", "Ив", "Анна", "Ольга"];

// 1. Найди индекс первого вхождения "Анна"
// 2. Найди индекс последнего вхождения "Анна"  
// 3. Проверь, есть ли в массиве "Сергей"
// 4. Найди первый элемент, который начинается на "М"
// 5. Проверь, все ли имена длиннее 3 букв (используй every)

let index_anna = students.indexOf("Анна");
let last_index_anna = students.lastIndexOf("Анна");
let sergey_seasrch = students.includes("Сергей");
let m = students.find(bukvam => bukvam.charAt(0) === "М");
let tri_bukvy = students.every(text => {
    const res = text.length > 3;
    console.log(`Результ:${text} ${res}`);
    return res; 
});
let allLongNames = students.every(name => name.length > 3);
console.log("Результаты поиска:", tri_bukvy);
console.log("Первая Анна:", index_anna);
console.log("Последняя Анна:", last_index_anna);
console.log("Есть Сергей:", sergey_seasrch);
console.log("Начинается на М:", m);
console.log("Все имена длиннее 3 букв:", allLongNames);
