// 2. The following delayMsg function is intended to be used to delay printing a message until
//    some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds) 
// d) Use clearTimeout to prevent the fifth test from printing at all.
/*-------------------------------------------------------------------------------------------*/
function delayMsg(msg) { 
    console.log(`This message will be printed after a delay: ${msg}`) 
} 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')
let timeoutID=setTimeout(delayMsg, 3000, '#5: Delayed by 3000ms'); 
// a) ANSWER: because message#1 has the highest delay and so on
/*--------------------------------------------------------------------------------------------*/
// b) SOLUTION:
delayMsgArrow = (msg)=>{
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsgArrow, 100, '#1: Delayed by 100ms (arrow)'); 
setTimeout(delayMsgArrow, 20, '#2: Delayed by 20ms (arrow)'); 
setTimeout(delayMsgArrow, 0, '#3: Delayed by 0ms (arrow)'); 
delayMsgArrow('#4: Not delayed at all (arrow)')
/*---------------------------------------------------------------------------------------------*/
// c) Addind a 5th test with large delay
// D) Clearing one of the timeouts. we need to store the timeoutID in a variable.
clearTimeout(timeoutID)