// 생성자 함수
function Person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hi! My name is ${this.name}, gender is ${this.gender}, age is ${this.age}`);
    };
};

// 인스턴스의 생성
const person1 = new Person('Lee', 'male', 30);
const person2 = new Person('Kim', 'female', 20);

console.log('typeof person1 : ', typeof person1);
// typeof person1 :  object
console.log('typeof person2 : ', typeof person2);
// typeof person2 :  object

console.log('person1 : ', person1);
// person1 :  Person {
//   name: 'Lee',
//   gender: 'male',
//   age: 30,
//   sayHello: [Function (anonymous)]
// }
console.log('person2 : ', person2);
// person2 :  Person {
//   name: 'Kim',
//   gender: 'female',
//   age: 20,
//   sayHello: [Function (anonymous)]
// }

person1.sayHello();
// Hi! My name is Lee, gender is male, age is 30
person2.sayHello();
// Hi! My name is Kim, gender is female, age is 20