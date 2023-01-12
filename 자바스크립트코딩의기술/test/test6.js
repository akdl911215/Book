const obj = {
    a: '1',
    b: '2',
}

const obj2 = obj;

const obj3 = {...obj};

console.log(obj === obj2)
console.log(obj === obj3)