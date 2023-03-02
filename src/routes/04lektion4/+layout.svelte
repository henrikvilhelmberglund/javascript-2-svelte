<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "example", "exerciseJS", "exercise"];
	let prefix = "/04lektion4";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
