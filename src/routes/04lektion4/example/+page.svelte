<script>
	import { onMount } from "svelte";
	onMount(() => {
		async function getData() {
			let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			let json = await data.json();
			return json;
		}

		let showData = (obj) => {
			let todo = document.createElement("div");
			todo.innerHTML = `<p>Title: ${obj.title}</p>
<p>Completed: ${obj.completed}</p>`;
			document.body.append(todo);
		};

		// getData().then((json) => showData(json));

		const loadPage = async () => {
			let data = await getData();
			showData(data);
		};

		loadPage();
	});
</script>

<style>
</style>
