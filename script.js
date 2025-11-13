function showMessage() {
    alert('Ура! Вы нажали кнопку!');
    console.log('Кнопка была нажата');
}

// Простая функция сложения
function addNumbers(a, b) {
    return a + b;
}

// Проверим функцию
const result = addNumbers(5, 3);
console.log('Результат сложения:', result);

// Создай объект пользователя и функции для работы с ним
const user = {
    name: "Анна",
    age: 25,
    email: "anna@mail.com",
    isOnline: false
};

// Напиши функции:
// 1. login() - меняет isOnline на true
// 2. logout() - меняет isOnline на false  
// 3. getProfile() - возвращает строку "Имя: Анна, Возраст: 25, Email: anna@mail.com"
// 4. updateAge(newAge) - обновляет возраст

function login() {

    user.isOnline = true;
    console.log(`isOnline: ${user.isOnline}`)
}
login()
console.log(user);

function logout() {
    user.isOnline = false;
    console.log(`isOnline: ${user.isOnline}`);
}

logout()
console.log(user);

function getProfile() {


    return `Имя: ${user.name}, Возраст: ${user.age}, Почка: ${user.email}`;

}


console.log(getProfile());