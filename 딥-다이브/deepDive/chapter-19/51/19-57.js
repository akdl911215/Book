// Object.create 는 정적 메서드다.
const obj = Object.create({ name: 'Lee' });

// Object.prototype.hasOwnProperty 는 프로토타입 메서드다.
console.log(obj.hasOwnProperty('name')); // false