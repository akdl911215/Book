const person = {
    name: 'LEE',
    age: 30,
}

// 프로퍼티 값 = 자바스크립트에서 사용할 수 있는 모든 값
// 자바스크립트 함수는 일급 객체이므로 값으로 취급.
// 프로퍼티 값이 함수일 경우에 일반 함수와 구분하기 위해 메서드라고 부른다.

const method = {
    num: 0,
    increase: function () {
        this.num++;
    }
}
