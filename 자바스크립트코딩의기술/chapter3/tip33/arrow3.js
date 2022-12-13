const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
}

const getFullName = ({ first, last, city, state }) => ({
    fullName: `${first} ${last}`,
    location: `${city}, ${state}`,
});
console.log(getFullName(comic))