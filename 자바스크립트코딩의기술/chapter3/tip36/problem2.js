const validator = {
    message: '는 유효하지 않습니다.',
    setInvalidMessage(...filed) {
        return filed.map((filed) => {
            return `${filed}${this.message}`;
        })
    }
}
console.log(validator.message);
// 는 유효하지 않습니다.

console.log(validator.setInvalidMessage('도시'));
// [ '도시는 유효하지 않습니다.' ]

console.log(validator.setInvalidMessage('도시', '대시', '다시'));
// [ '도시는 유효하지 않습니다.', '대시는 유효하지 않습니다.', '다시는 유효하지 않습니다.' ]