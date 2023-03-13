const obj = { a: 1 };

console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('b')); // false

console.log(obj.propertyIsEnumerable('a')); // true
console.log(obj.propertyIsEnumerable('b')); // false
