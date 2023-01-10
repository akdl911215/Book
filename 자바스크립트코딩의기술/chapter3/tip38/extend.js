class Coupon {
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration;
    }

    getPriceText() {
        return `$ ${this.price}`;
    }

    getExpirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }

    isRewardEligible(user) {
        return user.rewardsEligible && user.active;
    }

    getRewards(user) {
        if (this.isRewardEligible(user)) {
            this.price = this.price * 0.9;
        }
    }
}
export default Coupon;