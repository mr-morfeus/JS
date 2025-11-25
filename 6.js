
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

console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }