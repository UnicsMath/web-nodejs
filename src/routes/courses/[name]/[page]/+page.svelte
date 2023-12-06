<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page ? data.page.title : 'No chapter'}</title>
	<meta
		name="description"
		content={data.page ? data.page.description : 'Chapter could not be found or loaded.'}
	/>
</svelte:head>

{#if data.page}
	<h1>{data.page.chapterNumber}. {data.page.title}</h1>
	<p>{data.page.description}</p>
{:else if data.page === null}
	<p>Chapter could not be found or loaded</p>
{:else}
	<p>Loading...</p>
{/if}
