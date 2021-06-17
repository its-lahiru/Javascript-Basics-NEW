// primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log('age:', age);
console.log('oldAge:', oldAge);



// shallow copy. only copy the properties in the first level
// reference types
const lahiru = {
    name: 'Lahiru',
    age: 25
}
const friend = lahiru;
// both variables refer to same object in heap. if one prperty changes both variables gets same changes
friend.age = 24;
// console.log('friend:', friend);
// console.log('lahiru:', lahiru);
// friend = {}; // does not work. constants are immutable



// copy objects 

// overall still shallow copy
const student = {
    name: 'Lahiru',
    age: 25,
    gender: 'male',
    hobbies: ['reading', 'video games', 'watch films'],
};
// first level properties only
const newStudent = Object.assign({}, student);
newStudent.name = 'Martin';
newStudent.hobbies.push('watch films');
newStudent.hobbies.push('swimming');
console.log('newStudent:', newStudent);
console.log('student:', student);