const getBirds = (...argument) => {
    let arr = []

    for (let i = 0; i < argument.length; ++i) {
        let tmp = '';
        if (argument[i] === 'kansas') tmp = 'meadowlark';
        if (argument[i] === 'wisconsin') tmp = 'robin';
        if (argument[i] === 'new mexico') tmp = 'roadrunner';
        arr.push(tmp);
    }

    return arr;
}

const birds = getBirds('kansas', 'wisconsin', 'new mexico');
console.log(birds);