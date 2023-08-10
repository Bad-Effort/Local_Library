function findAuthorById(authors, id) {
  const AuthorLookUp = authors.find(author => author.id === id);
  return AuthorLookUp;
}

function findBookById(books, id) {
  const BookLookUp = books.find(book => book.id === id)
  return BookLookUp;
}

function partitionBooksByBorrowedStatus(books) {
  const checkOutBooks = books.filter(book => {
    const borrowedOrNot = book.borrows.some(book => book.returned === false);
    return borrowedOrNot;
  });
  const inStockBooks = books.filter(book => {
    const borrowedOrNot = book.borrows.every(book => book.returned === true);
    return borrowedOrNot;
  });

  const sortedBooks = [checkOutBooks, inStockBooks]

  return sortedBooks;

}

function getBorrowersForBook(book, accounts) {

  // ######################################### \\
  
  const accountsBorrowedBooks = accounts.filter(account => {
    const accountLookUp = accountLookUpById(book, account)
    return accountLookUp;
  });
  
  const result = accountsBorrowedBooks.reduce((previous, account) => {
    account.returned = accountLookUpById(book, account).returned;
    previous.push(account)
    return previous
  }, [])
  return result.splice(0, 10); 


  // ######################################### \\
/*
  const accountsBorrowedBooks = accounts.filter(account => {
    const accountLookUp = accountLookUpById(book, account)
    return accountLookUp;
  });
  
  for (let i = 0; i < accountsBorrowedBooks.length; i++) {
    accountsBorrowedBooks[i].returned = accountLookUpById(book, accountsBorrowedBooks[i]).returned;
  }
  return accountsBorrowedBooks.splice(0, 10);
  */ 
}

function accountLookUpById(book, account) {
  const accountLookUp = book.borrows.find(borrow => account.id === borrow.id);
  return accountLookUp
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
