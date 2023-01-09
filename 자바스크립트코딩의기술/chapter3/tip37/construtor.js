class Coupon {
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || '2주';
    }
}

const coupon = new Coupon(5);

console.log(coupon.price);
// 5

console.log(coupon.expiration);
// 2주

console.log(coupon["expiration"]);
// 2주