//1. Create a function that takes a string as a parameter and returns the string
//   with the first character of each word changed into a capital letter, as in 
//   the example below. Test it with different strings.

//console.log(ucFirstLetters("los angeles") ) //Los Angeles
/*--------------------------------------------------------------------------------*/

//INITIALIZE VARIABLES
const mystring="this is a  lowercase  test    string";     //Declare a test string
console.log("Original String:  "+mystring);  //Print original string to console
//EXECUTE,CALL FUNCTIONS
console.log("New String:      "+ucFirstLettersOfString(mystring));

//FUNCTION DECLARATION
function ucFirstLettersOfString(yourstring){
  let mywords=yourstring.split(" ");   //SPLIT String into words
  let newstring="";                    //Declare empty new string 
  for(let i=0;i<mywords.length;i++){
    newstring=newstring+" "+ucFirstLetterInWord(mywords[i]);
    //CONSTRUCT NEW STRING 
  }
  return newstring;  
};
function ucFirstLetterInWord(yourword){
  return yourword.charAt(0).toUpperCase()+yourword.slice(1);
}
