// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // Window

function square(number) {
    this.number = number;
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this); // Window
    return number * number;
}
square(2);

const person = {
    name: 'Lee',
    getName() {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this); // { name: 'Lee', getName: [Function: getName] }
        return this.name;
    }
};
console.log(person.getName()); // Lee

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서는 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this); // Person { name: 'Lee' }
};

const me = new Person('Lee');