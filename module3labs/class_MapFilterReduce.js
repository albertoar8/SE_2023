//Map Filter and Reduce exercise

const students = [
  { name: "Teddy", scores: [90, 85, 92] },
  { name: "Alberto", scores: [75, 80, 85] },
  { name: "Adam", scores: [90, 95, 85] },
  { name: "David", scores: [80, 100, 86] },
  { name: "Jessy", scores: [100, 96, 98] },
  { name: "Linda", scores: [87, 100, 98] },
];

// Use map to calculate the average test score for each student

const average_array=students.map((item)=>{
    const sum_scores= item.scores.reduce((total,i)=>total+i)
    item.average= sum_scores/3;
    return sum_scores/3;
})
// console.log('\nStudent Name and AVERAGE');
// for(key in students){
//     console.log(students[key].name+' '+students[key].average);
// };

//avarage = total_score/student.scores.length

// Use filter to only select students with an average above 90
const students_greater_than =students.filter(i=>i.average>90);
console.log(students_greater_than);

// console.log("\nStudents with average above 90");
// for(key in students_greater_than){
//     console.log(students[key].name+' '+students[key].average)
// }