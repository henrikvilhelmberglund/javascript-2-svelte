<script>
	// 1 Book Shelf

	class Book {
		constructor(inputString) {
			this.title = inputString.split("-")[0] ?? "unknown title";
			this.author = inputString.split("-")[1] ?? "unknown author";
		}
		getTitle() {
			return `Title: ${this.title}`;
		}
		getAuthor() {
			return `Author: ${this.author}`;
		}
	}

	let book1 = new Book("The Lord of the Rings - J.R.R. Tolkien");
	let book2 = new Book("Hamlet - William Shakespeare");
	let book3 = new Book("War and Peace - Leo Tolstoy");

	let bookShelf = [book1, book2, book3];
	for (let book of bookShelf) {
		console.log(`${book.getTitle()} by ${book.getAuthor()}`);
	}
	// 2 Fullname and email

	class Employee {
		constructor(firstName, lastName) {
			this.fullname = `${firstName} ${lastName}`;
			let email = `${firstName}.${lastName}@company.com`;
			this.email = email.toLowerCase();
		}
	}

	let employee1 = new Employee("John", "Smith");
	let employee2 = new Employee("Mary", "Sue");
	let employee3 = new Employee("Darth", "Vader");

	let employeeList = [employee1, employee2, employee3];

	for (let employee of employeeList) {
		console.log(`${employee.fullname} with the email ${employee.email}`);
	}

	// 3  Simple OOP Calculator

	class Calculator {
		constructor() {}
		add(a, b) {
			return a + b;
		}
		subtract(a, b) {
			return a - b;
		}
		multiply(a, b) {
			return a * b;
		}
		divide(a, b) {
			return a / b;
		}
	}

	let calc = new Calculator();
	console.log(calc.add(5, 7));
	console.log(calc.subtract(5, 7));
	console.log(calc.multiply(5, 7));
	console.log(calc.divide(5, 7));

	let value1 = 0;
	let value2 = 0;
	let result = 0;

	$: added = calc.add(value1, value2);
	$: subtracted = calc.subtract(value1, value2);
	$: multiplied = calc.multiply(value1, value2);
	$: divided = calc.divide(value1, value2);

	// 4

	class Icecream {
		constructor(flavor, numSprinkles) {
			let sweetnessOf = { Plain: 0, Vanilla: 5, ChocolateChip: 5, Strawberry: 10, Chocolate: 10 };
			this.flavor = flavor;
			this.sweetness = sweetnessOf[flavor] + numSprinkles * 1;
		}
	}

	let ice1 = new Icecream("Chocolate", 13); // value of 23
	let ice2 = new Icecream("Vanilla", 0); // value of 5
	let ice3 = new Icecream("Strawberry", 7); // value of 17
	let ice4 = new Icecream("Plain", 18); // value of 18
	let ice5 = new Icecream("ChocolateChip", 3); // value of 8

	function sweetestIcecream(array) {
		let topSweetness = 0;
		let topIcecream = "";
		array.forEach((icecream) => {
			if (icecream.sweetness > topSweetness) {
				topSweetness = icecream.sweetness;
				topIcecream = icecream.flavor;
			}
		});
		return `${topIcecream} with ${topSweetness}`;
	}

	console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));

	console.log(sweetestIcecream([ice3, ice1]));

	console.log(sweetestIcecream([ice3, ice5]));
</script>

<!-- 1 bookshelf -->

<ul class="m-4 p-4">
	{#each bookShelf as book}
		<li class="list-disc">
			{book.getTitle()} by {book.getAuthor()}
		</li>
	{/each}
</ul>

<!-- 2 -->

<ul class="m-4 p-4">
	{#each employeeList as employee}
		<li class="list-disc">
			{employee.fullname} with the email
			<a class="cursor-pointer text-blue-700" href="mailto:{employee.email}">
				{employee.email}
			</a>
		</li>
	{/each}
</ul>

<!-- 3 -->

<article class="p-4">
	<input
		class="w-24 rounded-lg p-2 outline outline-1"
		bind:value={value1}
		type="number"
		name=""
		id="" />
	<input
		class="w-24 rounded-lg p-2 outline outline-1"
		bind:value={value2}
		type="number"
		name=""
		id="" />

	<button
		on:click={() => (result = result === 0 ? calc.add(value1, value2) : calc.add(+result, value2))}
		class="rounded-xl bg-green-300 p-2 px-3">+</button>
	<button
		on:click={() =>
			(result = result === 0 ? calc.subtract(value1, value2) : calc.subtract(result, value2))}
		class="rounded-xl bg-green-300 p-2 px-3">-</button>
	<button
		on:click={() =>
			(result = result === 0 ? calc.multiply(value1, value2) : calc.multiply(result, value2))}
		class="rounded-xl bg-green-300 p-2 px-3">*</button>
	<button
		on:click={() =>
			(result = result === 0 ? calc.divide(value1, value2) : calc.divide(result, value2))}
		class="rounded-xl bg-green-300 p-2 px-3">/</button>
	<button on:click={() => (result = 0)} class="rounded-xl bg-green-300 p-2 px-3">C</button>
	<hr class="my-4" />
	<p class="text-2xl">{result}</p>

	<div class="flex">
		<p>
			added: {added}
		</p>
		<p>
			subtracted: {subtracted}
		</p>
		<p>
			multiplied: {multiplied}
		</p>
		<p>
			divided: {divided}
		</p>
	</div>
</article>

<!-- 4 -->

<p class="p-4">
	{sweetestIcecream([ice1, ice2, ice3, ice4, ice5])}
</p>

<style>
</style>
