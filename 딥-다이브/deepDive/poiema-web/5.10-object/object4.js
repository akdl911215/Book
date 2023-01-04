function Person(name, gender, age) {
    const married = true;           // private
    this.name = name;               // public
    this.gender = gender;           // public
    this.age = age;                 // public
    this.sayHello = function () {   // public
        console.log(`Hi! My name is ${this.name}`);
    }
}

const person = new Person('LEE Jung Hyun', 'female', 45);

console.log(person);
// Person {
//   name: 'LEE Jung Hyun',
//   gender: 'female',
//   age: 45,
//   sayHello: [Function (anonymous)]
// }
console.log(person.name);
// LEE Jung Hyun
console.log(person.age);
// 45
console.log(person.married);
// undefined
person.sayHello();
// Hi! My name is LEE Jung Hyun