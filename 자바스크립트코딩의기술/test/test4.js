// let a = 1;
// let b = a;
// let c = 1;
//
// console.log(a === b)
// console.log(c === a)

// let a = {
//     a: 1
// }
// let b = a;
// let c = {
//     a: 1
// }
//
// console.log(a === b)
// console.log(c === a)

let a = {
    a: 1
}
let b = {...a}
let c = {
    a: 1
}
console.log(a === b)
console.log(c === a)