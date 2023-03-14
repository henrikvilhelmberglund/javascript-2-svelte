import _, { map } from "underscore";
import { isPrime } from "./isPrime.js";

export function notPrimeItems(cart) {
	return _.reject(cart, isPrime);
}

const reject = (arr, callback) => {
	return arr.filter((item) => !callback(item));
};

export function notPrimeItemsFilter(cart) {
	return reject(cart, isPrime);
}
