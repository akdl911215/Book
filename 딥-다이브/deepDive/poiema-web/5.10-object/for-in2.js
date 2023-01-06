const arr = ['one', 'two', 'three'];

// 배열인 경우 index 는 인덱스를 반환.
for (const index in arr) {
    console.log(`${index} : ${arr[index]}`);
};
// 0 : one
// 1 : two
// 2 : three