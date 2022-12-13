const add = a => b => c => a + b + c;

console.log(add(1)(2)(3))

const add2 = a => b => c => d => a + b + c + d;

console.log(add2(1)(2)(3)(4))

const add3 = a => b => c => d => e => f => g => a + b + c + d + e + f + g;

console.log(add3(1)(1)(1)(1)(1)(1)(1))