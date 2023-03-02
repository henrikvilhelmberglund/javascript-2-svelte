<script>
	// fetch("https://jsonplaceholder.typicode.com/todos/1")
	// 	.then((response) => response.json())
	// 	.then((json) => console.log(json));

	let todos = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		if (!res.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data = await res.json();
		return data;
	};

  let myData = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(myData);

	// AJAX

	// CRUD
	// Create, Read, Update, Delete

	// GET, POST, PUT, DELETE, PATCH
	// PUT ersätter värdet
	// PATCH ändrar på en sak
</script>

<main class="p-4">
	aaaaaaaaaaa

	{#await todos()}
		loading
	{:then value}
		{console.log(value)}
		<div class="flex flex-col">
			{#each Object.entries(value) as [key, value]}
				<p>
					{key}: {value}
				</p>
			{/each}
		</div>
		<!-- {value} -->
	{:catch error}
		error {error}
	{/await}

	<!-- {todos()} -->
</main>

<style>
</style>
