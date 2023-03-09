// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

// Person.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가된다.
console.log(me instanceof Person); // false

// Object.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가된다.
console.log(me instanceof Object); // true