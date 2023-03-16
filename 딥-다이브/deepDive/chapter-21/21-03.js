// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);
console.log(numObj); // [Number: 1.5]

// toFixed 는 Number.prototype 의 프로토타입 메서드다.
// Number.prototype.toFixed 는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); // 2

// isInteger 는 Number 의 정적 메서드다.
// Number.isInteger 는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean 으로 반환한다.
console.log(Number.isInteger(1.5)); // false