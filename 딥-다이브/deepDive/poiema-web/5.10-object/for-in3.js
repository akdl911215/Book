// 배열 요소들만을 순회하지 않는다.
const arr = ['one', 'two'];
arr.name = 'arr add';
console.log('arr : ', arr);
// arr :  [ 'one', 'two', name: 'arr add' ]

console.log('----------------------');

for (const index in arr) {
    console.log(`${index} : ${arr[index]}`);
};
// 0 : one
// 1 : two
// name : arr add