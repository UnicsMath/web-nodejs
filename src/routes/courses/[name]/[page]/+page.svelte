<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.page.chapterNumber}. {data.page.title}</h1>
<p>{data.page.description}</p>
