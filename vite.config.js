import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import { presetForms } from "@julr/unocss-preset-forms";
import { defineConfig } from "vite";
import transformerDirectives from "@unocss/transformer-directives";


export default defineConfig({
	plugins: [
    UnoCSS({
      transformers: [transformerDirectives()],
			presets: [presetUno(), presetForms()],
			mode: "svelte-scoped",
		}),
		sveltekit(),
	],
});
