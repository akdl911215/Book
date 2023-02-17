const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },

    lastName: {
        value: 'LEE',
        writable: true,
        enumerable: true,
        configurable: true
    },

    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },

        // setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },

        enumerable: true,
        configurable: true
    }
});
console.log(person);
// { firstName: 'Ungmo', lastName: 'LEE', fullName: [Getter/Setter] }

person.fullName = 'Junghyun KIM';
console.log(person);
// { firstName: 'Junghyun', lastName: 'KIM', fullName: [Getter/Setter] }
