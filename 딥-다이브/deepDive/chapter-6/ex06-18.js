


let foo = 'FOO';
console.log(foo); // FOO

// 이전 참조를 제거. foo 변수는 더 이상 'FOO' 를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;
console.log(foo); // null



