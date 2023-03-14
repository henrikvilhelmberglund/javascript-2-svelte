export function couponPrice(item) {
	if (item.category !== "tech") {
		return item.price;
	} else {
		return item.price * 0.8;
	}
}

export function applyCoupon(cart) {
	const appliedPrice = cart.map((item) => couponPrice(item));
	return appliedPrice;
}
