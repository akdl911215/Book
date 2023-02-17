const person = {
    // 데이터 프로퍼티
    firstName: 'Junghyun',
    lastName: 'LEE',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(`${person.firstName} ${person.lastName}`);
// Junghyun LEE

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Hongman KIM';
console.log(person);
// { firstName: 'Hongman', lastName: 'KIM', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);
// Hongman KIM

// firstName 은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
const dataProperty = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(dataProperty);
// { value: 'Hongman', writable: true, enumerable: true, configurable: true }

// fullName 은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Cofigurable]]
// 프로퍼티 어트리뷰트를 갖는다.
const accessorProperty = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(accessorProperty);
// { get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true }

