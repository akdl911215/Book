let obj = new Object();
console.log(obj); // {}

obj = Object();
console.log(obj); // {}

let func = new Function('x', 'return x ** x');
console.log(func); // [Function: anonymous]

func = Function('x', 'return x ** x');
console.log(func); // [Function: anonymous]