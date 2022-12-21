const building = {
    hours: '8 a.m. - 8 a.m.',
    address: 'Jayhawk Blvd',
};
const manager = {
    name: 'Augusto',
    phone: '555-555-5555',
};
const program = {
    name: 'Presenting Research',
    room: '415',
    hours: '3 - 6',
}
const exhibit = {
    name: 'Emerging Scholarship',
    contact: 'Dyan',
}

const setStrongHallProgram = program => {
    const defaults = {
        hours: '8 a.m - 8 p.m',
        address: 'Jayhawk Blvd',
        name: 'Augusto',
        phone: '555-55-555'
    }

    return { ...defaults, ...program }
}

const programInfo = setStrongHallProgram(program)
console.log('2 : ', programInfo)
const exhibitInfo = setStrongHallProgram(exhibit)
console.log('3 : ', exhibitInfo)