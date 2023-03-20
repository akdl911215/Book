const x = 1;

function foo() {
    'use strict';

    // strict mode 에서 eval 함수는 기존의 스코프를 수정하지 않고
    // eval 함수 자신의 자체적인 스코프를 생성한다.
    eval('var x = 2; console.log(x);');   // 2

    // let, const 키워드를 사용한 변수 선언문은 strict mode 가 적용된다.
    eval('let x = 3; console.log(x);');   // 3
    eval('const x = 4; console.log(x);'); // 4
    console.log(x); // 1
}

foo()
console.log(x); // 1