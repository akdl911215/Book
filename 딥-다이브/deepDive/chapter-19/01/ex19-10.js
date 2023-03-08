const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
console.log(Object.getPrototypeOf(obj)); // [Object: null prototype] {}
console.log(obj.x); //undefined

// obj 객체의 프로토타입을 교체
console.log(Object.setPrototypeOf(obj, parent)); // {}}
console.log(obj.x); // 1

const obj2 = {};
obj2.__proto__ = parent;
console.log(obj2.x);
// 1