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


let polnaya_stoim = 0;

function getTotalPrice(){

    const arlenght = products.length;
   // console.log(arlenght);


for (let i=0; i<arlenght;  i++){

    polnaya_stoim = polnaya_stoim + products[i].price;

    
}
return polnaya_stoim;
}
    
getTotalPrice()

//console.log(polnaya_stoim);

// 4. addProduct(name, price, category) - добавляет новый товар
//{ id: 4, name: "Кофе", price: 15, category: "продукты" }

function addProduct(name, price, category){

    let id = products.length + 1;
    return products.push({id: id, name: name, price: price, category: category})

   // return `Имя: ${user.name}, Возраст: ${user.age}, Почка: ${user.email}`
    
}

addProduct('Водка', 150, 'Продукты')

console.log(products.length);

const poid = findProductById(5);

console.log(poid);