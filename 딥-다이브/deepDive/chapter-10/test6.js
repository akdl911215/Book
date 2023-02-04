function aaa(name, age) {
    this.name = name;
    this.age = age;

    console.log(`${this.name}, ${this.age}`)
}
const b = new aaa('정현', 30)
console.log(b)
const c = new aaa('아름', 31)
console.log(c)

