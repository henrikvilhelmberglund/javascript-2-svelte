<script>
	/*

Uppgift 2
Hämta data från https://jsonplaceholder.typicode.com/users. När du startar webbapplikationen, ska användaren endast se en knapp där det står “Get profiles”. När användare klickar på knappen laddar du in samtliga profilkort och skriver ut dem i DOM:en.
För varje användare du hämtar, skapa ett “profilkort”. Profilkortet ska innehålla följande:
Namn
Email
Adress (Gata och stad)
Telefonnummer
Företag (Namn, typ av företag)
(Extra) Skapa en input med tillhörande knapp i startsidan. Man ska kunna skriva in en siffra mellan 1-10, och då hämta och visa ut data (se ovan) för användaren med det id:et.

*/

	import { onMount } from "svelte";
	onMount(() => {
		let main;
		if (document.querySelector("main")) {
			main = document.querySelector("main");
			main.innerHTML = "";
		} else {
			main = document.createElement("main");
			document.body.append(main);
		}

		const fetchUsers = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const json = await res.json();
			// console.log(json);
			return json;
		};

		const showUsers = (array, number) => {
			let div = document.createElement("div");
			div.className = "result";
			array = number ? [...Array(array[number])] : array;
			array.forEach((user) => {
				let userDiv;
				if (document.querySelector(".user")) {
					userDiv = document.querySelector(".user");
					userDiv.innerHTML = "";
				} else {
					userDiv = document.createElement("div");
				}
				userDiv.className = "user";
				console.log(user);
				userDiv.innerHTML += `<p>${user.name}</p>
        <p>${user.email}</p>`;
				userDiv.innerHTML += `<hr>`;
				for (const [key, value] of Object.entries(user.address)) {
					if (key === "city" || key === "street") {
						userDiv.innerHTML += `<p>${value}</p>`;
					}
				}
				userDiv.innerHTML += `<p>${user.phone}</p>`;
				userDiv.innerHTML += `<hr>`;
				for (const [key, value] of Object.entries(user.company)) {
					if (key !== "catchPhrase") userDiv.innerHTML += `<p>${value}</p>`;
				}
				// div.append(userDiv);
				main.append(userDiv);
			});
			// console.log(todos)
		};

		const render = async () => {
			let users = await fetchUsers();
			// showTodos(todos);
			// showTodosForUser(myData);
			showUsers(users);
		};

		const renderSingleUser = async (input) => {
			let users = await fetchUsers(input);
			// showTodos(todos);
			// showTodosForUser(myData);
			showUsers(users, input);
		};

		// setTimeout(() => {
		// 	render();
		// }, 1000);

		let show = document.querySelector("#show");
		show.addEventListener("click", () => {
			render();
		});

		let userNumber = document.querySelector("#user-number");
		let showUser = document.querySelector("#show-user");

		showUser.addEventListener("click", () => {
			renderSingleUser(+userNumber.value);
		});
	});
</script>

<svelte:head>
	<style>
		.user {
			padding: 1rem;
			margin: 3rem;
			background-color: thistle;
			border-radius: 1rem;
			width: 300px;
		}
	</style>
</svelte:head>

<button id="show">Show</button>

<input id="user-number" type="number" max="10" />
<button id="show-user">Show user by number</button>

<style>
	#show {
		margin: 2rem;
		padding: 1rem;
		background-color: thistle;
		border-radius: 0.5rem;
	}
	input {
		outline: 1px solid black;
	}

	#show-user {
		margin: 2rem;
		padding: 1rem;
		background-color: thistle;
		border-radius: 0.5rem;
	}
</style>
