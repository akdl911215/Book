const obj = {};

obj.test = 'test1';
obj['test2'] = 'test2';

const key = 'test3';
obj[key] = 'test4';

let key2;
obj[key2 = 'test5'] = 'test5'

console.log(obj)

const obj2 = {
    '': '',
    "": "",
}
console.log(obj2)
const obj3 = {
    "":""
}
console.log(obj3)

const obj4 = {
    var: '',
    let: '',
    const: '',
    function: '',
    class: '',
} // 사용되지만 지양
console.log(obj4)

const obj5 = {
    name: 'LEE',
    name: "KIM"
}
console.log(obj5)

const obj6 = {}
for (let i = 0; i < obj6.length; ++i) {
    console.log('check')
}