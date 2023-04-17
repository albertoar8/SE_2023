const array=[100,6,2,8,1,2342,8,34,098,876,234];
const objectArray = [
    {value: 99, age: 70},
    {value: 34, age: 45},
    {value: 87, age: 20},
    {value: 4, age: 35},
    {value: 9999, age: 22},
    {value: 1, age: 1}
];
// sort array 
array.sort((a,b)=>{
    return a-b;
});
console.log(array);
// sort by age or by value
objectArray.sort((a,b)=>{
    //return a.age-b.age;
    return a.value-b.value;
})
console.log(objectArray);