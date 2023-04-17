// const arr[];
// const obj={}:
// const map=new map();

// map.set('Teddy','student');
//  //USE SIZE FOR MAP: MAP.SIZE (NOT LENGHT)
const student = {
    name: 'Teddy',
    city: 'Sydney',
    subjects:  new Map()
  }
  student.subjects.set('Object Oriented Program', new Map([
    ['Mid-term', 80],
    ['Final', 85]
  ]))
  student.subjects.set('Database fundamental', new Map([
    ['Mid-term', 85],
    ['Final', 90]
  ]))
  student.subjects.set('Network Security', new Map([
    ['Mid-term', 83],
    ['Final', 85]
  ]))
  student.subjects.set('Mobile Application', new Map([
    ['Mid-term', 80],
    ['Final', 82]
  ]))
  console.log(student);
  
  //1 Get the final score for Mobile Applications
  console.log(student.subjects.get('Object Oriented Program'));
  //2 Get the average score for the final exam for all subjects