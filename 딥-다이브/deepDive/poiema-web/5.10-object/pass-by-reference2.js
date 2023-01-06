const foo = { var: 10 };
const bar = { var: 10 };

console.log(foo.var, bar.var);
// 10 10
console.log(foo === bar);
// false

const bar2 = bar;
console.log(bar.var, bar2.var);
// 10 10
console.log(bar === bar2);
// true

console.log(foo.var, bar2.var);
// 10 10
console.log(foo === bar2);
// false