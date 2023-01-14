const test = generator(10);
console.log(test.next().value);
// 10
console.log(test.next().value);
// 20

function* generator(i) {
    yield i;
    yield i + 10;
}

