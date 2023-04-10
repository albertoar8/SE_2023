// 7. Use the following array of book objects to practice the array functions for map,
//    find and filter. Test each of your answers to the below tasks.
/*--------------------------------------------------------------------------------------*/
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the 
//    title of the book object with the matching id.
//console.log(getBookTitle(4));
function getBookTitle(bookID){
    let found_by_id=books.find(({id})=>id===bookID); //extract the objects that match the id
    return found_by_id.title;
}
// b) Write a function getOldBooks() that uses the filter function to return all
//    book objects written before 1950.
//console.log(getOldBooks());
function getOldBooks(){
    let old_book_objects=books.filter(({year})=>year<=1950);
    return old_book_objects;
}
// c) Write a function addGenre() that uses the map function to add a new genre property
//    to all of the above books, with the value ‘classic’.
books.map(addGenre)
//console.log(books)
function addGenre(bookObject){
    bookObject.genre="classic";
}
// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter 
//    together to return an array of book titles for books written by authors whose 
//    names start with authorInitial.
//console.log(getTitles("F"))
function getTitles(authorInitial){
    let ArrayofBookObjects=books.filter(({author})=>author.charAt(0).toLowerCase()===authorInitial.toLowerCase());
    return ArrayofBookObjects.map((eachobject)=>eachobject.title); //returns an array /arrow function. no return statement needed
}
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
//    book with the most recent publication date.
console.log(latestBook(books));
function latestBook(arrayOfBookObjects){
    let yearofpublicationArray=[];
    arrayOfBookObjects.forEach(element => {
        yearofpublicationArray.push(element.year)
    });
    let max=Math.max(...yearofpublicationArray); //why the 3 dots ?
    return arrayOfBookObjects.find(({year})=>year===max); //returns the book object with the most recent year
}
