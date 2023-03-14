<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["/01", "/exerciseJS"];
	let prefix = "/07lektion7";
</script>

<Nav {routes} {prefix} level={2} />
<slot />

<style>
</style>
