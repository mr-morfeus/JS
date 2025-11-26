const products = [
  { name: "iPhone", category: "electronics", price: 1000 },
  { name: "MacBook", category: "electronics", price: 2000 },
  { name: "Shirt", category: "clothing", price: 50 },
  { name: "Shoes", category: "clothing", price: 100 }
];

const group = products.reduce((acc, value, index) => {

    if(!acc[value.category]){
        acc[value.category] = [];
        console.log("Если нет категории", index)
    }
    acc[value.category].push(value);
    return acc
},{});
console.log("group", group)

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

let mas = users.reduce((acc, val) =>{
    let id = val.id;
    let name = val.name;
   /* console.log("id", id);
    console.log("name", name);*/
    acc[id] = name;
    return acc
},{})
    console.log("mas", mas);
// Задание: посчитай общую выручку по каждому продукту
    const sales = [
  { product: "iPhone", price: 1000, quantity: 2 },
  { product: "Samsung", price: 800, quantity: 3 },
  { product: "iPhone", price: 1000, quantity: 1 },
  { product: "Xiaomi", price: 500, quantity: 4 }
];

let obsh = sales.reduce((acc, cena) => {
console.log("ac456[cena.product]", cena.product );
    if(!acc[cena.product]){
        acc[cena.product] = 0;
        console.log("Создаю запись для", cena.product, "=", acc[cena.product]);
    }
    acc[cena.product] += cena.price*cena.quantity;
    console.log("a[", acc[cena.product]);
    return acc
},{})
console.log("obsh", obsh);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Найди сумму только четных чисел
const sumEven = numbers.reduce((acc, num) => {
  if(num % 2 === 0){
    acc += num
  }
  return acc
}, 0);
console.log("sumEven", sumEven);

const texts = ["short", "medium text", "this is the longest text", "tiny"];
// Найди самую длинную строку
const longest = texts.reduce((acc, text) => {
    if (text.length > acc.length){
        return text
    }
    return acc
 // console.log("234234", text.length);
  
}, "");

console.log(longest); // "this is the longest text"

const numbers = [5, -2, 10, -8, 3, -1, 7];
// Посчитай количество положительных чисел
const positiveCount = numbers.reduce((acc, num) => {
  // твой код здесь
  if(num >0){
    acc 
  }
}, 0);

console.log(positiveCount); // 4 (5, 10, 3, 7)