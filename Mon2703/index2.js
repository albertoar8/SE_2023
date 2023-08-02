const student={
    firstName:'Jason',
    lastName: 'lee',
    age:28,
    address:'221b baker street',
    city:'London',
    country:'England',
    showDetails(){
        return `${this.firstName} ${this.lastName} - ${this.address}`
    },
    drivingEligible(){
        return this.age >= 18;
    }

};

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



console.log(student.drivingEligible());
