// old





// es6

const shoppingCart = ['Milk', 'Bread', 'Coco oil', 'Rice'];

// foreach loop
shoppingCart.forEach((product, index) => {
    // console.log(`${index}. ${product} %`);
})


// Map
// make a copy of an array and manipulate it as the way we want
// one line statement returns automatically, implicitely event without return keyword
const newList = shoppingCart.map(item => item + " new");
// console.log(newList);


// filter
// filter out from array 
const filterList1 = shoppingCart.filter(item => {
    return item == 'Milk';
});
const filterList2 = shoppingCart.filter(item => item !== 'Milk');

console.log(filterList1);
console.log(filterList2);

