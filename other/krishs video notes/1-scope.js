// var is globally accessible keyword
for (var i = 0; i < 5; i++) {
    var k1 = i;
    // console.log(`>>>> ${i}`);
}
// console.log(`last value = ${i}`);
// console.log(`innder value(k1) = ${k1}`);


// let is only accessible it's local scope or block
for (var i = 0; i < 5; i++) {
    let k2 = i;
    // console.log(`>>>> ${i}`);
}
// console.log(`last value = ${i}`);
// gives k2 is not defined error
// console.log(`innder value(k2) = ${k2}`);



// const is only accessible it's local scope or block
// const means constant. they can not be reassign. before use const they should be initialized
// const k3 = 0;
for (var i = 0; i < 5; i++) {
    // const k3 = i;
    // const can not reassigned
    // k3 = i;
    // console.log(`>>>> ${i}`);
}
// console.log(`last value = ${i}`);
// gives k2 is not defined error
// console.log(`innder value(k2) = ${k2}`);




// this works
let k4;
for (var i = 0; i < 5; i++) {
    k4 = i;
    console.log(`>>>> ${i}`);
}
console.log(`last value = ${i}`);
console.log(`innder value(k4) = ${k4}`);