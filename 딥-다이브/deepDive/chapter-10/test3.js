class Oop{}

const test = new Oop();

const test2 = new Object();

console.log(typeof test2)

const test3 = {
    name: 'LEE',
    age: 30
}
console.log(typeof test3)

const test4 = new Object();
test4.name = 'LEE'
test4['age'] = 30

const test5 = new Object({
    name: 'LEE',
    age: 30
})

function a(name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name}, ${this.age}`)
}
const b = new a('정현', 30)
console.log(b)
const c = new a('아름', 31)
console.log(c)


const person = {
    name: 'LEE',
    say() {
        console.log(`hey! ${this.name}`)
    }
}
person.say()
console.log()
const age = 30;
const person2 = {
    name,
    age,
}

const obj10 = {
    var: '',
    const: '',
    let: '',
    class: '',
    '': '',
    "": ""
}

const obj11 = {
    a: 10,
    a: 20
}