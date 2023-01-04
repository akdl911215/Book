const emptyObject = {};
console.log(typeof emptyObject);
// object

const person = {
    name: 'LEE Jung Hyun',
    'gender': 'male',
    sayHello: function () {
        console.log(`Hi! My name is ${this.name}`);
    }
};

console.log(typeof person);
// object
console.log(person);
// {
//     name: 'LEE Jung Hyun',
//     gender: 'male',
//     sayHello: [Function: sayHello]
// }
person.sayHello();
// Hi! My name is LEE Jung Hyun

console.log("-------------------------------");

const person2 = {
    name: 'LEE Jung Hyun',
    'gender': 'male',
    sayHello: () => {
        console.log(`Hi! My name is ${this.name}`);
    }
};
person2.sayHello();
// Hi! My name is undefined

// 화살표 함수를 사용하면 현재 객체에 대해 새로운 this 문맥 바인딩을 만들지 않는다.
// 정리하면 화살표 함수는 이미 문맥이 있고 다른 함수 내부에서 사용하려고 할 때 유용하다.
// 그렇지만 새로운 this 바인딩을 설정할 필요가 있을때는 문제가 된다.