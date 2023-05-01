// 5. The following car object has several properties and a method which uses them to print 
//    a description. When calling the function normally this works as expected, but using it
//    from within setTimeout fails. Why?

let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964, 
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
    } 
}; 
//car.description(); //works 
//setTimeout(car.description(), 200); //fails
/*------------------------------------------------------------------------------------------*/
//a) solution. Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(function(){
    car.description()
},200); //wrapping the method in a function
/*------------------------------------------------------------------------------------------*/
//b) Change the year for the car by creating a clone of the original and overriding it
//First solution ---------------------------------------------------
//let cloneCar={...car};
//cloneCar.year=2015;
//car= cloneCar; //overrriding it
//Second solution ---------------------------------------------------
car = {...car,year: 2015}
//console.log(car)
/*------------------------------------------------------------------------------------------*/
// c) DOES the delayed description() call use the original values or the new values from b? Why?
//ANSWER: the delayed descrition() call uses the new values. BECAUSE by the time it runs the 
//        description() it has already overriden the car object
/*------------------------------------------------------------------------------------------*/
//d) Use bind to fix the description method so that it can be called from within 
//   setTimeout without a wrapper function
let describeCar= car.description.bind(car);
//describeCar();// if called outside a SetTimeout use ();
setTimeout(describeCar,200); //now describeCar contains the bound 'this' which is car (specific)
/*------------------------------------------------------------------------------------------*/
// e)  Change another property of the car by creating a clone and overriding it, and test that 
//     setTimeout still uses the bound value from d)
car={...car,make:"Ferrari"}
setTimeout(describeCar,200)
// ANSWER : setTimeout still uses the bind value when it was declared