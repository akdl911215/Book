// 함수는 다양한 방식으로 호출된다.
function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global 을 가리킨다.
foo(); // <ref *1> Object [global] {}

const obj = { foo }; // ES6 프로퍼티 축약표현
const obj2 = {
    foo
};
const obj3 = {
    foo: function() {
        console.log(this);
    }
};
console.log(obj);   // { foo: [Function: foo] }
console.log(obj2);  // { foo: [Function: foo] }
console.log(obj3);  // { foo: [Function: foo] }

// 메서드로서 호출
obj.foo();  // { foo: [Function: foo] }

// 생성자 함수로서 호출
const inst = new foo(); // foo {}