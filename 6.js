let users = [
    { name: "Анна", age: 25, active: true },
    { name: "Петр", age: 17, active: true },
    { name: "Мария", age: 30, active: false },
    { name: "Иван", age: 22, active: true },
    { name: "Ольга", age: 16, active: false }
];





// 5. Найди общий возраст всех пользователей

// 1. Получи массив только имен пользователей
let name_mas = users.map(imya => imya.name);
console.log("Имена:", name_mas);

// 2. Получи массив совершеннолетних пользователей (age >= 18)
let sovershenoletnie = users.filter(ag => ag.age >= 18)
console.log("Совершеннолетние:", sovershenoletnie);

// 3. Получи массив активных совершеннолетних пользователей
let sovershenoletnie_active = users.filter(ag => ag.age >= 18 && ag.active === true)

console.log("Активные совершеннолетние:", sovershenoletnie_active/* твой код */);

// 4. Увеличь возраст каждого пользователя на 1 год

let u = users.forEach(vozrast => vozrast.age = vozrast.age + 1);
console.log("После дня рождения:", users) 

// 5. Найди общий возраст всех пользователей

let sum = users.reduce((res, age) => res + age.age, 0);
console.log("Общий возраст:", sum);

const numbers = [2, 3, 4, 5];

let sums = numbers.reduce((res, num) => res + num, 0);

console.log("sums = ", sums);

const words = ['Hello', 'world', 'from', 'JavaScript'];

const_words = words.reduce((res, str) => res + str);

console.log("const_words = ", const_words);

const numbers1 = [1, 2, 3, 4, 5, 6];
let evenCount = numbers1.reduce((count, num) => {
    return num % 2 === 0 ? count + 1 : count;
}, 0);

const word = ['cat', 'elephant', 'dog', 'butterfly'];

let words1 = word.reduce((res, wrds) => {
    console.log("Текущее слово:", wrds, "длина:", wrds.length, "текущий макс:", res);
    
    // Сравниваем длину текущего слова с сохраненной максимальной длиной
    if(wrds.length > res){
        return wrds.length; // возвращаем новую максимальную длину
    } else {
        return res; // возвращаем старую максимальную длину
    }
}, 0);

console.log("Длина самого длинного слова:", words1); // 9

const numbers12 = [10, 20, 30, 40, 50];
// Найди сумму всех чисел используя reduce
console.log("Найди сумму всех чисел используя reduce - ", numbers12.reduce((acc, value) => acc + value, 0));

const products = [
  { name: "iPhone", category: "electronics" },
  { name: "MacBook", category: "electronics" },
  { name: "Хлеб", category: "food" },
  { name: "Молоко", category: "food" },
  { name: "Футболка", category: "clothes" }
];
// Сгруппируй товары по категориям
// Результат: { electronics: ["iPhone", "MacBook"], food: ["Хлеб", "Молоко"], clothes: ["Футболка"] }

let group_tovar = products.reduce((acc, element) => {
    if(!acc[element.category]){
        acc[element.category] = [];
    }
        acc[element.category].push(element.name);
        return acc;
    

},{})
console.log("товары по категориям", group_tovar);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Посчитай количество каждого фрукта
// Результат: { apple: 3, banana: 2, orange: 1 }

let result = fruits.reduce((acc, element) => {
    if(acc[element]){
        //acc[element.category] = [];
       /* console.log("acc:", acc);
        console.log("фрукт:", element);*/
        acc[element] += 1;
    } else{
        acc[element] = 1;
    }
    return acc;
},{});
        console.log("result", result);
const purchases = [
  { product: "iPhone", count: 15 },
  { product: "Samsung", count: 12 },
   { product: "Xiao", count: 44 },
  { product: "iPhone", count: 8 },
  { product: "Xiaomi", count: 20 }
];
const count_best = purchases.reduce((acc, el) => {
    if(acc === el.product){
        console.log("первая", acc);
    }
    
},{})
console.log("count_best:", count_best);
// Найди товар с наибольшим общим количеством покупок
/*
const count_best = purchases.reduce((acc, el) => {
    if(acc > el.count){
            console.log("acc", el.count);
    return acc

}else{
    console.log("acc-else", el.count);
    return el.count

}
},0)
console.log("count_best:", count_best); */