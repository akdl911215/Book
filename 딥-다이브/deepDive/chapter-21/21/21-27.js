const num = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(num.toString(2), typeof num.toString(2)); // 1111 string

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(num.toString(8), typeof num.toString(8)); // 17 string

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(num.toString(16), typeof num.toString(16)); // f string

// 숫자값을 문자열로 변환한다.
console.log(num.toString(), typeof num.toString()); // 15 string