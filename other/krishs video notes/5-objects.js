// already initialized
let SQRT2 = Math.SQRT2;
const employee = {
    name: 'Lahiru',
    weight: 50,
    height: 175,
    // since we already initialize SQRT2 using outside module value field is not needed
    SQRT2
}
// console.log(employee.SQRT2);
// console.log(employee);



// dynamic properties
let status = 'employee_status';
// let status = 'employee status';
const employee2 = {
    name: 'Lahiru',
    height: 175,
    weight: 50,
    [status]: "active", //dynamic property
}
console.log(employee2);