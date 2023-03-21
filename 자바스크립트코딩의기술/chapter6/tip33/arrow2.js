const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
};

// 객체를 반환하는 경우에는 객체를 괄호로 감싸야 한다.
const getName = ({ first, last }) => ({ fullName: `${first} ${last}` });
console.log(getName(comic)); // { fullName: 'Peter Bagge' }
