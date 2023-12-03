<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.page}
	<h1>{data.page.chapterNumber}. {data.page.title}</h1>
	<p>{data.page.description}</p>
{:else if data.page === null}
	<p>Error: Page not found</p>
{:else}
	<p>Loading...</p>
{/if}
