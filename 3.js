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

    const i = bookId;
    const readerNam = readerName;

 // return `Имя: ${user.name}, Возраст: ${user.age}, Почка: ${user.email}`
//console.log(`В библиотеке книг: ${library.books.length}`);


if(library.books[i].reader === null){

    console.log(`Книга - ${library.books[i].title} в наличии`);

    library.books[i].reader = readerName;
    console.log(`Выдадим ее читателю - ${readerName}`);
    console.log(`Книга выдана пользователю- ${library.books[i].reader}`);

    }else{

    console.log(`Книга выдана читателю ${library.books[i].reader}`);    
}
}
borrowBook(0, 'Шлюся')
borrowBook(1, 'юся')