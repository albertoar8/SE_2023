/*-----------SECOND ATTEMPT------------------*/
/*No conditional statements*/

//Global variables
const cssProp = "margin-left-property";
const separatedCssProp = cssProp.split("-");
//Execution
const NewCssProp = camelCase(separatedCssProp);
console.log(NewCssProp);
//Function declaration
function camelCase(arrayofwords) {
  let NewArrayOfWords = [];
  let NewCssProp="";
  for (let i of arrayofwords) {
    i = i.charAt(0).toUpperCase() + i.slice(1);
    NewArrayOfWords.push(i);
  }
  NewCssProp=NewArrayOfWords.join("")
  return NewCssProp.charAt(0).toLowerCase() + NewCssProp.slice(1);
}
