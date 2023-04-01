//9. Use the following variables to understand how JavaScript stores objects by reference.
//  a) Create a new moreSports variable equal to teamSports and add some 
//     new sport values to it (using push and unshift)
//  b) Create a new dog2 variable equal to dog1 and give it a new value
//  c) Create a new cat2 variable equal to cat1 and change its name property
//  d) Print the original teamSports, dog1 and cat1 variables to the console. 
//     Have they changed? Why?
//  e) Change the way the moreSports and cat2 variables are created to ensure 
//     the originals remain independent

//Original VALUES
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//CLONING OR DUPLICATING Original Values
/*--------------------------------------------------------------------------------------- */

/*ARRAYS*/ 
//let moreSports=teamSports;
//let moreSports=teamSports.map((x)=>x); //map method for arrays creates a new array
let moreSports=[...teamSports]; //Spread operator (shallow copy)
moreSports.push("Gymnastics","Football");

/*STRINGS*/ 
let dog2 = dog1;
dog2='Rocko';

/*OBJECTS*/ 
//let cat2 = cat1;
let cat2 = Object.assign({},cat1); //ECMAScript 6 Object.assign() method
cat2.name='Yoko';

//print Original Values
console.log("Original Values: \n");
console.log(teamSports+'\n'+dog1+"\n"+Object.values(cat1)+'\n');
//print DUPLICATES
console.log("Copy of Values: \n");
console.log(moreSports+'\n'+dog2+"\n"+Object.values(cat2)+'\n');

