const print = {
    function1: function () {
        console.log('this is the function 1 ---', this);
    },
    function2: () => {
        console.log('this is the function 2 ---', this);
    }
}

// normal function represent the caller of the function.
// in here this keyword
print.function1();

// arrow function does not represent the caller. so this keyword does not
// refer to anything
print.function2();