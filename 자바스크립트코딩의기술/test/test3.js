const obj1 = { a: 1, b: 2}
let obj2 = {...obj1};

console.log(obj1)
console.log(obj2)
console.log('----')

obj2.a = 100;
console.log(obj1)
console.log(obj2)
console.log('----')
