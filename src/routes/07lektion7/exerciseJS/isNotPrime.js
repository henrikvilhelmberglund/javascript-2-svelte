import _, { map } from "underscore";
import { isPrime } from "./isPrime.js";

export function notPrimeItems(cart) {
	const rejectedItems = _.reject(cart, isPrime);
	return rejectedItems;
}

const reject = (arr, callback) => {
	const items = arr.filter((item) => !callback(item));
	return items;
};

export function notPrimeItemsFilter(cart) {
	const rejectedItems = reject(cart, isPrime);
	return rejectedItems;
}
