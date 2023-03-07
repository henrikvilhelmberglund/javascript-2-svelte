<script>
	// destructuring
	//   let { name, email, address, company } = user;
	//   let { street, city } = address;

	// kan även byta namn på variabler
	//   let { name: companyName, bs } = company;

	// kan byta plats på query parameters
	// /posts?id=12&userId=2
	// eller
	// /posts?userId=2&id=12

	let getData = async () => {
		let userId = 2;
		let postId = 12;

		let params = new URLSearchParams({
			id: postId,
			// istället för
			// userId: userId
			// fungerar i alla objekt
			userId,
		});

		let data = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
		let json = await data.json();
		console.log(json);
	};

	getData();
</script>

<main class="p-4">
	<p class="text-[28rem]">🌞</p>
</main>

<style>
</style>
