<script>
	import { isPrime, primeItems } from "./isPrime.js";
	import { notPrimeItems, notPrimeItemsFilter } from "./isNotPrime.js";
	import { applyCoupon } from "./coupon.js";
	import { totalCost } from "./totalCost.js";

	let cart = [
		{ name: "Biscuits", type: "regular", category: "food", price: 2.0 },
		{ name: "Monitor", type: "prime", category: "tech", price: 119.99 },
		{ name: "Mouse", type: "prime", category: "tech", price: 25.5 },
		{ name: "dress", type: "regular", category: "clothes", price: 49.9 },
	];

	console.log(`prime items: ${primeItems(cart)}`);
	console.log(`not prime items: ${notPrimeItems(cart)}`);
	console.log(`apply coupon: ${applyCoupon(cart)}`);
	console.log(`total cost: ${totalCost(cart)}`);
	console.log(`not prime items with filter: ${notPrimeItemsFilter(cart)}`);
</script>

<div class="flex [&>*]:m-4">
	<p>
		{`prime items: ${JSON.stringify(primeItems(cart))}`}
	</p>
	<p>
		{`not prime items: ${JSON.stringify(notPrimeItems(cart))}`}
	</p>
	<p>
		{`apply coupon: ${applyCoupon(cart)}`}
	</p>
	<p>
		{`total cost: ${totalCost(cart)}`}
	</p>
	<p>
		{`not prime items with filter: ${JSON.stringify(notPrimeItemsFilter(cart))}`}
	</p>
</div>

<style>
</style>
