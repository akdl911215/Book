const person = { name: 'LEE' };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person));
// true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person));
// false