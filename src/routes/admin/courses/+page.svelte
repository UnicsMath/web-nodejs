<script lang="ts">
  import "$lib/stylesheet/design/katex.min.css";
  import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
  import { history } from "@milkdown/plugin-history";
  import { commonmark } from "@milkdown/preset-commonmark";
  import { math } from "@milkdown/plugin-math";
  import { cursor } from "@milkdown/plugin-cursor";
  import { trailing } from "@milkdown/plugin-trailing";
  import { clipboard } from "@milkdown/plugin-clipboard";
  import { listener, listenerCtx } from "@milkdown/plugin-listener";
  import type { JSONRecord } from "@milkdown/transformer";

  function getDefaultValue():
		| { type: 'html'; dom: HTMLElement }
		| { type: 'json'; value: JSONRecord } {
		const jsonString = localStorage.getItem('doc');
		try {
			const value = jsonString ? JSON.parse(jsonString) : {};
			return { type: 'json', value };
		} catch (error) {
			console.error('Error parsing JSON from localStorage:', error);
			return { type: 'json', value: {} };
		}
	}

	function saveDocumentToLocalStorage(ctx: any, doc: any) {
		localStorage.setItem('doc', JSON.stringify(doc.toJSON()));
	}

	function configureEditor(
		dom: any,
		defaultValue: { type: 'html'; dom: HTMLElement } | { type: 'json'; value: JSONRecord }
	) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
				ctx.set(defaultValueCtx, defaultValue || '# 1. Start editing');
				ctx.get(listenerCtx).updated((ctx, doc, prevDoc) => {
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

	function editor(dom: any) {
		const defaultValue = getDefaultValue();
		configureEditor(dom, defaultValue);
	}
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<div use:editor />
