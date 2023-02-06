class Coupon {
    constructor(price, expiration) {
        this._price = price;
        this.expiration = expiration;
    }

    get priceText() {
        return `$${this._price}`;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        const newPrice = price.toString().replace(/[^\d]/g, '');
        this._price = parseInt(newPrice, 10);
    }

    get expirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
}

const coupon = new Coupon(5);
console.log(coupon.price);
// 5

coupon.price = '$10';
console.log(coupon.price);
// 10

console.log(coupon.priceText);