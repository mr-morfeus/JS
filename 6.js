const products = [
  { name: "iPhone", category: "electronics", price: 1000 },
  { name: "MacBook", category: "electronics", price: 2000 },
  { name: "Shirt", category: "clothing", price: 50 },
  { name: "Shoes", category: "clothing", price: 100 }
];

const group = products.reduce((acc, value, index) => {

    if(!acc[value.category]){
        acc[value.category] = [];
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

    if(!acc[cena.product]){
        acc[cena.product] = 0;
       
    }
    acc[cena.product] += cena.price*cena.quantity;
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

const numbers1 = [5, -2, 10, -8, 3, -1, 7];
// Посчитай количество положительных чисел
const positiveCount = numbers1.reduce((acc, num) => {
  // твой код здесь
  if(num >0){
    acc += 1
  }
  return acc
}, 0);

console.log(positiveCount); // 4 (5, 10, 3, 7)

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Eve", age: 25 }
];

// Сгруппируй людей по возрасту
const groupedByAge = people.reduce((acc, person) => {
    
   // acc[person.age] = person.name;
   if(!acc[person.age]){
     acc[person.age] = [];
    //console.log(acc);
  }
  acc[person.age].push(person.name);
    return acc

    
}, {});

console.log(groupedByAge);
// {
//   25: ["Alice", "Charlie", "Eve"],
//   30: ["Bob", "David"]
// }
const products1 = [
  { name: "iPhone", category: "electronics", price: 1000 },
  { name: "MacBook", category: "electronics", price: 2000 },
  { name: "Shirt", category: "clothing", price: 50 },
  { name: "Jeans", category: "clothing", price: 80 },
  { name: "iPad", category: "electronics", price: 800 }
];

// Найди самый дорогой товар в каждой категории
const mostExpensiveByCategory = products1.reduce((acc, product) => {

  if(!acc[product.category] || product.price > acc[product.category].price){
    acc[product.category] = product;
  }
  return acc;
}, {});

console.log(mostExpensiveByCategory);
// {
//   electronics: { name: "MacBook", price: 2000 },
//   clothing: { name: "Jeans", price: 80 }
// }