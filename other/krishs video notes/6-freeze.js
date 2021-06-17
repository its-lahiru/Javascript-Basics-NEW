// freeze affect to whole object. because object has only first level property values
const person = {
    'name': '',
    'age': 25,
};
person.name = 'Lahiru';
Object.freeze(person);
// console.log('before:', person);

person.name = 'Sandaruwan';
// console.log('after:', person);





// object inside object
// object has multi level properties
// freeze method freeze only in first level peoperty values
// other sub level property values can be change.
const student = {
    name: 'Lahiru',
    contact: {
        mobile: '0771234567',
        email: 'lahiru@lahiru.com',
    }
}
console.log(student);
Object.freeze(student);

student.name = 'Sandaruwan';
student.contact.email = 'lahiru@gmail.com';
console.log(student);