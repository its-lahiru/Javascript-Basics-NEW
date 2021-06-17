// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

// A Map's keys can be any value (including functions, objects, or any primitive).

// A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.



// Creates a new Map object.
let age = new Map();
// set => sets the value for the key in the Map object. Returns the Map object.
age.set('Lahiru', 25);
age.set('Shehani', 26);
age.set('Martin', 21);
age.set('Kane', 25);
// has => Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
age.has('Manisha');
// get => returns the value associated to the key, or undefined if there is none.
age.get('Shehani');
// size => Returns the number of key/value pairs in the Map object.
console.log(age.size);
// delete => Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. 
// Map.prototype.has(key) will return false afterwards.
age.delete('Kane');
console.log(age.size);
// clear => removes all key-value pairs from the Map object.
// age.clear();
// console.log(age.size);



// iteration methods
// keys() => returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log('keys =', age.keys());
// values => returns a new Iterator object that contains the values for each element in the Map object in insertion order.
console.log('values =', age.values());
// entries() => Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
console.log('entries =', age.entries());




// map iteration
// Maps can be iterated using a for..of loop
console.log('==================== key,value iteration');
for (let [key, value] of age) {
    console.log(`${key} -> ${value}`);
}
console.log('==================== key iteration');
for (let key of age.keys()) {
    console.log('key ->', key);
}
console.log('==================== value iteration');
for (let value of age.values()) {
    console.log('value ->', value);
}
console.log('==================== key,value iteration');
for (let [key, value] of age.entries()) {
    console.log(`${key} -> ${value}`);
}
console.log('==================== iteration with forEach loop');
// iteration with forEach loop
age.forEach(function (key, value) {
    console.log(value + ' -> ' + key);
});




console.log('==================== Relation with Array objects');



// Relation with Array objects
let kvArray = [['key1', 'value1'], ['key2', 'value2']];
// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray);
console.log(myMap.get('key1')); // returns "value1"
// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray
// A succinct way to do the same, using the spread syntax
console.log([...myMap]);
// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]



console.log('==================== Cloning Maps');




// Cloning Maps
// Just like Arrays, Maps can be cloned
let original = new Map([
    [1, 'one']
]);
// Note: Keep in mind that the data itself is not cloned.
let clone = new Map(original);
console.log(clone.get(1)); // one
console.log(clone === original); // false (useful for shallow comparison)

console.log('==================== Merging Maps');




// Merging Maps
// Maps can be merged, maintaining key uniqueness
let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let second = new Map([
    [1, 'uno'],
    [2, 'dos']
]);
// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
let merged = new Map([...first, ...second]);
console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

console.log('==================== Maps can be merged with Arrays, too');




// Maps can be merged with Arrays, too
let first2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let second2 = new Map([
    [1, 'uno'],
    [2, 'dos']
]);

// Merge maps with an array. The last repeated key wins.
let merged2 = new Map([...first2, ...second2, [1, 'eins']]);

console.log(merged2.get(1)); // eins
console.log(merged2.get(2)); // dos
console.log(merged2.get(3)); // three

console.log('====================');