<script>
	import { onMount } from "svelte";

	// Pure functions
	// 1. Förväntat resultat (samma input ska alltid ge samma output)
	// 2. Ska inte ha side effects (funktionen ska inte mutera/ändra på input eller övrig data
	// (console.log() är också side effect)

	let x = 10;
	let addNumber = (y) => {
		x += y;
		console.log(`Added ${y}. Output: ${x}`);
		return x;
	};

	// detta muterar x, alltså side effect
	addNumber(2);
	addNumber(2);

	let pureAddNumber = (y) => {
		let z = x + y;
		return z;
	};

	// Higher order functions

	let data1 = ["Tomat", "Mjölk", "Bröd"];
	let data2 = ["ägg", "flingor", "yoghurt"];
	let data3 = ["godis", "popcorn", "pasta"];
	let data4 = ["star wars", "javascript", "kod"];

	onMount(() => {
		let list1 = document.querySelector("#list1");
		let list2 = document.querySelector("#list2");
		let list3 = document.querySelector("#list3");
		let list4 = document.querySelector("#list4");

		// inte så effektivt för vi har 2 funktioner som gör i princip samma sak
		// data1.forEach((item) => {
		// 	let li = document.createElement("li");
		// 	li.innerText = item;
		// 	list1.append(li);
		// });
		// data2.forEach((item) => {
		// 	let li = document.createElement("li");
		// 	li.innerText = item;
		// 	list2.append(li);
		// });

		createList(data1, list1, "li");
		createList(data2, list2, "li");
		createList(data3, list3, "li");
		createList(data4, list4, "p");
	});

	function createListItem(item) {
		let li = document.createElement("li");
		li.innerText = item;
		return li;
	}

	function createElementWithText(tag, item) {
		let elem = document.createElement(tag);
		elem.innerText = item;
		return elem;
	}

	// exempel på higher order function
	function createList(array, element, type) {
		array.forEach((item) => {
			element.append(createElementWithText(type, item));
		});
	}

	// Recursion
</script>

<main class="p-4">
	<!-- <p class="text-[28rem]">👻</p> -->
	<p>
		{addNumber(2)}
	</p>
	<p>
		{addNumber(2)}
	</p>
	<p>
		{pureAddNumber(2)}
	</p>
	<p>
		{pureAddNumber(2)}
	</p>

	<h2>List 1</h2>
	<ul id="list1" />
	<h2>List 2</h2>
	<ul id="list2" />
	<h2>List 3</h2>
	<ul id="list3" />
	<h2>List 4</h2>
	<div id="list4" />
</main>

<style>
	h2 {
		font-size: 2rem;
	}
</style>
