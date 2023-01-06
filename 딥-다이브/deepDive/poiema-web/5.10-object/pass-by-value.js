let a = 1;
const b = a;

console.log(a, b);
// 1 1
console.log(a === b);
// true

a = 10;
console.log(a, b);
console.log(a === b);