

let x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x, typeof +x);    // 1 number
// 부수 효과는 없다.
console.log(x, typeof x);     // 1 string

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x);    // 1
// 부수 효과는 없다.
console.log(x);     // true

// 불리언 값을 숫자로 타입 변환된다.
x = false;
console.log(+x);    // 1
// 부수 효과는 없다.
console.log(x);     // false

x = 'Hello';
console.log(+x);     // NaN
console.log(x + 1);  // Hello1
// 부수 효과는 없다.
console.log(x);      // Hello

// 부호를 반전한다.
console.log(-(-10)); // 10

// 문자열을 숫자로 타입 변환한다.
console.log(-'10', typeof -'10'); // -10 number

// 불리언 값을 숫자로 타입 변환한다.
console.log(-true); // -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
console.log(-'Hello'); // NaN


