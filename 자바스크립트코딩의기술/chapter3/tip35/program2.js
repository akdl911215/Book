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
const mergeProgramInformation = (building, manager) => {
    const { hours, address } = building;
    const { name, phone } = manager;
    const defaults = { hours, address, contact: name, phone };

    return { ...defaults, ...program}

}
const setStrongHallProgram = mergeProgramInformation(building, manager)
console.log('1 : ', setStrongHallProgram)



