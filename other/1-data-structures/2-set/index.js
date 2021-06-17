// can not retrieve values from a set(like array) because we use it to store uniques values

console.log(new Set('Lahiru'));

// country set
let countriesSet = new Set(['USA', 'UK', 'USA', 'Canada', 'China']);
console.log(countriesSet);

// size of set
console.log(countriesSet.size);
// console.log(new Set(['USA', 'UK', 'USA', 'Canada', 'China']).size);

// add values to set
countriesSet.add('SL');
countriesSet.add('SL');
console.log(countriesSet);

// check for values
console.log(countriesSet.has('SL'));

// delete
countriesSet.delete('SL');
console.log(countriesSet);
console.log(countriesSet.has('SL'));

// clear set
// countriesSet.clear();
// console.log(countriesSet);

// looping a set
for (const country of countriesSet) console.log(country);

// use case
const languages = ['java', 'javascript', 'javascript', 'php', 'html', 'html'];
// get uniques values from an array and convert set back to an array
const uniquesItemsArray = [...new Set(languages)];
console.log(uniquesItemsArray);