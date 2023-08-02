/* 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the 
      sequence is the sum of the previous 2.  e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. */
/*--------------------------------------------------------------------------------------*/
//  a) Write a function printFibonacci() using setInterval that outputs a number in
//     the Fibonacci sequence every second.
let F = [0, 1, 0]; //Array that represents the Fibonacci sequence (initial) Global variable
function getNextFibonacciNumber() {
  //returns next Fibonnaci number in the sequence (F[2])
  if (F[2] === 0) {
    //If it is the first time that executes, print 1
    F[2] = 1;
    return 1;
  } else {
    F[2] = F[0] + F[1]; //ADD the first 2 numbers and update the next
    F[0] = F[1]; //update series
    F[1] = F[2]; //update series
    return F[2];
  }
}
function printFibonacci(printThisMany = 3) {
  //PRINTS next Fibonnacci number every second
  let MyintervalID;
  MyintervalID = setInterval(() => {
    printThisMany--;
    console.log(getNextFibonacciNumber());
    if (printThisMany === 0) {
      clearInterval(MyintervalID);
    }
  }, 1000);
}
printFibonacci(); //press Ctrl-C TO EXIT
/*--------------------------------------------------------------------------------------*/
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls
//    to do the same thing
function printFibonacciTimeouts() {
  setTimeout(function LocalPrintFibonacci() {
    console.log(getNextFibonacciNumber());
    setTimeout(LocalPrintFibonacci, 1000);
  }, 1000);
}
//printFibonacciTimeouts();
/*--------------------------------------------------------------------------------------*/
//  c) Extend one of the above functions to accept a limit argument, which tells it
//     how many numbers to print before stopping.
// DONE ABOVE IN letter (a)