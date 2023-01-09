// for-in 단점 극복
const arr = [1, 2, 3];
arr.name = 'my arr';
console.log('arr : ', arr);
// arr :  [ 1, 2, 3, name: 'my arr' ]

for (const value of arr) {
    console.log(value);
};
// 1
// 2
// 3

console.log('---------------------');

for (const [index, value] of arr.entries()) {
    console.log(`${index} : ${value}`);
};
// 0 : 1
// 1 : 2
// 2 : 3

// for-in 문은 객체의 프로퍼티를 순회하기 위해 사용되고,
// for-of 문은 배열의 요소를 순회하기 위해 사용한다.