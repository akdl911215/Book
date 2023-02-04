const arr = [];

arr.name = 'aaaa';
console.log(arr)

arr.push('a')
console.log(arr)
arr.push('b')
console.log(arr)

arr.pop()
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)
delete arr.name
console.log(arr)

const arr2 = [];
arr2[10] = 10;
console.log(arr2)