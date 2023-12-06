<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.course ? data.course.name : 'No course'}</title>
	<meta
		name="description"
		content={data.course ? data.course.description : 'Course could not be found or loaded.'}
	/>
</svelte:head>

<section>
	{#if data.course}
		<div>
			<h1>{data.course.name}</h1>
			<p>Author: {data.course.author.title} {data.course.author.name}</p>
			<p>Major in: {data.course.author.degree}</p>
			<p>{data.course.description}</p>
			<p>created: {data.course.created} | updated: {data.course.updated}</p>
		</div>
		<h3>Course content</h3>
		<ol>
			{#each data.course.chapters as chapter}
				<li>
					<p>{chapter}</p>
				</li>
			{/each}
		</ol>
		<a href="{$page.url.pathname}/1-{data.course.chapters[0].replace(/\s/g, '-').toLowerCase()}"
			>Next page</a
		>
	{:else if data.course === null}
		<p>Course could not be found or loaded</p>
	{:else}
		<p>Loading...</p>
	{/if}
</section>

<style lang="scss">
	ol {
		display: inline-block;
		text-align: start;
	}

	li {
		list-style: decimal;
	}
</style>
