function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
}

const coupon = new Coupon(5, '2개월');

console.log(coupon.price);
// 5
console.log(coupon.expiration);
// 2개월

Coupon.prototype.getExpirationMessage = function () {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`
};

console.log(coupon.getExpirationMessage());
// 이 쿠폰은 2개월 후에 만료됩니다.

console.log(coupon);