let first = 13.123456789;
let second = 2.123;
let precision = 5;

let firstNormalized = Math.floor(first % 1 * Math.pow(10, precision));
console.log(firstNormalized);
let secondNormalized = Math.floor(second % 1 * Math.pow(10, precision));
console.log(secondNormalized);

console.log(firstNormalized > secondNormalized);
console.log(firstNormalized < secondNormalized);
console.log(firstNormalized >= secondNormalized);
console.log(firstNormalized <= secondNormalized);
console.log(firstNormalized === secondNormalized);
console.log(firstNormalized !== secondNormalized);




