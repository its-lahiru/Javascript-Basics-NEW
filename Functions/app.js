// same variable can be used since local scope has been checked first in excution phase
// either global execution phase or functional execution phase

var x = 1;
print1();
print2();
console.log(x);

function print1() {
    var x = 10;
    console.log(x);
}

function print2() {
    var x = 100;
    console.log(x);
}