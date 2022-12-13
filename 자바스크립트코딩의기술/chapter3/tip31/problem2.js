function validateCharacterCount(max) {
    const items = Array.prototype.slice.call(arguments, 1);
    console.log('items : ', items);

    return items.every(item => item.length < max);
}

console.log('1 : ', validateCharacterCount(10, 'wvquie'));
// 1 : true
const tags = ['Hobbs', 'Eagles'];
console.log('2 : ', validateCharacterCount(10, ...tags));
// 2 : true
console.log('3 : ', validateCharacterCount(10, tags));
// 3 : true