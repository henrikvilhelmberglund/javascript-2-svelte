<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "exercise", "02"];
	let prefix = "/02lektion2";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
