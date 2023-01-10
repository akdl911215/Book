import {Coupon} from "../tip37/methods.js";

class FlashCoupon extends Coupon {};

const flash = new FlashCoupon(10);

console.log(flash.price);

console.log(flash.getPriceText());
