const parent = {};
const child = {};

// child 의 프로토타입을 parent 로 설정
child.__proto__ = parent;

// parent 프로토타입을 child 로 설정
parent.__proto__ = child;
// TypeError: Cyclic __proto__ value