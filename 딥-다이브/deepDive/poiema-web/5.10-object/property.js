const person = {
    'first-name': 'LEE',
    "last-name": 'JungHyun',
    gender: 'male',
    age: 20,
    1: 10,
    function: 1
};

console.log(person)
// {
//   '1': 10,
//   'first-name': 'LEE',
//   'last-name': 'JungHyun',
//   gender: 'male',
//   age: 20,
//   function: 1
// }

// const person2 = {
//     first-name: 'LEE'
// };
// console.log(person2)
// SyntaxError: Unexpected token '-'

// const person3 = {
//     [first-name]: 'LEE'
// }
// console.log(person3);
// ReferenceError: first is not defined

const person4 = {
    ['first-name']: 'LEE',
    ["last-name"]: 'JungHyun'
};
console.log(person4)