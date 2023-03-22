//Working with arrays in Javascript
let myarray=[{name:"Alberto",lastname:"Armenta"},6.7,true,["RGB",0,0,255],"NOTES"];
const simplearray=[];
simplearray.push([2,3,4,5,6])

console.log('First Array');
console.log(simplearray.toString()+"\n");

//add an element at the end of the array
simplearray.push(7);
console.log('Add an element to the array using PUSH built-in method');
console.log(simplearray.toString());

//replace the value of the element at position 1 and 4
//simplearray.splice(simplearray[0], 1, 498);
simplearray[0]=498; 
simplearray[3] = 1521;

console.log('Change element values using INDEXes');
console.log(simplearray.toString());
