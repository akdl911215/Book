// 함수 객체의 prototype 은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () {}, 'prototype');
// { value: {}, writable: true, enumerable: false, configurable: false }

// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }
