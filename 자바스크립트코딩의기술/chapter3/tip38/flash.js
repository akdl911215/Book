import Coupon from "./extend.js";

class FlashCoupon extends Coupon {
    constructor(price, expiration) {
        super(price);
        this.expiration = expiration || '2시간';
    }

    getExpirationMessage() {
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }

    isRewardEligible(user) {
        return super.isRewardEligible(user) && this.price > 20;
    }

    getRewards(user) {
        if (this.isRewardEligible(user)) {
            this.price = this.price * 0.8;
        }
    }
}

const flash = new FlashCoupon(30);

console.log(flash.getExpirationMessage());
console.log(flash.isRewardEligible('ame'))