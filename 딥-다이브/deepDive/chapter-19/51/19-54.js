// 프로토타입이 null 인 객체를 생성한다.
const obj = Object.create(null);
console.log(obj); // [Object: null prototype] {}
obj.a = 1;
console.log(obj); // [Object: null prototype] { a: 1 }

// Object.prototype 의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true