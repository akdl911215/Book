function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
}

class FlashCoupon extends Coupon {
    constructor(price, expiration) {
        super(price);
        this.expiration = expiration || '2시간';
    }

    getExpirationMessage() {
        return `이 쿠폰은 깜작 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }
}

const flashCoupon = new FlashCoupon(5, '1시간');

console.log(flashCoupon.getExpirationMessage());