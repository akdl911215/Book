/*
every() 메서드는 배열의 모든 항목을 대상으로 콜백 함수를 실행해
모든 항목에서 참 값이 반환되면 결과적으로 true를 반환하고 아닐 경우 false
*/

function validateCharacterCount(max, items) {
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, ['Hobbs', 'Eagles']));
// true