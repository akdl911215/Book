const name = {
    first: 'Lemmy',
    last: 'Kilmister'
};

function getName({ first, last }) {
    return `${first} ${last}`;
};

const getName2 = ({ first, last }) => `${first} ${last}`;