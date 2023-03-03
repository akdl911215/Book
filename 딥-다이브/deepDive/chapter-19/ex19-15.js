// obj 객체를 생성한 생성자 함수는 Object 다.
const obj = new Object();
console.log(obj.constructor === Object); // ture

// add 함수 객체를 생성한 생성자 함수는 Function 이다.
const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function); // true

// 생성자 함수
function Person (name) {
    this.name = name;
}

// me 객체를 생성한 생성자 함수는 Person 이다.
const me = new Person('Lee');
console.log(me.constructor === Person); // true