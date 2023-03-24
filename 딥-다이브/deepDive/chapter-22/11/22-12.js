var value = 1;

// bind 메서드 사용
const obj = {
    value: 100,
    foo() {
        // 콜백 함수에 명시적으로 this를 바인딩한다.
        setTimeout(function () {
            console.log(this.value); // 10
        }.bind(this),100);
    }
};
obj.foo();

// 화살표 함수를 사용
const obj2 = {
    value: 200,
    foo() {
        // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value), 100); // 200
    }
};
obj2.foo();