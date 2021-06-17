// old
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// }

// var lahiru = new Person("Lahiru", 25, "Male");

// console.log(lahiru);
// lahiru.sayName();

// function nimal(occupation, hobby, name, age, gender){
//     Person.call(this, name, age, gender);
//     this.occupation = occupation;
//     this.hobby = hobby;
// }

// nimal.prototype = Object.create(Person.prototype);

// const person = new nimal("Dev", "Swimming", "Nimal", 25, "Male");
// person.sayName();






// es6
class Person {
    constructor(name, age, gender, hobbies) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
    }

    sayName() {
        console.log(this.name);
    }

    sayHobbies() {
        console.log(this.hobbies);
    }
}

// const lahiru = new Person("Lahiru", 25, "Male", ["Play games", "watch TV"]);
// console.log(lahiru);
// lahiru.sayName();
// lahiru.sayHobbies();



// extends
class Result extends Person {
    constructor(name, age, gender, hobbies, subName, grade) {
        super(name, age, gender, hobbies);
        this.subName = subName;
        this.grade = grade;
    }
}

const result = new Result("Lahiru", 25, "Male", ["Reading", "Eating"], "Maths", "A+");
console.log(result);

result.sayHobbies();