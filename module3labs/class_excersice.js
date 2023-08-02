//Sum of the array
const numArr = [1,2,3,4,5,100,200]

const checkTotalSumArrayLessThanValue = (arrayNumber, value) => {
  //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41, Intermediate)
  //Get the sum of the array and compare the sum with the provide value
  
  //First Option : Using foreach
  //
  // let result=0;
  // arrayNumber.forEach(element => {
  //   result+=element
  //   console.log(result)
  // });
  // 
  //Second Option: Using reduce
  const result=arrayNumber.reduce((acc,value)=>acc+value,0);
  //RETURN statement
  return (result < value) ? `less than ${value}` : `greater than ${value}`;
};
console.log(checkTotalSumArrayLessThanValue(numArr,50));


//Sum of the array object

class Student {
  constructor(name, age, score, school) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.school = school;
  }
}

const studentArr = [
  new Student('Teddy', 20, 90, 'Sydney High school'),
  new Student('Luke', 23, 88, 'Sydney High school'),
  new Student('Rachel', 23, 95, 'Sydney High school'),
  new Student('Liz', 20, 92, 'Sydney High school'),
  new Student('Alberto', 24, 85, 'Sydney High school'),
]
const checkTotalSumScoreOfListStudentGradeLessThanValue = (studentArr, value) => {
  //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41)
  const total_score=studentArr.reduce((acc,arr_value)=>acc=acc+arr_value.score,0)
  return (total_score < value) ? `less than ${value}` : `greater than ${value}`;
};
console.log(checkTotalSumScoreOfListStudentGradeLessThanValue(studentArr,10));