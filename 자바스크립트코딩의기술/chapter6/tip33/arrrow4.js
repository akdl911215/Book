// 고차 함수는 그저 다른 함수를 반환하는 함수일 뿐이므로 초기 매개변수는 다를 것이 없다.
// 그리고 다른 때와 마찬가지로 함수 몸체에서 다른 함수를 반환하게 만들면 된다.
const discounter = discount => {
    return price => {
        console.log('discount: ', discount);
        console.log('price : ', price);
        return price * (1 - discount);
    };
};

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100)); // 90

console.log('---------------------');

const discounter2 = discount => price => price * (1 - discount);
const tenPercentOff2 = discounter2(0.1);
console.log(tenPercentOff2(100)); // 90