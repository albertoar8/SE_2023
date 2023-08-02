const student={};
const clonestudentkeys=[];
const employee={
    country:'England',
    name:'Teddy',
    occupation:'software engineer',
    age:31,
}
const employee2={
    country:'US',
    name:'Alberto',
    occupation:'Data engineer',
    age:33,
}
const engineer={
    country:'Japan',
    name:'Rachel',
    occupation:'Devops',
    age:35,
}

//asssign new property to an object
student.name='Joe Doe';
student.age=28;
student.address='221b baker street';
student.city='London';
student.country='England';
//get al the keys of an object (ex.student object)
for(const key in student){
    clonestudentkeys.push(key);
}
//make a function to check the same country
//function isSameCountry(obj1, obj2)
//expectation isSameCountry(student, employee2)=> different country
//expectation isSameCountry(employee1, student)=> same country 

function isSameCountry(obj1,obj2){
    const countryObject1= obj1?.country ?? 'NA'; //check if the value is defined
    const countryObject2= obj2?.country ?? 'NA';
    // console.log(countryObject1);
    // console.log(countryObject2);
    if(countryObject1==='NA' && countryObject2==='NA'){
        return 'Unable to compare, because country does NOT exits';
    }
    if(countryObject1!==countryObject2){
        return ' different country';
    }
    return ' same country';    
    
    
}
console.log(isSameCountry(student,employee2));
console.log(isSameCountry(employee,student));
