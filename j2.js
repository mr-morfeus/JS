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

// Напишите функцию, которая анализирует строку и возвращает статистику
function analyzeString(str) {
  // верните объект с:
  // - количеством символов
  // - количеством слов
  // - количеством предложений
  let simvolov = str.length;
  console.log("simvolov",simvolov);
  let slov = str.split(" ");
  console.log("slov",slov.length);
let predlozhenii = str.split(/[?.!]/);

predlozhenii.forEach(element => {

  if (element === ""){
    predlozhenii.pop();
    
  }
});
  console.log("predloz666henii",predlozhenii.length);

}

console.log(analyzeString("Привет! Как дела? Все хорошо."));
// Должно вернуть: { symbols: 28, words: 5, sentences: 3 }

// Напишите функцию, которая находит все повторяющиеся элементы в массиве
function findDuplicates(arr) {
  let mas = [];
  for(let i = 0; i<arr.length; i++){
    //console.log("i",i);
    let j = i+1;
    for(j ; j<arr.length; j++){
     // console.log("Сравниваю j и i", arr[i],"и",arr[j]);
      if(arr[i] === arr[j]){
        mas.push(arr[i]);
       // console.log("if сработал ", arr[i],"и",arr[j]);
    }
    //console.log("Переменначя ", arr[i],"и",arr[j]);
    }
  }
  console.log("jmas",mas);
  return mas
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6])); 
// Должно вернуть [2, 3]
console.log(findDuplicates(['a', 'b', 'a', 'c', 'b']));
// Должно вернуть ['a', 'b']

const students = [
  { name: 'Алексей', grade: 85 },
  { name: 'Мария', grade: 92 },
  { name: 'Иван', grade: 78 },
  { name: 'Ольга', grade: 95 }
];

// Напишите функцию, которая сортирует студентов по оценке (по убыванию)
function sortStudents(students) {
  let sort_mas = [...students];

  for(let i = 0; i< sort_mas.length; i++){
    let j = i+1;
      for(j ; j < sort_mas.length; j++){
        if(sort_mas[i].grade < sort_mas[j].grade){
          let temp = sort_mas[i];
          sort_mas[i] = sort_mas[j];
          sort_mas[j] = temp;
        
       //console.log("sort_mas",sort_mas);
      }
    }

  }
  return sort_mas
}

console.log(sortStudents(students));
// Должно вернуть массив, отсортированный по grade от большего к меньшему

// Напишите функцию, которая проверяет, является ли строка палиндромом
function isPalindrome(str) {
      let ok = 0;
 
      str = str.toLowerCase().replace(/\s/g, '');
           let j = str.length-1;
  for(let i = 0; i < str.length; i ++){

          if(str[i] === str[j] && j>=0){
            
            ok++
            j--
            /*console.log(`str[i] - ${str[i]}`);
            console.log(`str[j] - ${str[j]}`)*/
      }else{
        break;
      }
  }
  if(ok === str.length){

    console.log(`Строка полиндром - ${str}`)
  }
  return str
}

console.log(isPalindrome("топот")); // true
console.log(isPalindrome("привет")); // false
console.log(isPalindrome("А роза упала на лапу Азора")); // true

// Напишите функцию, которая находит самую длинную последовательность 
// одинаковых символов в строке и возвращает ее длину
function longestSequence(str) {
  let j = 0;
  let current_length = 1;
  let maxLength = 1;
  //let res = [];
  let vipolnilos = 0;
  for(let i = 0; i < str.length; i ++){
    j = i + 1;
    if(str[i] === str[j]){       
          current_length = current_length + 1;
          
      }else{
        if(current_length > maxLength){
            maxLength = current_length;
          }
          console.log("maxLength -", maxLength)
          current_length = 1;
      }
  }  
  return maxLength;
}

console.log(longestSequence("аабббввввг")); // 4 (вввв)
console.log(longestSequence("abcde")); // 1
console.log("-------------------------------------"); 
const fruits = ['яблоко', 'банан', 'яблоко', 'апельсин', 'банан', 'яблоко'];
const countMap = new Map();

fruits.forEach(fruit => {
  countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
console.log("---",countMap.get(fruit)); 
});

console.log(countMap.get('яблоко')); // 3
//console.log(countMap.get('банан')); // 2
console.log("-------------------------------------"); 
const cache = new Map();

function expensiveOperation(x) {
  if (cache.has(x)) {
    console.log('Из кэша:', x);
    return cache.get(x);
  }
  
  console.log('Вычисляем:', x);
  const result = x * x; // "дорогая" операция
  cache.set(x, result);
  return result;
}

expensiveOperation(5); // Вычисляем: 5 → 25
expensiveOperation(5); // Из кэша: 5 → 25
console.log("-------------------------------------"); 
// Напишите функцию countChars(str), которая возвращает Map,
// где ключи - символы строки, значения - количество их вхождений

function countChars(str) {
  const mymap = new Map();
  let sch = 1;
    for(let i = 0; i < str.length; i++){
      sch = 1;
      if(mymap.has(str[i])){
        sch = mymap.get(str[i]);
        mymap.set(str[i], sch+1);
        console.log("Есть в коллекции надо увеличить счетчик", mymap.size);

      }else{
        mymap.set(str[i], sch);
        console.log("Еще нет в коллекции", mymap.size);
      }
    }
    return mymap
}

// Пример:
console.log(countChars("hello")); 
// Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
console.log("-------------------------------------"); 
// Создайте функцию getUnique(arr), которая возвращает Map,
// где ключи - элементы массива, значения - true для уникальных элементов

function getUnique(arr) {
  const uniq = new Map();

  for (let char of arr){
    if(uniq.has(char)){
     // console.log("Есть в коллекции его не пишем", char);

    }else{
      uniq.set(char, true);
     // console.log("Еще нет в коллекции его пишем", char);
    }
  }
  return uniq;

}

// Пример:
console.log(getUnique([1, 2, 2, 3, 4, 4, 4])); 
console.log(getUnique([1, 2, 2, 3, 4, 4, 4])); 
// Map { 1 => true, 2 => true, 3 => true, 4 => true }
console.log("-------------------------------------"); 
function mergeMaps(map1, map2) {
  // Создаем новый Map на основе map1
  const merged = new Map(map1);
  
  // Добавляем/перезаписываем значения из map2
  // При совпадении ключей берется значение из map2
  for (const [key, value] of map2) {
    merged.set(key, value);
  }
  
  return merged;
}

// Пример:
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['b', 3], ['c', 4]]);
console.log(mergeMaps(map1, map2));
// Map { 'a' => 1, 'b' => 3, 'c' => 4 }
console.log("-------------------------------------"); 
// Создайте функцию memoize(fn), которая возвращает новую функцию,
// кэширующую результаты вызовов оригинальной функции

function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Из кэша:', args);
      return cache.get(key);
    }
    
    console.log('Вычисляю...', args);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Тестируем
const slowSquare = (x) => {
  // Имитируем "дорогую" операцию
  for (let i = 0; i < 1000000000; i++) {} // Пауза
  return x * x;
};

const memoizedSquare = memoize(slowSquare);
/*
console.log(memoizedSquare(5)); // Вычисляю... [5] 25
console.log(memoizedSquare(5)); // Из кэша: [5] 25
console.log(memoizedSquare(3)); // Вычисляю... [3] 9
console.log(memoizedSquare(3)); // Из кэша: [3] 9
console.log(memoizedSquare(5)); // Из кэша: [5] 25
console.log("-------------------------------------"); */
// Напишите функцию groupBy(arr, key), которая группирует массив объектов
// по значению указанного свойства

function groupBy(arr, key) {
  
  const groupmap = new Map();
  arr.forEach((user) => {
   // console.log("user[key]", user[key]);
    //console.log("user.age", user.age);
    console.log("key-", key);
    if(!groupmap.has(user[key])){
     
      groupmap.set(user[key], [user]);
    }else{
      groupmap.get(user[key]).push(user);
      console.log("Индекс - ",groupmap.get(25));
    }
   
  })
  return groupmap
}

// Пример:
const users = [
  { id: 1, name: 'Иван', age: 25 },
  { id: 2, name: 'Анна', age: 25 },
  { id: 3, name: 'Петр', age: 30 }
];

console.log(groupBy(users, 'age'));
// Map {
//   25 => [{id: 1, name: 'Иван', age: 25}, {id: 2, name: 'Анна', age: 25}],
//   30 => [{id: 3, name: 'Петр', age: 30}]
// }
console.log("-------------------------------------"); 
/**
 * Напишите функцию wordFrequency(text), которая возвращает Map,
 * где ключи - слова в нижнем регистре, значения - количество их вхождений.
 * Игнорируйте знаки препинания.
 */

function wordFrequency(text) {
  const upmap = new Map();
  let clearstr = text.toLowerCase().replace(/[.,!?;:]/g, '');
  //console.log("clearstr", clearstr);
  const arr = clearstr.split(' ').filter(word => word !== '');
  let key = 1;
  arr.forEach((slovo) => {
    
    if(upmap.has(slovo)){
        console.log("Этот элемент уже есть", slovo);
      console.log("upmap1", upmap);
      let zn = upmap.get(slovo);
      zn++
      upmap.set(slovo, zn);
    }else{
      //console.log("upmap.has(slovo)", upmap.has(slovo));
      key = 1;
      upmap.set(slovo, key);
     // console.log("Добавил элемент", slovo);
     // console.log("upmap", upmap);
     // console.log("slovo", slovo);
      //console.log("Индек34с - ",upmap.get(slovo));
    }
//key++

  })
     return upmap;
}

console.log(wordFrequency("Привет мир, привет все!"));
// Map { 'привет' => 2, 'мир' => 1, 'все' => 1 }
console.log("-------------------------------------"); 

/**
 * Напишите функцию findIntersection(arr1, arr2), которая возвращает Map,
 * где ключи - общие элементы, значения - объект {count1: X, count2: Y}
 * X - сколько раз элемент встречается в arr1
 * Y - сколько раз элемент встречается в arr2
 */

function findIntersection(arr1, arr2) {
  console.log('=== НАЧАЛО ===');
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);
  
  const mymap = new Map();
  
  console.log('\n=== ПЕРВЫЙ ПРОХОД (arr1) ===');
  arr1.forEach((znach_arr1, index) => {
    console.log(`Элемент ${index}: ${znach_arr1}`);
    
    if (!mymap.has(znach_arr1)) {
      console.log(`  Новый элемент! Устанавливаю: { count1: 1, count2: 0 }`);
      mymap.set(znach_arr1, { count1: 1, count2: 0 });
    } else {
      const counts = mymap.get(znach_arr1);
      counts.count1++;
      console.log(`  Уже есть! Увеличиваю count1 до: ${counts.count1}`);
    }
  });
  
  console.log('\n=== ВТОРОЙ ПРОХОД (arr2) ===');
  arr2.forEach((znach_arr2, index) => {
    console.log(`Элемент ${index}: ${znach_arr2}`);
    
    if (mymap.has(znach_arr2)) {
      const counts = mymap.get(znach_arr2);
      counts.count2++;
      console.log(`  Есть в первом массиве! Увеличиваю count2 до: ${counts.count2}`);
    } else {
      console.log(`  Нет в первом массиве - игнорирую`);
    }
  });
  /*
  console.log('\n=== ФИЛЬТРАЦИЯ ===');
  const result = new Map();
  for (let [key, value] of mymap) {
    if (value.count2 > 0) {
      console.log(`  Сохраняю ${key}:`, value);
      result.set(key, value);
    } else {
      console.log(`  Удаляю ${key} (нет в arr2)`);
    }
  }
  
  console.log('\n=== РЕЗУЛЬТАТ ===');*/
  return mymap;
}

console.log(findIntersection([1, 2, 2, 3], [2, 2, 3, 4]));