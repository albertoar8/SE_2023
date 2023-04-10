// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties
//    like 'margin-left' into camel-cased 'marginLeft'. The function should remove 
//    all dashes, and uppercase the first letter of each word after a dash. 
//
//    b) Create variants of the camelCase function that use different types of for loops, and 
//    c) with and without the conditional operator.
/*-------------------------------------------------------------------------------------*/
/*-----------FIRST ATTEMPT------------------*/
//Global variables
const cssProp='margin-left-property';
//Execution
const ArrayOfWords=camelCase(cssProp);
console.log(capitalizeFirstLettersExceptFirstWord(ArrayOfWords).join(""));
//Function declaration
function camelCase(dashSeparatedProperty){
    let camelCasePropertyWords=[];
    let word=[];
    counter=0
    for (const letter of dashSeparatedProperty){
        counter++;
        if(letter==="-"){
            camelCasePropertyWords.push(word.join(""));
            word=[];
        }else if(counter===dashSeparatedProperty.length)  {
            word.push(letter);
            camelCasePropertyWords.push(word.join(""));
        }else{
            word.push(letter);
        }
    }
    return camelCasePropertyWords; //return array of words from dashseparated CSS
}
function capitalizeFirstLettersExceptFirstWord(arrayofwords){
    counter=0;
    let NewArrayOfWords=[];
    for(let i of arrayofwords){
        counter++;
        if (counter===1){
            NewArrayOfWords.push(i)
        }else{
            i=i.charAt(0).toUpperCase() + i.slice(1)
            NewArrayOfWords.push(i);
        }
    }
    return NewArrayOfWords
}