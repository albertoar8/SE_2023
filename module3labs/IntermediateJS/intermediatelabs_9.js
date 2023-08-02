// 9. Given the below salaries object, perform the following tasks.
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};
/*--------------------------------------------------------------------------------------*/
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
console.log(sumSalaries(salaries))
function sumSalaries(salariesobject){
    let array_of_values= Object.values(salariesobject);
    let total_of_salaries=array_of_values.reduce((acc,ivalue)=>acc+ivalue,0);
    return total_of_salaries;
}
//b) Write a function topEarner(salaries) that calculates and returns the name of the 
//   person earning the highest salary
console.log(topEarner(salaries));
function topEarner(salariesobject){
    let array_of_values= Object.values(salariesobject);
    const maxvalue=Math.max(...array_of_values);
    const thetopearner=Object.keys(salariesobject).find(thiskeys=>salariesobject[thiskeys]===maxvalue)
    return thetopearner;
}
