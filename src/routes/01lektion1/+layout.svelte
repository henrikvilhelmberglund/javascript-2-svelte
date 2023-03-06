<script>
	import Nav from "$lib/Nav.svelte";
  import { page } from "$app/stores";
	let routes = ["/01", "/exercise", "/02"];
  let prefix = "/01lektion1";
</script>

<Nav {routes} {prefix} level={2}/>
<slot />

<style>
</style>
