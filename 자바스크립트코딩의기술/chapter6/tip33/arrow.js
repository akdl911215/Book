export const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
};

const getName = ({ first, last }) => `${first} ${last}`;
console.log(getName(comic)); // Peter Bagge