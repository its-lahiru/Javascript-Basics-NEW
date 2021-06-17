var a = 10;
var b = 20;

function add(value1, value2) {
    return value1 + value2;
}

function fun1(){
    fun1();
}

var cal1 = add(a, b);
var cal2 = add(5, 15);
fun1();
console.log(cal1);
console.log(cal2);