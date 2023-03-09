// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
console.log(me instanceof Person); // true
console.log(me instanceof Object); // true

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);
console.log(me instanceof Person); // false
console.log(me instanceof Object); // true
console.log(Person instanceof Object); // true

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);   // false
console.log(parent.constructor === Person); // false

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

// Person.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가된다.
console.log(me instanceof Person); // true

// Object.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가된다.
console.log(me instanceof Object); // true