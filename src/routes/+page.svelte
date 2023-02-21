<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// import("./main.js");
	});
</script>

<style>
	:global(body) {
		display: none;
	}
</style>
