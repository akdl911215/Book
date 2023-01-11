const obj = {
    a: "a",
    number: {
        one: 1,
        two: 2,
    }
}
console.log('object : ', obj)

const copy = { ...obj }
console.log('copy : ', copy)

// copy.a = "b"
// console.log('copy2: ', copy)
// console.log('object2: ', obj)
//
// copy.number.one = 3;
// console.log('copy3: ', copy)
// console.log('object3: ', obj)

