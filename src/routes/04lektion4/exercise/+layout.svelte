<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "02", "03"];
	let prefix = "/04lektion4/exercise";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
