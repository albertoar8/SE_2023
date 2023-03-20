//step 1 create an array
const students = [];
const student1 = {
  name: "David",
  age: 21,
  subjects: ["Database fundamentals","Web development","Artificial intelligence"]
};
const student2 = {
  name: "Jessy",
  age: 21,
  subjects: ["Network security","Advance Network System","big Data"]
};
//add objects to the array of objects
students.push(student1);
students.push(student2);

//console.log(students);

//step 2 - print all object properties
for(let i=0;i<students.length;i++){
    //console.log(students[i]);
    displayvalues(students[i]);
}
function displayvalues(yourobject){
    for (let key in yourobject){
        const thisobject= yourobject[key];
        console.log(thisobject);
    }
}
