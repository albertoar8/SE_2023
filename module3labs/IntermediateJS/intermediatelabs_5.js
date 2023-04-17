//5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.2;
let tenCents = 0.1;
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

//We can sometimes avoid this using the toFixed function to force the number of decimal places
// as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
let sum = fixedTwenty + fixedTen;
//console.log(typeof sum) //why is this not working?
/*--------------------------------------------------------------------------*/
// a)Explain why the above code returns the wrong answer:
//ANSWER: because when .toFixed method is applied the result typeof variable is a string
//SOLUTION: add numbers first and then apply .toFixed() only to the result
let result = twentyCents + tenCents;
//console.log(result.toFixed(2));
/*--------------------------------------------------------------------------*/
//b) Create a function currencyAddition(float1, float2) which safely adds the two decimal
//   numbers float1 and float2 and returns the correct float result.
//console.log(currencyAddition(twentyCents, tenCents));
/*Function declaration*/
function currencyAddition(float1, float2) {
  let addition = float1 + float2;
  let result = parseFloat(addition.toFixed(3));
  return result;
}
// c) Create a function currencyOperation(float1, float2, operation) which safely performs
//    the given operation (either +, -, / or *) on the two numbers and returns the correct
//    float result.
console.log(currencyOperation(twentyCents,tenCents,"/",5))
function currencyOperation(float1, float2, operation, decimals) {
  switch (operation) {
    case "+":
      let addition = float1 + float2;// return Math.round((float1+float2)*numOfDecimals)  /  numOfDecimals
      return parseFloat(addition.toFixed(decimals));
    case "-":
      let substraction = float1 - float2;
      return parseFloat(substraction.toFixed(decimals));
    case "*":
      let multiplication = float1 * float2;
      return parseFloat(multiplication.toFixed(decimals));
    case "/":
      let division = float1 / float2;
      return parseFloat(division.toFixed(decimals));
    default:
      return "Check your arguments,Cannot perform function";
  }
}
