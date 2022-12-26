const validator = {
    message: '는 유효하지 않습니다.',
    setInvalidMessage(...filed) {
        return filed.map(function (filed) {
            return `${filed}${this.message}`;
        })
    }
}
console.log(validator.message);
// 는 유효하지 않습니다.

console.log(validator.setInvalidMessage('도시'));
// TypeError: Cannot read properties of undefined (reading 'message')