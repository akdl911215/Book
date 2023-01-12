// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('LEE');

// 결국 Person.prototype 과 me.__proto__ 는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);
// true