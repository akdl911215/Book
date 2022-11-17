const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
// 'stop'
console.log(remaining);
// ['collaborate', 'listen'];
console.log(queue);
// ['stop', 'collaborate', 'listen'];

// const [...beginning, last] = queue;
// 문법 오류 : 나머지 요소는 마지막 요소가 되어야 한다.