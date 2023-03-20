// 숫자
console.log(isNaN(NaN));                // true
console.log(isNaN(10));         // false

// 문자열
console.log(isNaN('blabla'));   // true: 'blabla' > NaN
console.log(isNaN('10'));       // false: '10' > 10
console.log(isNaN('10.12'));    // false: '10.12' > 10.12
console.log(isNaN(''));         // '' > 0
console.log(isNaN(' '));        // ' ' > 0

// 불리언
console.log(isNaN(true));       // false: true > 1
console.log(isNaN(false));      // false: false > 0

// undefined
console.log(isNaN(undefined));  // true: undefined > NaN
console.log(isNaN(null));       // false: null > 0

// 객체
console.log(isNaN({}));         // true: {} > NaN

// date
console.log(isNaN(new Date()));         // false: new Date() > Number
console.log(isNaN(new Date().toDateString())); // true: String > NaN