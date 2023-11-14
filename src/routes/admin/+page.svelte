<script lang="ts">
	import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { math } from '@milkdown/plugin-math';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import type { JSONRecord } from '@milkdown/transformer';

	let jsonString = localStorage.getItem('doc');
	let outputJson;

	if (jsonString !== null) outputJson = JSON.parse(jsonString);

	const defaultValue: { type: 'html'; dom: HTMLElement } | { type: 'json'; value: JSONRecord } = {
		type: 'json',
		value: outputJson
	};

	function editor(dom: any) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
				ctx.set(defaultValueCtx, defaultValue);
				ctx.get(listenerCtx).updated((ctx, doc, prevDoc) => {
					localStorage.setItem('doc', JSON.stringify(doc.toJSON()));
				});
			})
			.use(listener)
			.use(commonmark)
			.use(math)
			.create();
	}
</script>

<svelte:head>
	<title>Admin</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<div use:editor />
