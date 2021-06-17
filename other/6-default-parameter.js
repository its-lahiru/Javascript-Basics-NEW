//old
function multiply(x, y) {
    var a = x || 1;
    var b = y || 4;
    console.log(a * b);
}

multiply(2, 3);





// es6
const addition = (x = 2, y = 5) => {
    console.log(x + y);
}

addition(1, 1);