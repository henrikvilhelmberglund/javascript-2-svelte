<script>
	import "@unocss/reset/antfu.css";
	import Nav from "$lib/Nav.svelte";
  import { base } from "$app/paths";
	let routes = ["01lektion1", "02lektion2", "03lektion3"];
	let prefix = "/";
  // TODO fix empty thingy
</script>

<Nav {routes} {prefix} />

<slot />

<style uno:preflights uno:safelist global></style>
