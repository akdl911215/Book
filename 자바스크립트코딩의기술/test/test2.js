const obj1 = { a: 1, b: 2}
const obj2 = obj1;

console.log(obj1 === obj2)


const obj3 = { c:3, d:4 }
const obj4 = { ...obj3 }

console.log(obj3 === obj4)