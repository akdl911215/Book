const object = {
    a: "a",
    number: {
        one: 1,
        two: 2,
    }
}

console.log('object : ', object)

const copy = {...object}
console.log('copy : ', copy)

copy.number.one = 3;
console.log('copy2: ', copy)
console.log('object2: ', object)

console.log(object === copy)
console.log('-----------------')

console.log(object.number.one)
console.log(copy.number.one)

console.log(object.number.one === copy.number.one)