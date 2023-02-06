class Coupon {
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || '2주';
    }
    get priceText() {
        return `$ ${this.price}`;
    }
    get expirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
}

const coupon = new Coupon(5);
coupon.price = 10;
console.log(coupon.priceText);
console.log(coupon.expirationMessage);