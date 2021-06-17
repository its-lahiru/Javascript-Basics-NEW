// we cannot reassigned literal const variables
// const name = 'Lahiru';
// name = 'Sandaruwan';


// const is only protecting literal values but not objects or arrays. 
// so we can change const arrays and objects.
const name = ['Lahiru', 'Sandaruwan'];
name.push('Mr.');

console.log(name);