<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "tamagocchi"];
	let prefix = "/03lektion3";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
