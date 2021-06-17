function area1(x, y) {
    return x * y;
}

const area2 = (x, y) => {
    return x * y;
}

const area3 = (x, y) => x * y;

const area4 = x => x * x;

const area5 = x => console.log('area5 =', x * x);

// we can user either ',' or '+' to conacate strings
console.log('area1 =', area1(1, 2));
console.log('area2 =', area2(2, 3));
console.log('area3 =', area3(3, 4));
console.log('area4 =', area4(5));
area5(6);