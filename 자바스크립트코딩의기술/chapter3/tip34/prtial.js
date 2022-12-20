const zip = (...left) => (...right) => {
    return left.map((item, i) => [item, right[i]]);
};

const birds = ['meadowlark', 'robin', 'roadrunner'];
console.log(zip('kansas', 'wisconsin', 'new mexico')(...birds));
