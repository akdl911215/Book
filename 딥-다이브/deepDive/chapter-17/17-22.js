const str = new String(123);
console.log(str, typeof str);
// [String: '123'] object

const str2 = String(123);
console.log(str2, typeof str2);
// // [String: '123'] object

const num = new Number('123');
console.log(num, typeof num);
// [Number: 123] object

const num2 = Number('123');
console.log(num2, typeof num2);
// 123 number

const bool = new Boolean(true);
console.log(bool, typeof bool);
// [Boolean: true] object

const bool2 = new Boolean('true');
console.log(bool2, typeof bool2);
// [Boolean: true] object

const bool3 = Boolean('true');
console.log(bool3, typeof bool3);
// true boolean