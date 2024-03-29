// 문자열을 실수로 해석하여 반환한다.
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('10.00')); // 10

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40

// 첫 번째 문자열을 숫자로 변환할 수없다면 NaN
console.log(parseFloat('He was 40')); // NaN

// 앞뒤 공백은 무시된다.
console.log(parseFloat(' 60 ')); // 60