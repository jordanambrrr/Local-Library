// It returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

// It returns the book object that has the matching ID.
function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

// It returns an array with two arrays inside of it. 
// All of the inputted books are present in either
// the first or second array.
// The first array contains book objects that
// represent the books _that are currently checked out_,
// while the second array contains book objects that
// represent the books _that have been returned.
//_ You can check for the return status by looking
// at the first transaction object in the `borrows` 
// array.
function partitionBooksByBorrowedStatus(books) {
  const NotCheckedOut = books.filter((book) => 
  book.borrows[0].returned == false);
  const CheckedOut = books.filter((book) => 
    book.borrows[0].returned == true);
    return [NotCheckedOut,CheckedOut];
}

// It should return an array of ten or fewer account
// objects that represents the accounts given by
// the IDs in the provided book's `borrows` array.
// However, each account object should include the 
// `returned` entry from the corresponding transaction
// object in the `borrows` array.
function getBorrowersForBook(book, accounts) {
  const idsOfAccount = [];
  for (let account of accounts){
    for (let i=0; i< book.borrows.length; i++){
      if (account.id == book.borrows[i].id){
        const returned = book.borrows[i].returned ;
        idsOfAccount.push({...account, returned})
      }
    }
  }
  return idsOfAccount.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
