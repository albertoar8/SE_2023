// decorators 
//borrowing a method
function hash(){ // in typescript may not work . 
    console.log([].join.call(arguments));
}
//hash(1,2)

//functional binding => this
const user={
    firstName: "Teddy",
    hello(){
        console.log(`Hello, ${this.firstName}`);
    },
}
//user.hello();
//FIRST SOLUTION
setTimeout(function(){user.hello();},1000);
//SECOND SOLITION
const hello=user.hello.bind(user);
setTimeout(hello,1000);