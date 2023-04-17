// 8. The following code creates a new Map object for storing names beginning 
//    with A, B, or C with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')
/*----------------------------------------------------------------------------*/
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map() //an empty map to begin with 
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF.set('Daniel', '0452312840') 
phoneBookDEF.set('Ernest', '0433291039') 
phoneBookDEF.set('Floyd', '0451631091')
// c) Update the phone number for Caroline
phoneBookABC.set('Caroline','0455223332');
// d) Write a function printPhoneBook(contacts) that prints the names and 
//    phone numbers in the given Map
//printPhoneBook(phoneBookABC)
function printPhoneBook(phone_book_map){
    //console.log(phone_book_map);
    for(item of phone_book_map){
        console.log(item);
    }
}
//e) Combine the contents of the two individual Maps into a single phoneBook Map
const masterphonebook= new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book
masterphonebook.forEach((value,key)=>console.log(key+" "+value))