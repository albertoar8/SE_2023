//Rewrite the following function using: 
//   a) function expression syntax, and 
//   b) arrow function syntax. Test each version to make sure they work the same.



// function getGreeting(name){
//     return 'Hello '+name+' !';
// }
getGreeting = (name) => "Hello "+name+" ! (arrow function syntax)";

console.log(getGreeting('Jason'));