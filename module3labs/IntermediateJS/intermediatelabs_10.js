// 10. The following code uses the Date object to print the current time and the number
//     of hours that have passed today so far. Extend the code to do the following:
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 

console.log(today.getHours() + ' hours have passed so far today')
/*-------------------------------------------------------------------------------------*/
// a) Print the total number of minutes that have passed so far today
console.log(today.getHours()*60+today.getMinutes() + ' minutes have passed so far today')

// b) Print the total number of seconds that have passed so far today
console.log(today.getHours()*60*60+today.getMinutes()*60+today.getSeconds() + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const mybirth= new Date(1989,10,23,22,0,0) //October 23rd,1989 (month is 0-indexed)
let my_years=today.getFullYear()-mybirth.getFullYear();
const my_miliseconds=today-mybirth;
const my_days=Math.floor(my_miliseconds/(1000*60*60*24));
let my_months=today.getMonth()-mybirth.getMonth();
if(my_months<0||(my_months===0 && today.getDate()<mybirth.getDate())){
    my_years--;
    my_months=11-mybirth.getMonth()+1+today.getMonth();
}
console.log('I am '+my_years+' years, '+my_months+' months and '+my_days+' days old')
// d) Write a function daysInBetween(date1, date2) which calculates and returns
//    the amount of days in between the two given dates.

