

// 심벌 값 생성
const key = Symbol('key2');
console.log(typeof key);    // symbol
const foo = Symbol('foo2');
console.log(foo);           // Symbol(foo2)
console.log(typeof foo);    // symbol

// 객체 생성
let obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj);           // { [Symbol(key2)]: 'value' }
console.log(obj[key]);      // value

obj[foo] = 'value2';
console.log(obj);           // console.log(obj);
console.log(obj[foo]);      // value2



