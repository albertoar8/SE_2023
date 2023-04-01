//8. The object below represents a single city.
//  a) Write a function that takes an object as an argument and uses a 
//     for…in loop to access and print to the console each of those object
//     properties and their values. Test it using the sydney object below.
//
//  b) Create a new object for a different city with different properties and
//     call your function again with the new object.
//________________________________________________________________________________
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
}
const melbourne = { 
    name: 'Melbourne', 
    population: 8_391_680, 
    state: 'VIC', 
    founded: '8 August 1718', 
    timezone: 'Australia/Melbourne' 
}

function printObjectKeyAndValues(object1){
    // const NumberOfKeys = Object.keys(object1).length; //stores the amount of key:value pairs
    // for(let i=0;i<NumberOfKeys;i++){
    //     console.log(Object.keys(object1)[i]+' : '+Object.values(object1)[i])
    // }

    Object.keys(object1).forEach(i => {
        console.log(i+" is "+object1[i]);
    });

}
printObjectKeyAndValues(sydney);
console.log();
printObjectKeyAndValues(melbourne);