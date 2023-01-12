const obj = {};
const parent = { x: 1 };
console.log(obj);
// {}
console.log(obj.hasOwnProperty('__proto__'));
// false

obj.__proto__ = parent;
console.log(obj.x);
// 1
console.log(obj.hasOwnProperty('__proto__'));
// false

obj.__proto__;
console.log(obj.hasOwnProperty('__proto__'));
// false