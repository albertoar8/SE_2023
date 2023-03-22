// Declare functions with common operators
function addition(a,b){
    return a+b;
}
function substraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
//Declare function that takes a <name> as an argument and prints "Hello <name>!"
function greetings(name){
    let greet="Hello ";
    return greet+name+" !";
}
console.log(greetings("Jason"));
console.log(addition(3,5));