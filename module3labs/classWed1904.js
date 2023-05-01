// using a function constructor
const rabbit= function(name){
    this.name=name;
    this.printName= function(){
        console.log(this.name);
    }
}
// using the class method. the constructor is declared inside and declare it first thing
// as a recommendation for clean code
class Rabbit {
    constructor(name){
        this.name=name;
    }
    printName(){
        console.log(this.name);
    }
}
const myRabbit= new rabbit("function rabbit");
const myRabbitClass= new Rabbit("class rabbit");
console.log(myRabbit.name)
console.log(myRabbitClass.name)
myRabbit.printName();
myRabbitClass.printName();
/*---------------------------------------------------------------*/
//INHERITANCE
//CREATING An animal class
class Animal {
    constructor(name){
        this.speed=0;
        this.name=name;
    }
    run(){
        this.speed=1;
        console.log(`${this.name} is runnning at ${this.speed}`);
    }
    stop(){
        this.speed=0;
        console.log(`${this.name} has stopped`);
    }
}


class Rabbit2 extends Animal{
    hide(){
        console.log(`${this.name} is hiding`)
    }
}
const myRabbit2= new Rabbit2("Rabbit2");
myRabbit2.run(100);
myRabbit2.stop();
myRabbit2.hide();

