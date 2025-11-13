const products = [
    { id: 1, name: "Телефон", price: 500, category: "электроника" },
    { id: 2, name: "Ноутбук", price: 1000, category: "электроника" },
    { id: 3, name: "Футболка", price: 25, category: "одежда" },
    { id: 4, name: "Кофе", price: 15, category: "продукты" }
];

// Напиши функции:
// 1. getProductsByCategory(category) - возвращает товары категории
// 2. findProductById(id) - находит товар по id
// 3. getTotalPrice() - возвращает общую стоимость всех товаров
// 4. addProduct(name, price, category) - добавляет новый товар

function getProductsByCategory(category) {
    // Фильтруем массив товаров по категории
    return products.filter(product => product.category === category);
}
// ✅ ПРАВИЛЬНЫЙ ВЫЗОВ:
//const electronics = getProductsByCategory("электроника");
//console.log(electronics);

function findProductById(id){

    return products.find(i => i.id === id);
}
/*const poid = findProductById(4);

console.log(poid);*/

function getTotalPrice(){

    const arlenght = products.length;
    console.log(arlenght);

for (let i=0; i<arlenght;  i++){

    
}
}

//getTotalPrice()

console.log(products[arlenght][price]);