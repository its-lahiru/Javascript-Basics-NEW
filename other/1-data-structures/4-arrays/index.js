let countries = ['Japan', 'USA', 'Germany', 'Brazil', 'China'];
console.log(countries);
// constructure function
let numbers = new Array(1, 2, 4, 5);
// console.log(numbers);


// loop
countries.forEach(function (item, index) {
    // console.log(item, index);
});


// static methods

// Array.from()
// Creates a new Array instance from an array-like or iterable object.
let newNumbers = Array.from(numbers);
// console.log(newNumbers);

// Array.isArray()
// Returns true if the argument is an array, or false otherwise.
// console.log(Array.isArray(newNumbers));

// Array.of()
// Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// console.log(Array.of(newNumbers));




// instance methods

// length
// console.log(countries.length);

// access array using index
// console.log(countries[0]);
// console.log(countries[countries.length - 1]);

//Add an item to the end of an Array
countries.push('Russia');
// console.log(countries);

//Remove an item to the end of an Array
countries.pop();
// console.log(countries);

// Remove an item to the beginning of an Array
countries.shift();
console.log(countries);

// Add an item to the beginning of an Array
countries.unshift('Japan');
countries.unshift('Russia');
console.log(countries);

// return index of an item in the Array
const idxUk = countries.indexOf('UK')
const idxUSA = countries.indexOf('USA')
// console.log(idxUk);
// console.log(idxUSA);


// Remove an item by index position
// console.log(countries);
// returns removed item
let removedItem = countries.splice(4, 1);
// console.log(removedItems);

// Remove items from an index position
// console.log(countries);
// returns removed items
let removedItems = countries.splice(1, 2);
// console.log(removedItems);

// Copy an Array (shallow copy)
let shallowCopy = countries.slice();
// console.log(countries);
// console.log(shallowCopy);


// concat 
// Returns a new array that is this array joined with other array(s) and/or value(s).
// This method does not change the existing arrays, but instead returns a new array.
const countries1 = countries.concat('Potugal');
// console.log(countries1);
// console.log(countries)


// entries() 
// Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const iterator1 = countries.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);


// every()
// Returns true if every element in this array satisfies the testing function.
const isBelowThreshold = currentValue => currentValue < 40;
const array11 = [1, 30, 39, 29, 10, 13];
// console.log(array11.every(isBelowThreshold));
// expected output: true

// some()
// Returns true if at least one element in this array satisfies the provided testing function.
const isSomeAboveThreshold = currentValue => currentValue > 20;
console.log(array11.some(isSomeAboveThreshold));
// expected output: true


// filter()
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]






// find()
// returns the value of the first element in the provided array that satisfies the provided testing function.
// otherwise undefined is returned.
const arrayy = [5, 12, 8, 130, 44];
const found = arrayy.find(element => element > 10);
// console.log(found);
// expected output: 12


// findIndex()
// Returns the found index in the array, if an element in the array satisfies the testing function, 
// or - 1 if not found.
const isLargeNumber = (element) => element > 13;
// console.log(arrayy.findIndex(isLargeNumber));
// expected output: 3


// includes()
// Determines whether the array contains a value, returning true or false as appropriate.
// console.log(arrayy.includes(50));
// console.log(arrayy.includes(5));



// join()
// Joins all elements of an array into a string.
const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// console.log(elements.join(''));
// console.log(elements.join('-'));
// spread operator
// console.log(...elements);



// map()
// Returns a new array containing the results of calling a function on every element in this array.
const elements1 = elements.map(element => element.toUpperCase());
console.log(elements1);


// reducer()
// Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
const arrayy1 = [1, 2, 3, 4];
const reducer = (a, b) => a + b;
console.log(arrayy1.reduce(reducer));
console.log(arrayy1.reduce(reducer, 5));


// reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)
const arraay1 = ['one', 'two', 'three'];
console.log('arraay1=', arraay1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = arraay1.reverse();
console.log('reversed=', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('arraay1:', arraay1);
// expected output: "arraay1:" Array ["three", "two", "one"]



// sort
// Sorts the elements of an array in place and returns the array.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const arrrray1 = [1, 30, 4, 21, 100000];
arrrray1.sort();
console.log(arrrray1);
// expected output: Array [1, 100000, 21, 30, 4]


// toString()
// The toString() method returns a string representing the specified array and its elements.
const array2 = [1, 2, 'a', '1a'];
console.log(array2.toString());
console.log([...array2]);
// expected output: "1,2,a,1a"



// keys()
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const arr1 = ['a', 'b', 'c'];
const iterator = arr1.keys();
for (const key of iterator) {
    console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2


// values()
// The values() method returns a new Array Iterator object that contains the values for each index in the array.
const iterator = arr1.values();
for (const value of iterator) {
    console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"























