<script>
	import "@unocss/reset/antfu.css";
	import Nav from "$lib/Nav.svelte";
	import { base } from "$app/paths";
	let routes = [
		"/01lektion1",
		"/02lektion2",
		"/03lektion3",
		"/04lektion4",
		"/05lektion5",
		"/06lektion6",
		"/07lektion7",
	];
	let prefix = "";
</script>

<Nav {routes} {prefix} level={1} />

<slot />

<style uno:preflights uno:safelist global>
	:global(button) {
		@apply hover-bg-blue-200 m-1 rounded-lg bg-blue-300 p-1;
	}
</style>
