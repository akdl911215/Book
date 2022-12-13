console.log('problem arrow2')
const discounter = discount => price => price * (1 - discount);

console.log(discounter(0.1)(100));
