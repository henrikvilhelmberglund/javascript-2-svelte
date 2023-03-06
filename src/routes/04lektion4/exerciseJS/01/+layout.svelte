<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["/01more", "/02more"];
	let prefix = "/04lektion4/exerciseJS/01";
</script>

<Nav {routes} {prefix} level={4}/>
<slot />

<style>
</style>
