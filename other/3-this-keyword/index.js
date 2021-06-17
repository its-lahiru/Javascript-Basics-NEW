// console.log(this); // window object

// regular function
const calcAge = function (birthYear) {
    // console.log(2021 - birthYear);
    // console.log(this); // undefined
};
calcAge(1995);

// arrow function
const calcAgeArrow = birthYear => {
    // console.log(2021 - birthYear);
    // console.log(this); // point to the parent scope which in this case window object
};
calcAgeArrow(1995);


// function properties of objects
const lahiru = {
    year: 1995,
    calcAge: function () {
        console.log(this); // point to lahiru object which is caller of the calcAge method
        console.log(2021 - this.year); // this refers to lahiru object
    }
}

const matilda = {
    year: 1970
}

// function borrowing
matilda.calcAge = lahiru.calcAge; // only copy not calling. for calling method () should be used.
// this refferse to the caller of the function
matilda.calcAge();
lahiru.calcAge();



// copy function to a variable
const f = lahiru.calcAge;
f();