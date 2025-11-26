
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
    // Шаг 1: Проверяем, есть ли уже такой фрукт в аккумуляторе
    if (acc[fruit]) {
        // Если есть - увеличиваем счетчик на 1
        acc[fruit] += 1;
    } else {
        // Если нет - создаем новый ключ со значением 1
        acc[fruit] = 1;
    }
    
    // Возвращаем обновленный аккумулятор
    return acc;
}, {}); // Начальное значение - пустой объект

<<<<<<< HEAD
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }
=======
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
>>>>>>> 373353b336038022ab9f4e4f671f7a120b95e777
