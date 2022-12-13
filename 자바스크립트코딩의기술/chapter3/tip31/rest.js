function getArguments(...args) {
    return args;
    // [ 'Bloomsdat', 'June 16' ]

    // return arguments;
    // [Arguments] { '0': 'Bloomsdat', '1': 'June 16' }
}

console.log(getArguments('Bloomsdat', 'June 16'));

function a(...b) {
    return b;
}
console.log(a('bbb', 'ddd'));
// [ 'bbb', 'ddd' ]