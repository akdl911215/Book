function validateCharacterCount(max, ...items) {
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, 'wvoquie'));
// true
console.log(validateCharacterCount(10, ...['wvoquie']));
// true
const tags = ['Hobbs', 'Eagles'];
console.log(validateCharacterCount(10, ...tags));
// true
console.log(validateCharacterCount(10, 'aaa', 'bbb', 'ccc'));
// true