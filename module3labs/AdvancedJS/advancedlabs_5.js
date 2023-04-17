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
car.description(); //works 
setTimeout(car.description(), 200); //fails
//a) solution
setTimeout(function(){
    car.description()
},200);
//b) 

let cloneCar={...car};
cloneCar.year=2015;
//second solution
car = {...car,year: 2015}

//d 
let describeCar= car.description.bind(car);
car = {...car, year: 2020}