const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
}

const getFullName = ({ first, last }) => ({fullName: `${first} ${last}`});
console.log(getFullName(comic))