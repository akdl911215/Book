const person = { name: 'LEE' };

// person 객체는 동결(freeze)된 객체가 아니다.
console.log(Object.isFrozen(person));
// false
console.log(Object.getOwnPropertyDescriptors(person));
// writable: true, configurable: true

// person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);

// person 겍체는 동결(freeze)된 객체다.
console.log(Object.isSealed(person));
// true
console.log(Object.getOwnPropertyDescriptors(person));
// writable: false, configurable: false > true 에서 false 로 변경된다.