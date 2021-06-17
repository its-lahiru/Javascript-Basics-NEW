// old
function saymMyName() {
    console.log("Lahiru");
}

var myName = function sayMyLastName() {
    console.log("Sandaruwan");
}

saymMyName();
myName();





// es6
const sayMyCity = () => {
    console.log('Rathnapura');
}
sayMyCity();

const sayMyVillage = (name, village) => {
    console.log(`My name is ${name} and my village is ${village}`);
}
sayMyVillage('Lahiru', 'Atalla');

// if function only has one statement we can remove curly braces
const sayMyCity1 = () => console.log('Rathnapura');
sayMyCity1();