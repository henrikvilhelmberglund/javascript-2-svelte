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
		let postsURL = "https://jsonplaceholder.typicode.com/posts";
		let todosURL = "https://jsonplaceholder.typicode.com/todos";

		const fetchUsers = async (url) => {
			try {
				const res = await fetch(url);
				const json = await res.json();
				// console.log(json);
				return json;
			} catch (error) {
				let h2 = document.createElement("h2");
				h2.innerText = "Error loading the required data. Please try again later.";
			}
		};

		const showUsers = (array, number) => {
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
        userDiv.innerHTML += `<div class="button-div"><button id="show-info-${i}">Show info</button><button id="delete-${i}">Delete</button></div>`

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
					console.log(userDiv);
					let users = await fetchUsers(userURL);
					let main = document.querySelector("main");
					let willRemove = confirm(`are you sure you want to remove ${users[i].name}?`);
					if (willRemove) {
						main.removeChild(userDiv);
					}
				});
			});
		};

		const showUser = async (user) => {
			let userPosts = await fetchUsers(postsURL);
			let userTodos = await fetchUsers(todosURL);
			let userDiv;
			let div = document.createElement("div");

			userPosts = userPosts.filter((post) => post.userId === user.id);
			userTodos = userTodos.filter((todo) => todo.userId === user.id && todo.completed);

			div.className = "result-user";
			if (document.querySelector(".user-info")) {
				userDiv = document.querySelector(".user-info");
				userDiv.innerHTML = "";
			} else {
				userDiv = document.createElement("div");
			}
			userDiv.className = "user-info";
			userDiv.innerHTML += `<p>${user.name}</p>`;
			userDiv.innerHTML += `<hr/>`;
			for (const [key, value] of Object.entries(user.address)) {
				if (key === "street") {
					userDiv.innerHTML += `<p>${value}</p>`;
				}
			}
			userDiv.innerHTML += `<hr/>`;
			userDiv.innerHTML += `<p>Post titles: </p><ul>`;
			userPosts.forEach((post, i) => {
				if (i < 5) {
					userDiv.innerHTML += `<li>${post.title}</li>`;
				}
			});
			userDiv.innerHTML += `<hr/>`;

			userDiv.innerHTML += `<p>Unfinished todos: </p><ul>`;
			userTodos.forEach((todo, i) => {
				userDiv.innerHTML += `<li>${todo.title}</li>`;
			});
			userDiv.innerHTML += `<hr/>`;

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
			padding: 0rem;
			margin: 2rem;
			border-radius: 1rem;
			width: 300px;
		}
		.user-info {
			position: fixed;
			top: 20%;
			right: 0px;
			padding: 1rem;
			margin: 3rem;
			border-radius: 1rem;
			width: 300px;
		}
    .button-div {
      flex-direction: row;
    }
	</style>
</svelte:head>

<style>
</style>
