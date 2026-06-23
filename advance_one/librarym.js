const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", available: true },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", available: false },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho", available: true },
    { id: 4, title: "Deep Work", author: "Cal Newport", available: true }
];

// 1. Available Books (filter)
const availableBooks = books.filter((book) => {
    return book.available;
});

console.log("Available Books:", availableBooks);

// 2. Search Book (find)
const searchedBook = books.find((book) => {
    return book.title === "Deep Work";
});

console.log("Searched Book:", searchedBook);

// 3. Total Books Count (reduce)
const totalBooks = books.reduce((count) => {
    return count + 1;
}, 0);

console.log("Total Books:", totalBooks);

// 4. Available Books Count (reduce)
const availableBooksCount = books.reduce((count, book) => {
    return book.available ? count + 1 : count;
}, 0);

console.log("Available Books Count:", availableBooksCount);

// 5. Show All Book Titles (map)
const bookTitles = books.map((book) => {
    return book.title;
});

console.log("Book Titles:", bookTitles);

// Bonus Task
function getBookStats(books) {
    return {
        totalBooks: books.length,
        availableBooks: books.filter(book => book.available).length,
        unavailableBooks: books.filter(book => !book.available).length
    };
}

console.log("Book Stats:", getBookStats(books));