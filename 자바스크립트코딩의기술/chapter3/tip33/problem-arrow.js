console.log('problem arrow')
const discounter = discount => price => price * (1 - discount);

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100));