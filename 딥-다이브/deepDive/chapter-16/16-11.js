const person = { name: 'LEE' };

// person 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person));
// false
console.log(Object.getOwnPropertyDescriptors(person));
// configurable: true

// person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 겍체는 밀봉(seal)된 객체다.
console.log(Object.isSealed(person));
// true
console.log(Object.getOwnPropertyDescriptors(person));
// configurable: false > true 에서 false 로 변경된다.