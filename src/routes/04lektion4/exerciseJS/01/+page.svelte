<script>
	import { onMount } from "svelte";
	onMount(() => {
		let myData = [
			{
				userId: 1,
				id: 1,
				title: "delectus aut autem",
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				title: "quis ut nam facilis et officia qui",
				completed: false,
			},
			{
				userId: 1,
				id: 3,
				title: "fugiat veniam minus",
				completed: false,
			},
			{
				userId: 1,
				id: 4,
				title: "et porro tempora",
				completed: true,
			},
			{
				userId: 2,
				id: 37,
				title: "sunt cum tempora",
				completed: false,
			},
			{
				userId: 2,
				id: 38,
				title: "totam quia non",
				completed: false,
			},
			{
				userId: 3,
				id: 55,
				title: "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
				completed: true,
			},
		];
		/*
    Uppgift 1
    
Hämta data från https://jsonplaceholder.typicode.com/todos .
Skapa en todo-lista där du skriver ut varje todo (dvs endast dess titel).
Bredvid varje todo, ska det finnas en checkbox. Om todo:n är utförd, ska checkboxen vara ifylld.
(Extra) Skapa en todo-lista för varje användare. Varje lista ska bara innehålla todo’s för den specifika användaren (Tips: Titta på ditt data och fundera över hur man kan åstadkomma detta).

*/
		let main;
		if (document.querySelector("main")) {
			main = document.querySelector("main");
			main.innerHTML = "";
		} else {
			main = document.createElement("main");
			document.body.append(main);
		}

		const fetchTodos = async () => {
			// lägg till try/catch för fetch för att vara snäll mot user
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/todos");
				const json = await res.json();
				// console.log(json);
				return json;
			} catch (error) {
				let h2 = document.createElement("h2");
				h2.innerText = "Sorry, we had problems getting the data. Try again later.";
				document.body.append(h2);
			}
		};

		const showTodos = (array) => {
			let div = document.createElement("div");
			div.className = "result";
			array.forEach((todo) => {
				div.innerHTML += `<p>${todo.title}</p>`;
			});
			let checkbox = document.createElement("input");
			checkbox.type = "checkbox";

			// bool = annan bool, kan sätta value direkt
			checkbox.checked = todo.completed;

			div.append(checkbox);

			/* <input type="checkbox" ${
					todo.completed ? "checked" : ""
				}>
        */

			main.append(div);
			// console.log(todos)
		};

		const showTodosForUser = (array) => {
			console.log(array);
			let div = document.createElement("div");
			div.className = "result";
			let userDiv;
			let currentUser = 0;
			array.forEach((todo) => {
				if (currentUser !== todo.userId) {
					currentUser += 1;
					userDiv = document.createElement("ul");
					userDiv.innerHTML = `<h2>User ${todo.userId}:</h2>`;
				}
				userDiv.innerHTML += `<li>${todo.title} <input type="checkbox" ${
					todo.completed ? "checked" : ""
				}></li>`;
				main.append(userDiv);
			});
		};

		const render = async () => {
			let todos = await fetchTodos();
			// showTodos(todos);
			// showTodosForUser(myData);
			showTodosForUser(todos);
		};

		setTimeout(() => {
			render();
		}, 1000);
	});
</script>

<svelte:head>
	<style>
		.result {
			padding: 1rem;
		}
		h2 {
			font-size: 2rem;
		}
	</style>
</svelte:head>

<style>
</style>
