function Person(name) {
    this.name = name;
}

// 프로포타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Shin');

// hasOwnProperty 는 Object.prototype 의 메서드다.
console.log(me.hasOwnProperty('name')); // true


console.log(Object.getPrototypeOf(me) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

console.log(Object.getPrototypeOf(me) === Object.prototype); // false


// hasOwnProperty 는 Object.prototype 의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
console.log(me.hasOwnProperty('name')); // true

console.log(me.hasOwnProperty('age')); // false

console.log(me.foo);


console.log(me.name); // Shin
console.log(me.age);  // undefined


me.hasOwnProperty('name');