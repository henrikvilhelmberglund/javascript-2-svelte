<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "02", "03"];
	let prefix = "exerciseJS";

	// TODO fix nested layout
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
