//old

const employee = {
    fName: 'Nimal',
    age: 29,
    sayName: function() {
        var that = this;
        console.log("My name is " + this.fName);
        const details = function() {
            console.log("My name is " + that.fName + ", and my age is " + that.age);
        }
        details();
    }
}

employee.sayName();






// es6
const student = {
    fName: 'Lahiru',
    stuNumber: 12345,
    sayName: function() {
        console.log(`My name is ${this.fName}`);
        const details = () => {
            console.log(`My name is ${this.fName} and my student number is ${this.stuNumber}`)
        }
        details();
    }
}

student.sayName();