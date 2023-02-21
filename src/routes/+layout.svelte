<script>
	import "@unocss/reset/antfu.css";
	let routes = ["/", "/01lektion1"];
</script>

<header class="flex">
	{#each routes as link}
		<a class="m-4 rounded-lg bg-blue-500 p-4" href={link}>{link}</a>
	{/each}
</header>

<slot />

<style uno:preflights uno:safelist global></style>
