const person = new Object();
console.log(typeof person);
// object

person.name = 'LEE Jung Hyun';
person.age = '32';
person.sayHello = function () {
    console.log(`Hi! My name is ${this.name}, age is ${this.age}`);
}
console.log(typeof person);
// object
console.log(person);
// { name: 'LEE Jung Hyun', age: '32', sayHello: [Function (anonymous)] }
person.sayHello();
// Hi! My name is LEE Jung Hyun, age is 32
