// Return the account object that has the matching ID.
function findAccountById(accounts,id) {
  return accounts.find((account) => account.id.includes(id));
}


// Return a sorted array of the provided account objects. 
// The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1,lastName2) => 
  (lastName1.name.last.toUpperCase() > lastName2.name.last.toUpperCase() ? 1:-1));
}

// Returns a _number_ that represents the number of times the account's ID
// appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  let numberOfTimesBorrowed = 0;
  const borrowedBooksByAccount = books.forEach((book) => {
    if (book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id){
          numberOfTimesBorrowed += 1 ;
        }
      });
  }
});
  return numberOfTimesBorrowed; 
}


// create a function 
// create an empty array of borrowed books
// filter the books array for books that match the same id
// AND that are returned
// 	go through each book and see if it is matching 
// create a new array of the borrowed books
// 	create a new array from the borrowed book array
// 	add the author’s information

// create a helper function to get relevant author info
function findAuthorInfo (book, authors){
  const author = authors.find((author) => author.id == book.authorId);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) {
   const borrowed = [];
   books.forEach((book) => {
   let borrowedBook = book.borrows ;
   borrowedBook.forEach((borrow) => {
   if (borrow.id == account.id && !borrow.returned){
    borrowed.push(book);
   }
  });
});
  let finalBorrowedBooksList = borrowed.map((book) => {
    return {...book, author: findAuthorInfo(book,authors)};
  });
  return finalBorrowedBooksList
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
