<script>
	import { page } from "$app/stores";

	let base = "01lektion1";
	let routes = ["/01", "/exercise", "/02"];

  // TODO fix base getting added twice
</script>

<header class="flex">
	{#each routes as link}
		<a class="m-4 rounded-lg bg-green-500 p-4" href="{base}{link}">{link}</a>
	{/each}
</header>

<slot />

<style>
</style>
