<script lang="ts">
	import '$lib/stylesheet/design/katex.min.css';
	import type { DefaultValue } from '@milkdown/core';
	import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
	import { history } from '@milkdown/plugin-history';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { math } from '@milkdown/plugin-math';
	import { cursor } from '@milkdown/plugin-cursor';
	import { trailing } from '@milkdown/plugin-trailing';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import type { Ctx } from '@milkdown/ctx';
	import type { Node } from '.pnpm/prosemirror-model@1.19.3/node_modules/prosemirror-model';

	function getDefaultValue(): DefaultValue {
		const jsonString = localStorage.getItem('doc');
		try {
			return jsonString
				? {
						type: 'json',
						value: JSON.parse(jsonString)
				  }
				: '# Create your content here';
		} catch (error) {
			return `Error parsing JSON from localStorage: ${error}`;
		}
	}

	function saveDocumentToLocalStorage(ctx: Ctx, doc: Node) {
		localStorage.setItem('doc', JSON.stringify(doc.toJSON()));
	}

	function editor(dom: HTMLElement) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
				ctx.set(defaultValueCtx, getDefaultValue());
				ctx.get(listenerCtx).updated((ctx, doc) => {
					saveDocumentToLocalStorage(ctx, doc);
				});
			})
			.use(listener)
			.use(history)
			.use(commonmark)
			.use(math)
			.use(cursor)
			.use(trailing)
			.use(clipboard)
			.create();
	}
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>
<div use:editor />
