function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
}

const person = {
    name: 'LEE',
    address: { city: 'Seoul'}
};

// 깊은 객체 동결
deepFreeze(person);

console.log(Object.isFrozen(person)); // true
// 중첩 객체까지 동결한다.
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Busan';
console.log(person);
// { name: 'LEE', address: { city: 'Seoul' } }