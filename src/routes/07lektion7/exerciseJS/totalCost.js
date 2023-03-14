import { applyCoupon } from "./coupon.js";

export function totalCost(cart) {
	// write your code here
	let allPrices = applyCoupon(cart);
	const totalPrice = allPrices.reduce((x, y) => x + y);
	return totalPrice;
}
