// 2. Create a function truncate(str, max) that truncates a given string of text 
//    if its total length is greater than the max length. 
//    It should return either the truncated text, with an ellipsis (…) added to
//    the end if it was too long, or the original text otherwise. 
//    
//    b) Write another variant of the truncate function that uses a conditional operator.
/*---------------------------------------------------------------------------------------*/
//Global Variable declaration
const mystring="this is another string for testing excersice 2"
const maxStringLenght=21;
//Execution
console.log("Original string:            "+mystring);
console.log(`Truncated at character #${maxStringLenght}: `+truncate(mystring,maxStringLenght))
//Function declaration
function truncate(str,maxLenght){
    if(str.length>maxLenght){  //CHECK if string is greater than MAX lenght
        let newstring="";
        for(let i=0;i<maxLenght;i++){
            newstring=newstring+str.split('')[i]
        }
        return newstring+"..."; // or use str.substring(0,maxLenght)+"..."
    }
    return str; //return the same string if it doesnt exceed Max lenght
}