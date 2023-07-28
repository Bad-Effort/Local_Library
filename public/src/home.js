function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter(book => {
    const checkedOutBooks = book.borrows.some(borrowed => borrowed.returned === false);
    return checkedOutBooks;
  })

  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  const listOfGenres = [];

  books.forEach(book => {
    if (!listOfGenres.includes(book.genre)) listOfGenres.push(book.genre)
  });

  const result = [];

  for (let i = 0; i < listOfGenres.length; i++) {
    let booksByGenre = getBooksByGenre(books, listOfGenres[i]);
    result.push({name: listOfGenres[i], count: booksByGenre.length});
  }

  result.sort((genreOne, genreTwo) => (genreTwo.count - genreOne.count));
  result.splice(5);
  return result;

}

function getMostPopularBooks(books) {
  const mostPopularBooks = [];

  for (let i = 0; i < books.length; i++) {
    mostPopularBooks.push({name: books[i].title, count: books[i].borrows.length}) 
  }

  mostPopularBooks.sort((bookOne, bookTwo) => (bookTwo.count - bookOne.count));
  mostPopularBooks.splice(5)

  return mostPopularBooks
}

function getMostPopularAuthors(books, authors) {
  const booksByAuthors = [];

  for (let i = 0; i < authors.length; i++) {
    let totalBorrows = 0;
    const authorByAuthorId = books.filter(book => {
      if (book.authorId === authors[i].id) {
        totalBorrows += book.borrows.length;
      }
    });
    const authorName = (`${authors[i].name.first} ${authors[i].name.last}`);
    booksByAuthors.push({name: authorName, count: totalBorrows})
  }

  booksByAuthors.sort((authorOne, authorTwo) => authorTwo.count - authorOne.count);
  return booksByAuthors.splice(0, 5);
} 

function getBooksByAuthor(books, authors) {


  return;
}

function getBooksByGenre(books, genre) {
  const booksInGenre = books.filter(book => book.genre === genre)
  return booksInGenre;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
