// Напишите функцию, которая возвращает сумму чисел от 1 до n
function sumToN(n) {
  let j = 0;
  for(let i=1; i<=n; i++){

    j += i;
  //  console.log("j2 =", j); 
    
  }
  return j
}

console.log(sumToN(5)); // Должно вернуть 15 (1+2+3+4+5)
console.log(sumToN(10)); // Должно вернуть 55
// Напишите функцию, которая находит максимальное число в массиве
function findMax(numbers) {
      //console.log("Длинна", numbers.length);
      let max = numbers[0];
  for(let i=1; i<numbers.length; i++){  
   // console.log("i-", i);
    if(max<numbers[i]){
        max = numbers[i];
      //  console.log("Максимальное", max);
    }
    
  }
  return max
}

console.log(findMax([3, 7, 2, 9, 1])); // Должно вернуть 9
console.log(findMax([-5, -2, -10])); // Должно вернуть -2
console.log(findMax([5])); // Должно вернуть 5
console.log(findMax([]));  
// Напишите функцию, которая возвращает количество четных чисел в массиве
function countEven(numbers) {
  let count  = 0;
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
     // console.log("numbers = ", numbers);
     count ++;
    }
  }
  return count
}

console.log(countEven([1, 2, 3, 4, 5, 6])); // Должно вернуть 3
console.log(countEven([10, 15, 20])); // Должно вернуть 2

const products = [
  { name: 'Ноутбук', price: 50000, quantity: 1 },
  { name: 'Мышь', price: 1500, quantity: 2 },
  { name: 'Клавиатура', price: 3000, quantity: 1 }
];

// Напишите функцию, которая возвращает общую стоимость всех товаров
function calculateTotal(products) {
  console.log("products = ", products.length);
  let sum = 0;
  for(let i=0; i<products.length; i++){
    sum += products[i].price;
  }
  return sum
}
console.log(calculateTotal(products)); // Должно вернуть 56000
const products1 = [
  { name: 'Ноутбук', price: 50000 },
  { name: 'Мышь', price: 1500 },
  { name: 'Клавиатура', price: 3000 },
  { name: 'Наушники', price: 4000 }
];

// Напишите функцию, которая возвращает массив товаров дороже указанной цены
function filterByPrice(products1, minPrice) {
  let mas_max = [];
  for(let i=0; i<products1.length; i++){
    if(products1[i].price>minPrice){
      mas_max.push(products1[i]);
    }
  }
  return mas_max
}
console.log(filterByPrice(products1, 3000)); 
// Должно вернуть [{name: 'Ноутбук', price: 50000}, {name: 'Наушники', price: 4000}]
const items = [
  { name: 'Яблоки', category: 'Фрукты', price: 100 },
  { name: 'Банан', category: 'Фрукты', price: 80 },
  { name: 'Морковь', category: 'Овощи', price: 50 },
  { name: 'Картофель', category: 'Овощи', price: 40 }
];

// Напишите функцию, которая группирует товары по категориям
function groupByCategory(items) {
    let mas_item = {};
    for(let i=0; i<items.length; i++){
      //console.log("items.category", items[0].category)
        if(!mas_item[items[i].category]){
          mas_item[items[i].category] = [];
         // console.log("mas_item - if", mas_item)
        }
        mas_item[items[i].category].push(items[i].name)
        
    }
    return mas_item 
}

console.log(groupByCategory(items));
// Должно вернуть:
// {
//   'Фрукты': ['Яблоки', 'Банан'],
//   'Овощи': ['Морковь', 'Картофель']
// }