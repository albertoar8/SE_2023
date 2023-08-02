//import myJson from './ex6.json' assert {type: 'json'};
var myobject={
    "book":[{
        "title":"the book title",
        "number_of_pages": 150,
        "description":"this is the description of the book: the book title",
        "author": "Alberto Armenta"
    },
    {
        "title":"the book title number 2",
        "number_of_pages": 150,
        "description":"this is the description of the book: the book title #2",
        "author": "Some random dude"
    }]
};

//To access data from JSON object use dot notation
console.log("First book title: ");
console.log(myobject.book[0].title);
console.log("\nSecond book author:");
console.log(myobject.book[1].author);
