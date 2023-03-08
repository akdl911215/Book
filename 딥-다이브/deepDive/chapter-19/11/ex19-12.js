// 화살표 함수는 non-constructor 이다.
const Person = name => this.name = name;

// non-constructor 는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));
// false

// non-constructor 는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);
// undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor 이다.
const obj = {
    foo() {}
};

// non-constructor 는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype'));
// false

// non-constructor 는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype);
// undefined

const obj2 = {
    foo: function () {}
}

console.log(obj2.foo.hasOwnProperty('prototype'));
// true
console.log(obj2.foo.prototype);
// {}