// ========================= importing from same module
// const PI = Math.PI;
// const SQRT2 = Math.SQRT2;

// values from same module can be initialize like this
// variables will be define and assign values behind the seens
const { PI, SQRT2 } = Math;
// console.log(SQRT2);





//============================== with functions
// only pass relevent properties from a object to a function
const person = {
    fName: 'Lahiru',
    lName: 'Sandaruwan',
    age: 25,
    gender: '',
    homtown: 'ratnapura',
}
const fullName = ({ fName, lName }) => {
    return `${fName} ${lName}`;
}
// console.log(fullName(person));

// assign default values if a property is empty
const fullNameAndGender = ({ fName, lName }, { gender = 'unspecified' } = {}) => {
    return `${fName} ${lName}'s gender is ${gender}`;
}
// console.log(fullNameAndGender(person, { gender: 'Male' }));








// ================================ with require
// normal file system method
var fs = require('fs');

fs.writeFile('9-sample-1.txt', 'Hello world!', function (err) {
    if (err)
        throw err;
    // console.log('saved!');
});


// with destruct
const { writeFile } = require('fs');
writeFile('9-sample-2.txt', 'Hello world!', function (err) {
    if (err)
        throw err;
    // console.log('saved!');
})







//================== array
// skips the empty property and matching value;
const [a, b, c, , e] = [1, 2, 3, 4, 5];
// console.log('a:', a);
// console.log('e:', e);
const [value, ...otherValues] = [1, 2, 3, 4, 5];
// console.log('value: ', value);
// console.log('otherValues:', otherValues);


//=== copy array
let newArray = [...otherValues];
// console.log('new array: ', newArray);

//=== merge array
// take newArray multiple by 2 and merge. just for fun (:D)
let newArray2 = [...otherValues, ...newArray.map((value) => value * 2)];
// console.log(newArray2);








//=================with objects
const data = {
    name: 'Lahiru',
    age: 25,
    hometown: 'ratnapura',
    vehicle: 'Ford',
    hobby: 'reading'
}
// console.log('data:', data);

// destruction
let { vehicle, hobby, ...personData } = data;
// console.log('personData:', personData);
// console.log('vehicle:', vehicle);
// console.log('hobby:', hobby);


//===== copy object
let student = { ...personData };
console.log('student:', student);


//===== merge object
let employee = { ...personData, vehicle, hobby };
console.log('employee:', employee);