function Coupon (price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two-week';
}

const coupon = new Coupon(5);

console.log(coupon.price);
// 5

console.log(coupon.expiration);
// 2주