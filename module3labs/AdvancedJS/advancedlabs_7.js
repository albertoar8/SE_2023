/* 7. In JavaScript, the toString method is used to convert an object to a string 
      representation. 
      By default, when an object is converted to a String, it returns a string that 
      looks something like [object Object]. 
      However, we can define our own toString methods for custom objects to provide 
      a more meaningful string representation.*/

// a) Define a custom toString method for the Person object that will format and print
//    their details
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Person.prototype.toString= function(){
    return `My name is ${this.name}, I am ${this.age} years old ${this.gender}`
}
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

// b) Test your method by creating 2 different people using the below constructor function 
//    and printing them
const person2 = new Person("Alberto Armenta", 34, "male");
const person3 = new Person("Ana O'Brian", 40, "female");
console.log("person2: " + person2); //prints person1: [object Object]
console.log("person3: " + person3); //prints person1: [object Object]

// c) Create a new constructor function Student that uses call to inherit from Person and 
//    add an extra property cohort
// related to inheritance
function Student(name, age, gender,cohort) {
    Person.call(this,name,age,gender);
    this.cohort = cohort;
}
// d) Add a custom toString for Student objects that formats and prints their details. Test 
//    with 2 students.
Student.prototype.toString= function(){
    return `I am a student: ${this.name}, cohort ${this.cohort}`
}
const student1 = new Student("Alberto Armenta", 34, "male","Software Engineering");
const student2 = new Student("Ana O'Brian", 40,"female", "DevOps");
console.log("student 1: " + student1); //prints student1: [object Object]
console.log("student 2: " + student2); //prints student2: [object Object]
