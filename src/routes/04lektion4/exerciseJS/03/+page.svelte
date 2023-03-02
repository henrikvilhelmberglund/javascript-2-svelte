<script>
	/*
  Uppgift 3 (Svår)

(OBS! Gå in på https://jsonplaceholder.typicode.com och se API-endpoints relation till varandra)
Hämta data från https://jsonplaceholder.typicode.com/users.
Skriv ut en lista, där du skriver ut användarnas namn.
Bredvid varje användares namn bör det finnas två knappar. “Show info” och “Delete”.
När Delete-knappen klickas på, tas användaren bort från listan.
Extra: Testa använda den inbyggda confirm()-funktionen i JavaScript och fråga om man är säker på att man vill radera personen).
Bredvid varje användares namn, skapa en knapp med texten “Show info”.
När du klickar på knappen, ska följande information skrivas ut i DOM:en. OBS! Endast information för en person ska kunna visas ut i taget.
Namn
Stad
En lista över användarens senaste inlägg (endast titlar för varje inlägg ska skrivas ut dvs /posts)
En lista över användarens todos som inte är utförda (/todos).

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

		let userURL = "https://jsonplaceholder.typicode.com/users";

		const fetchUsers = async (url) => {
			const res = await fetch(url);
			const json = await res.json();
			// console.log(json);
			return json;
		};

		const showUsers = (array, number) => {
			userCount += 1;
			let div = document.createElement("div");
			div.className = "result";
			let userDivs;
			// array = number ? [...Array(array[number])] : array;
			array.forEach((user, i) => {
				let userDiv;

				userDiv = document.createElement("div");

				userDiv.className = "user";
				console.log(user);
				userDiv.innerHTML += `<p>${user.name}</p>`;
				for (const [key, value] of Object.entries(user.address)) {
					if (key === "city" || key === "street") {
						// userDiv.innerHTML += `<p>${value}</p>`;
					}
				}
				for (const [key, value] of Object.entries(user.company)) {
					// if (key !== "catchPhrase") userDiv.innerHTML += `<p>${value}</p>`;
				}
				// div.append(userDiv);
				userDiv.innerHTML += `<button id="show-info-${i}">Show info</button>`;
				userDiv.innerHTML += `<button id="delete-${i}">Delete</button>`;

				main.append(userDiv);
				let showInfoBtn = document.querySelector(`#show-info-${i}`);
				let deleteBtn = document.querySelector(`#delete-${i}`);

				showInfoBtn.addEventListener("click", async (e) => {
					// console.log(i);
					let users = await fetchUsers(userURL);
					showUser(users[i]);
				});

				deleteBtn.addEventListener("click", async (e) => {
					console.log("delete");
					console.log(e.target.parentNode);
          let users = await fetchUsers(userURL);
					let main = document.querySelector("main");
					let willRemove = confirm(`are you sure you want to remove ${users[i].name}?`);
					if (willRemove) {
						main.removeChild(e.target.parentNode);
					}
				});
			});

			// console.log(todos)
		};

		let userCount = -1;

		const showUser = (user) => {
			let div = document.createElement("div");
			div.className = "result-user";
			// array = number ? [...Array(array[number])] : array;

			let userDiv;
			if (document.querySelector(".user-info")) {
				userDiv = document.querySelector(".user-info");
				userDiv.innerHTML = "";
			} else {
				userDiv = document.createElement("div");
			}
			userDiv.className = "user-info";
			console.log(user);
			userDiv.innerHTML += `<p>${user.name}</p>`;
			for (const [key, value] of Object.entries(user.address)) {
				if (key === "city" || key === "street") {
					// userDiv.innerHTML += `<p>${value}</p>`;
				}
			}
			for (const [key, value] of Object.entries(user.company)) {
				// if (key !== "catchPhrase") userDiv.innerHTML += `<p>${value}</p>`;
			}
			// div.append(userDiv);

			main.append(userDiv);

			// console.log(todos)
		};

		const render = async () => {
			let users = await fetchUsers(userURL);
			// showTodos(todos);
			// showTodosForUser(myData);
			showUsers(users);
		};

		render();
	});
</script>

<svelte:head>
	<style>
		.user {
			padding: 1rem;
			margin: 3rem;
			border-radius: 1rem;
			width: 300px;
		}
		.user-info {
			position: fixed;
			top: 50%;
			right: 0px;
			padding: 1rem;
			margin: 3rem;
			border-radius: 1rem;
			width: 300px;
		}
	</style>
</svelte:head>

<style>
</style>
