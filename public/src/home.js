function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
return books.reduce((numberOfBorrows, {borrows}) =>{
  const mostRecent = borrows[0];
  if (!mostRecent.returned) numberOfBorrows += 1;
  return numberOfBorrows;
}, 0);
}

function mostPopularCollection(collection){
  let mostPopular = collection.sort((numberInCollectionOne, numberInCollectionTwo)=> (numberInCollectionOne.count < numberInCollectionTwo.count ? 1:-1)).slice(0,5);
  return mostPopular;
}
// create an empty array to hold genre info
// go through each book and find the genre
//    create a new inital genre 
//    if the same genre, then add 1 to the count
//    if its a different genre, then add the genre to the list
//    return the top 5 genres
function getMostCommonGenres(books) {
  const mostCommonGenres = [];
  for (let book of books){
    const genre = mostCommonGenres.find (
      (initialGenre) => initialGenre.name == book.genre);
      if (genre){
        genre.count += 1;
      } else {
        mostCommonGenres.push({name: book.genre, count:1})
      }
    }
  return mostPopularCollection(mostCommonGenres);
}

function getMostPopularBooks(books) {
  const mostCheckedOut = [];
  for (let book of books){
    const numberOfBorrows = book.borrows.length;
    const bookName = mostCheckedOut.find(
      (initialBook) => initialBook.name == book);
      if (bookName){
        bookName.count = +1;
      } else {
        mostCheckedOut.push({name: book.title, count: numberOfBorrows});
      }
  }
  return mostPopularCollection(mostCheckedOut);
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];
  for ( let author of authors){
    const nameOfAuthor = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books){
      if (author.id == book.authorId){
        count += book.borrows.length;
      }
    }
  const listOfAuthors = {name: nameOfAuthor, count: count}
  mostPopularAuthors.push(listOfAuthors);
  }
  return mostPopularCollection(mostPopularAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
