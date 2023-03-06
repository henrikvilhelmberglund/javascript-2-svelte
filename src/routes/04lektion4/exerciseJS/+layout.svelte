<script>
	import Nav from "$lib/Nav.svelte";
  import { base } from "$app/paths";
	let routes = ["/01", "/02", "/03"];
	let prefix = "/04lektion4/exerciseJS"
</script>

<Nav {routes} {prefix} level={3}/>
<slot />

<style>
</style>
