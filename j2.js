const book = {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1966,
  pages: 480,
  getBookAge(){
    let skolko_proshlo = new Date().getFullYear() - book.year;
    return skolko_proshlo;
  },
};
console.log(`Книга ${book.title} автора ${book.author} была издана в ${book.year} году.`)
console.log(`сколько лет прошло с года издания книги ${book.getBookAge()}`)

const user = {
  name: "Яна",
  vozrast: "22",
  city: "Ижевск",
  email: "mail@mail.ru"
}
function printUserInfo(obj){
  let lengh = Object.keys(obj).length;

  for(let i = 0; i < Object.keys(obj).length; i++){
      console.log(`${Object.keys(obj)[i]}: ${obj[Object.keys(obj)[i]]}`);
  }
  console.log("длинная", lengh);
}
printUserInfo({color: "негр", raasa: "цветной"})

const cars = [
  { brand: 'Toyota', model: 'Camry', year: 2020, color: 'silver' },
  { brand: 'BMW', model: 'X5', year: 2019, color: 'black' },
  { brand: 'Toyota', model: 'RAV4', year: 2021, color: 'white' },
  { brand: 'Audi', model: 'A4', year: 2018, color: 'blue' }
];

for (let key in cars) {
   // console.log("Модель - ", cars[key].brand);
  if(cars[key].brand === 'Toyota'){
    console.log("Модель - ", cars[key].model);
  }
    // код для выполнения
}
const student = {
  name: "Иван",
  address: {
    city: "Санкт-Петербург",
    street: "Невский проспект",
    house: 100
  },
  hobbies: ["программирование", "гитара", "путешествия"]
};
    console.log(`Студент ${student.name} живет в городе ${student.address.city} и увлекается ${student.hobbies[0]}.`);
