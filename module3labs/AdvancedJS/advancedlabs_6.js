/* 6. Use the Function prototype to add a new delay(ms) function to all functions, 
      which can be used to delay the call to that function by ms milliseconds.*/
function multiply(a, b) {
    console.log( a * b );
}
function add(a, b,c,d) {
    console.log( a + b +c +d);
}
/*
a) Use the example multiply function below to test it with, as above, and assume that all 
   delayed functions will take two parameters */
// Function.prototype.delay= function(delaybythis){
//     console.log(this) 
//     return (a,b)=>{         
//         setTimeout(()=>{this(a,b)},delaybythis);
//      }
//  }
//  multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//  add.delay(1000)(5, 5); // prints 10 after 500 milliseconds
/*---------------------------------------------------------------------------------------
b) Use apply to improve your solution so that delayed functions can take any number of 
parameters*/
Function.prototype.delay= function(delaybythis){
      return (...arguments)=>{
          setTimeout(()=>{this.apply(this,[...arguments])},delaybythis);
      }
  }
 multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
 add.delay(1000)(5, 5,5,5); // prints 20 after 500 milliseconds

/*
c) Modify multiply to take 4 parameters and multiply all of them, and test that your 
delay prototype function still works.*/
//Answer: tested above by modifying add function 
