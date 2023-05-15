/* 9. We can delay execution of a function using setTimeout, where we need to provide the 
      callback function to be executed after the delay.\
        a) Create a promise-based alternative randomDelay() that delays execution for a 
           random amount of time (between 1 and 20 seconds) and returns a promise we can use 
           via .then(), as in the starter code below
        b) If the random delay is even, consider this a successful delay and resolve the promise, 
           and if the random number is odd, consider this a failure and reject it
        c) Update the testing code to catch rejected promises and print a different message
        d) Try to update the then and catch messages to include the random delay value.

/*-----------------------------------------------------------------------------------------*/
// a)
function randomDelay() {
  const RandomSeconds = Math.ceil(Math.random() * 20); //generate random numbers from 0 to 20
  //return RandomSeconds===0?1:RandomSeconds //return 1 if random mnumber =0
  //first solution
  //return new Promise((resolve)=>setTimeout(resolve,RandomSeconds*1000))
  //second solution
  return new Promise((resolve, reject) => {
    setTimeout(resolve, RandomSeconds * 1000);
  });
}

//randomDelay().then(() => console.log("There appears to have been a delay."));

// b) and c)
function randomDelayB() {
  const RandomSeconds = Math.ceil(Math.random() * 20); //generate random numbers from 0 to 20

  return new Promise((resolve, reject) => {
    //checking the delay is odd or even number
    if (RandomSeconds % 2 === 0) {
      setTimeout(resolve, RandomSeconds * 1000);
    } else {
      reject("too long");
    }
    //or a shorter notation:
    //setTimeout((RandomSeconds %2===0)? resolve :reject, RandomSeconds*1000)
  });
}
/*randomDelayB()
  .then(() => console.log("Even delay seconds"))
  .catch(() => console.log("Odd delay seconds"));*/

  // d)
  function randomDelayD() {
   const RandomSeconds = Math.ceil(Math.random() * 20); //generate random numbers from 0 to 20
 
   return new Promise((resolve, reject) => {
     //checking the delay is odd or even number
     /*if (RandomSeconds % 2 === 0) {
       setTimeout(resolve, RandomSeconds * 1000);
     } else {
       reject("too long");
     }*/
     //or a shorter notation:
     setTimeout((RandomSeconds %2===0)? resolve :reject, RandomSeconds*1000,RandomSeconds)
   });
 }
 //console.log(typeof randomDelay());
 randomDelayD()
   .then((delay) => console.log(`Even delay seconds ${delay}`))
   .catch((delay) => console.log(`Odd delay seconds ${delay}`));