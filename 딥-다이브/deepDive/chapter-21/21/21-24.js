// 문자열을 정수로 해석하여 반환한다.
console.log(parseInt('10')); // 10
console.log(parseInt('10.123')); // 10

// 숫자를 넣어도 정수로 반환한다.
console.log(parseInt(10)); // 10
console.log(parseInt(10.123)); // 10

// 두 번째 인수는 진법을 나타내는 기수(2~36)
// '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다. (default)
console.log(parseInt('10')); // 10
// '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt('10', 2)); // 2
// '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt('10', 8)); // 8
// '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt('10', 16)); // 16

// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
console.log(parseInt('0xf')); // 15
// 위 코드와 같다
console.log(parseInt('f', 16)); // 15