// 2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
console.log(parseInt('0b10')); // 0

// 8진수 리터럴(ES6에서 도입. 0o시작)은 제대로  해석하지 못한다. 0 이후가 무시된다.
console.log(parseInt('0o10')); // 0

// 'A'는 10진수로 해석할 수 없다.
console.log(parseInt('A0')); // NaN

// '2'는 2진수로 해석할 수 없다.
console.log(parseInt('20', 2)); // NaN

// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
console.log(parseInt('1A0')); // 1

// 2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
console.log(parseInt('102', 2)); // 2

// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
console.log(parseInt('58', 8)); // 5

// 16진수로 해석할 수 없는 '16' 이후의 문자는 모두 무시된다.
console.log(parseInt('FG', 16)); // 15

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
console.log(parseInt('34 45 66')); // 34
console.log(parseInt('40 years')); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseInt('He was 40')); // NaN

// 앞뒤 공백은 무시된다.
console.log(parseInt(' 60 ')); // 60