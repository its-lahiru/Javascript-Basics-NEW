// hoisting works
console.log(a);
var a = 10;

// hoisting works
var ans1 = add(10, 1);
function add(x, y) {
    return x + y;
}

// hoisting not work
// var ans2 = add2(10, 1, 1);
var add2 = function(x, y, z) {
    return x + y + z;
}
var ans2 = add2(10, 1, 1);

// hoisting not work
// var ans3 = add3(2, 3);
var add3 = (x, y) => x * y;
var ans3 = add3(2, 3);