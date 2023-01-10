import {Coupon} from "../tip37/methods.js";

class FlashCoupon extends Coupon {
    constructor(price, expiration) {
        super(price);
        this.expiration = expiration || '2시간';
    }
}
const flash = new FlashCoupon(10);
console.log(flash.price);
// 10

console.log(flash.getExpirationMessage());
// 이 쿠폰은 2시간 후에 만료됩니다.