let x = 1;
var y = 2;

if (true) {
    let x = 10;
    var y = 20;
    console.log(x); // 10
    console.log(y); // 20
}

console.log(x); // 1
console.log(y); // 20