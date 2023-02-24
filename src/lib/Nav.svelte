<script>
	export let routes;
	export let prefix;
	import { page } from "$app/stores";
	import { base } from "$app/paths";
</script>

<!-- {$page.route.id} -->

<nav class="flex flex-col">
	<div class="flex-row [&>*]:m-2">
		{#if prefix === "/"}
			<a class="rounded-lg bg-violet-400 p-4 text-black" href="{base}/">Home</a>
			{#each routes as route}
				<a class="rounded-lg bg-violet-400 p-4 text-black" href="{base}/{route}">{route}</a>
			{/each}
		{/if}
	</div>
	<div class="flex-row [&>*]:m-2">
		{#each routes || [] as route}
			{#if prefix !== "/"}
				<a class="rounded-lg bg-blue-400 p-4 text-black" href="{base}{prefix}/{route}">{route}</a>
			{/if}
		{/each}
	</div>
</nav>

<style>
</style>
