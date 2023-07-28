function findAccountById(accounts, id) {
  const accountLookUp = accounts.find(accounts => accounts.id === id);
  return accountLookUp;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((userOne, userTwo) => userOne.name.last.toLowerCase() > userTwo.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const booksBorrowedTotal = books.filter(book => {
    const currentBookLookedAt = book.borrows.some(borrowed => borrowed.id === account.id)
    return currentBookLookedAt;
  })

  return booksBorrowedTotal.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOutByAccount = books.filter(book => {
    const borrowedBooks = book.borrows.some(borrowed => borrowed.id === account.id && borrowed.returned === false);
    return borrowedBooks;
  }); //this will return all the books that the account given has checked out

  for (let i = 0; i < booksCheckedOutByAccount.length; i++ ) {
    booksCheckedOutByAccount[i]['author'] = authorLookUp(booksCheckedOutByAccount[i], authors)
  }
  return booksCheckedOutByAccount;
}

function authorLookUp(book, authors) {
  const authorFound = authors.find(author => author.id === book.authorId)
  return authorFound;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
