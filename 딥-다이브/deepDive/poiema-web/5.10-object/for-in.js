const person = {
    'first-name': 'LEE',
    'last-name': 'JungHyun',
    gender: 'male',
    age: 40
};

// prop 에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (const prop in person) {
    console.log(`${prop} : ${person[prop]}`);
}

console.log('-----------------------------');
console.log(person["first-name"]);
console.log(person.gender);
console.log(person.age);

// first-name : LEE
// last-name : JungHyun
// gender : male
// age : 40
// -----------------------------
// LEE
// male
// 40