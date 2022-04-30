let n = 0;
let m = 100;

let min = Math.min(n, m);
let range = Math.abs(m - n);
let numberInRange = Math.floor((Math.random() * range + min) / 2);
let oddNumber = numberInRange * 2 + 1;
console.log(oddNumber);

