<script>
	export let routes;
	export let prefix;
	export let js;
	import { page } from "$app/stores";
	import { base } from "$app/paths";
</script>

<!-- {$page.route.id} -->

<nav class="flex flex-col p-8">
	<div class="flex-row [&>*]:m-2">
		<a class="rounded-lg bg-violet-400 p-4 text-black" href="{base}/">Home</a>
		{#if !js}
			<a class="rounded-lg bg-violet-400 p-4 text-black" href="{base}{prefix}">{prefix}</a>
		{:else}
			<a class="rounded-lg bg-indigo-400 p-4 text-black" href="{base}/js{prefix}">{prefix}</a>
		{/if}
	</div>
	<div class="flex-row [&>*]:m-2">
		{#each routes || [] as route}
			{#if $page.route.id === prefix && !js}
				<a class="rounded-lg bg-blue-400 p-4 text-black" href="{base}{prefix}/{route}">{route}</a>
			{:else if $page.route.id.includes(prefix + "/") && !js}
				<a class="rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
			{:else if $page.route.id === "/js" + prefix && js}
				<a class="rounded-lg bg-indigo-400 p-4 text-black" href="{base}/js{prefix}/{route}"
					>{route}</a>
			{:else if $page.route.id.includes("/js" + prefix + "/") && js}
				<a class="rounded-lg bg-indigo-400 p-4 text-black" href={route}>{route}</a>
			{/if}
		{/each}
	</div>
</nav>

<style>
</style>
