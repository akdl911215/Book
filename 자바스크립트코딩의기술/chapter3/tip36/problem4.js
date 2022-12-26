const validator = {
    message: '는 유효하지 않습니다.',
    setInvalidMessage: field => `${field}${this.message}`
};

console.log(validator.setInvalidMessage('도시'))
// TypeError: Cannot read properties of undefined (reading 'message')

/*
이 경우에는 현재 객체에 대해 새로운 this 문맥 바인딩을 만들지 않았습니다.
새로운 문맥을 만들지 않았기 때문에전역 객체에 바인딩된 것입니다.

정리하면 화살표 함수는 이미 문액이 있고 다른 함수 내부에서 이 함수를 사용하려고 할 때 유용합니다.
그렇지만 새로운 this 바인딩을 설정할 필요가 있을때는 문제가 됩니다.
*/