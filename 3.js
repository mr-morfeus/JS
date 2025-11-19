const library = {
    name: "Центральная библиотека",
    books: [
        {
            id: 1,
            title: "JavaScript для начинающих",
            author: "Иван Иванов",
            year: 2020,
            isAvailable: true,
            reader: null
        },
        {
            id: 2, 
            title: "React с нуля",
            author: "Петр Петров",
            year: 2021,
            isAvailable: false,
            reader: "Анна"
        }
    ]
};

// Функции:
// 1. borrowBook(bookId, readerName) - выдать книгу читателю
// 2. returnBook(bookId) - вернуть книгу в библиотеку
// 3. addBook(title, author, year) - добавить новую книгу
// 4. findBooksByAuthor(author) - найти книги автора
// 5. getAvailableBooks() - показать доступные книги

function borrowBook(bookId, readerName){
    // Ищем книгу
    let book = null;
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].id === bookId) {
            book = library.books[i];
            break;
        }
    }
    
    // Если не нашли
    if (book === null) {
        console.log("Книга не найдена!");
        return;
    }
    
    // Твоя логика выдачи книги
    if (book.reader === null) {
        book.reader = readerName;
        console.log(`Книга "${book.title}" выдана ${readerName}`);
    } else {
        console.log(`Книга уже у ${book.reader}`);
    }
}
borrowBook(0, 'люся')
borrowBook(1, 'Шлюся')
//
borrowBook(2, 'юся')
borrowBook(3, 'ся')
console.log(`---------------------------------------------------`);
function returnBook(bookId){
    let book = null;
    
    // 1. Ищем книгу
    for (let i = 0; i < library.books.length; i++) { // ✅ i < length
        if (library.books[i].id === bookId) {
            book = library.books[i];
            break;
        }
    }
    
    // 2. Проверяем результат ПОСЛЕ цикла
    if (book === null) {
        console.log("Книги с таким ID ненайдено!");
        return;
    }
    
    // 3. Возвращаем книгу
    console.log(`Книгу вернул читатель ${book.reader}`);
    book.reader = null;
    book.isAvailable = true;
    console.log(`Теперь ее читатель ${book.reader}`);
    console.log(`А ее доступность ${book.isAvailable}`);
}

returnBook(2);
console.log(`---------------------------------------------------`);

// 3. addBook(title, author, year) - добавить новую книгу

function addBook(title, author, year){

   let id = library.books.length + 1;
   const isAvailable = true;
   const reader = null;
   library.books.push({id, title, author, year, isAvailable, reader});

}

addBook("Как посадить реп", "Репасявалев", "2025");

addBook("Кареп", "Реплев", "2025");

const lastBook = library.books[library.books.length - 1];
console.log(lastBook.title); // "Как посадить реп" ✅
console.log(lastBook.author); // "Репасявалев" ✅
console.log(lastBook.isAvailable); // true ✅

console.log(`------------------------------------------------`);

//findBooksByAuthor(author) - найти книги автора

function findBooksByAuthor(author){

    // 1. Ищем книгу
    for (let i = 0; i < library.books.length; i++) { // ✅ i < length
        if (library.books[i].author === author) {
            book = library.books[i];
            console.log(`Книга с автором ${book.author} найдена`);
        }else{
        book = library.books[i]; 
        console.log(`Книги с автором ${book.author} у нас нет`);            
        }
    }
    
    /* 2. Проверяем результат ПОСЛЕ цикла
    if (book === null) {
        console.log("Книги с таким ID ненайдено!");
        return;
    }
    
    // 3. Возвращаем книгу
    console.log(`Книгу вернул читатель ${book.reader}`);
    book.reader = null;
    book.isAvailable = true;
    console.log(`Теперь ее читатель ${book.reader}`);
    console.log(`А ее доступность ${book.isAvailable}`);*/

}
findBooksByAuthor("Реплев");
findBooksByAuthor("Иван Иванов");