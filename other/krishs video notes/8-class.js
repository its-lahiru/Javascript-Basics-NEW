class Person {
    constructor(name) {
        this.name = name;
    }
    print = () => console.log(`${this.name} is a human.`);
}

class Student extends Person {
    constructor(name, gender) {
        super(name);
        this.gender = gender;
    }
    print = () => console.log(`${this.name} is a ${this.gender} student.`);
}

const person = new Person('Mark');
const student = new Student('Shawn', 'Male');

person.print();
student.print();

// we can override function at the run time as showing here.
student.print = () => console.log('student print function is overriden');
student.print();