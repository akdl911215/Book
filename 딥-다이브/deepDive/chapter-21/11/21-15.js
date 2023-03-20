// 표현식인 문
console.log(eval('1 + 2;')); // 3
// 표현식이 아닌 문
console.log(eval('var x = 5;')); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1})');
console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function () { return 1; })');
console.log(f()); // 1

// 인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행하고,
// 마지막 결과값을 반환한다.
const h = eval('1 + 2; 3 + 4;');
console.log(h); // 7