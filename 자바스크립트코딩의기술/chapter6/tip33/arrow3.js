const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
};

const getNameAndLocation = ({ first, last, city, state }) => ({
    fullName: `${first} ${last}`,
    location: `${city}, ${state}`
});
console.log(getNameAndLocation(comic));
// { fullName: 'Peter Bagge', location: 'Seattle, Washington' }