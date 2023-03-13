// 프로토타입이 null 인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
const obj = Object.create(null);
console.log(obj); // [Object: null prototype] {}
obj.a = 1;
console.log(obj); // [Object: null prototype] { a: 1 }

console.log(Object.getPrototypeOf(obj) === null); // true

// obj 는 Object.prototype 의 빌트인 메서드를 사용할 수 없다.
console.log(obj.hasOwnProperty('a'));
// TypeError: obj.hasOwnProperty is not a function
