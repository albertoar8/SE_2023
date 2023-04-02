// 3. Use the following animals array for the below tasks. 
//    Test each one by printing the result to the console. 
//    Review the following link for tips:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
//    
/*-----------------------------------------------------------------------------------------*/
//Global Variables
const animals = ['Tiger', 'Giraffe'] 
console.log(animals)
/*-----------------------------------------------------------------------------------------*/
//Execution
// a) Add 2 new values to the end 
animals.push("Fox","Goldfish");
console.log(animals);

// b) Add 2 new values to the beginning 
animals.unshift("Gorila","Tarantula");
console.log(animals);

// c) Sort the values alphabetically
animals.sort();
console.log(animals);

//  d) Write a function replaceMiddleAnimal(newValue) that replaces the value in 
//       the middle of the animals array with newValue 
console.log(replaceMiddleAnimal(animals,"Rabbit"));

//  e) Write a function findMatchingAnimals(beginsWith) that returns a new array 
//       containing all the animals that begin with the beginsWith string. 
//       Try to make it work regardless of upper/lower case.
console.log(findMatchingAnimals(animals,"gOtilA"));
/*----------------------------------------------------------------------------------------*/
//Function declaration
function replaceMiddleAnimal(myStringArray,myanimal){
    if(myStringArray.length%2===0){ //Check if the array has an even number of elements 
        myStringArray[(myStringArray.length/2)-1]=myanimal; //modified the middle animal
        return myStringArray
    }
    myStringArray[(myStringArray.length-1)/2]=myanimal;
    return myStringArray
}
function findMatchingAnimals(myStringArray,beginsWith){
    let mynewArray=[];
    let lenghtofcomparison=beginsWith.length
    do{ //do search once first and then search again if No match is found but with less letters
    for(let i of myStringArray){
        let StringtoCompare=i.toLowerCase().repeat(1).slice(0,lenghtofcomparison);
        let newbeginsWith=beginsWith.toLowerCase().slice(0,lenghtofcomparison);
        if(StringtoCompare.localeCompare(newbeginsWith)===0){ //compare strings
            mynewArray.push(i) //Add string if it matches
        }
    }
    if(mynewArray.length!=0){ //Break the loop if a match is found
        break;
    }
    lenghtofcomparison=lenghtofcomparison-1; //reduce the # of characters to compare for the next search
    }while(lenghtofcomparison>0); //finish the loop if there is no match even in the 1st letter
    return mynewArray;
}
    
    
