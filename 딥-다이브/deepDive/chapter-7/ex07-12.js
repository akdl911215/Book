
// 동등 비교
console.log(5 == 5);    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
console.log(5 == '5');  // true
// 동등비교는 결과를 예측하기 어렵다.
console.log('0' == ''); // false
console.log(0 == '');   // true
console.log(0 == '0');  // true
console.log(false == 'false');  // false
console.log(false == '0'); // true
console.log(false == null); // false
console.log(false == undefined); // false


// 일치 비교
console.log(5 === 5);   // true
console.log(5 === '5'); // false
// Nan 은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN);   // false
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
console.log(Number.isNaN(NaN)) // true;
console.log(Number.isNaN(10)); // false
console.log(1 + undefined); // NaN
console.log(Number.isNaN(1 + undefined)); // true

console.log(0 === -0); // true
console.log(0 == -0);  // true



