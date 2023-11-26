<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<div>
		<h1>{data.course.name}</h1>
		<p>{data.course.description}</p>
	</div>
	<h3>Course content</h3>
	<ol>
		{#each data.course.chapters as chapter}
			<li>
				<p>{chapter}</p>
			</li>
		{/each}
	</ol>
</section>

<style lang="scss">
	ol,
	div p {
		padding-bottom: 90px;
	}
	h1 {
		padding-bottom: 3px;
	}
	ol {
		display: inline-block;
		text-align: start;
	}
	li {
		list-style: decimal;
		padding-left: 2px;
		p {
			line-height: 28px;
		}
	}
</style>
