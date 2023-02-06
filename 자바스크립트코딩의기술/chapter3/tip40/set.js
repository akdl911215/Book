class Coupon {
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration;
    }

    set halfPrice(price) {
        this.price = price / 2;
    }
}

const coupon = new Coupon(5);
console.log(coupon.price);

coupon.halfPrice = 20;
console.log(coupon.price);

console.log(coupon.halfPrice);