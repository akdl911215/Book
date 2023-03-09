function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
console.log(me);      // Person { name: 'Lee' }
console.log(me.name); // Lee

// 프로토타입으로 교체할 객체
const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

// (1) me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;

// 프로토타입을 교체하면 constructor 프로토퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false
console.log(me.constructor === Object); // true
console.log(me.name);                   // Lee
me.sayHello();                          // Hi! My name is Lee

me.name = 'Kim'
console.log(me.constructor === Object); // true
console.log(me.name);                   // Kim
me.sayHello();                          // Hi! My name is Kim