<script>
	import { onMount } from "svelte";

	let data = [
		{
			name: "Brandon",
			age: 28,
		},
		{
			name: "Batman",
			age: 50,
		},
		{
			name: "Aquaman",
			age: 37,
		},
	];

	onMount(() => {
		let body = document.querySelector("body");
		let div = document.createElement("div");
		// body.innerHTML = "";

		let sortedHeroes = [...data];

		sortedHeroes.sort((a, b) => {
			// sorterar efter age
			return a.age - b.age;
		});

		data.forEach((person, i) => {
			div.innerHTML += `${i}: ${person.name} <br>`;
		});

		let heroes = data.filter((person) => {
			return person.age > 30;
		});

		div.innerHTML += `${JSON.stringify(data)}`;
		div.innerHTML += `<br><br>`;
		div.innerHTML += `${JSON.stringify(sortedHeroes)}`;
		div.innerHTML += `<br><br>`;

		let sortArray = (arr, property, order) => {
			let arrayCopy = [...arr];
			return arrayCopy.sort((a, b) => {
				if (order === 0) {
					if (a[property] < b[property]) return -1;
					else if (a[property] > b[property]) return 1;
				} else if (order === 1) {
					if (a[property] < b[property]) return 1;
					else if (a[property] > b[property]) return -1;
				}
			});
		};

		let newArray = sortArray(data, "name", 0);
		console.log(newArray);

		div.innerHTML += `${JSON.stringify(newArray)}`;
		div.innerHTML += `<br><br>`;
		body.append(div);

		// import("./main.js");
	});
</script>

<main class="m-12" />

<style>
</style>
