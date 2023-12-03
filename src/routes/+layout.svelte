<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '$lib/stylesheet/app.scss';
</script>

<Header />

<main>
	<div>
		<slot />
	</div>
</main>

<footer />

<style lang="scss">
	@import '../lib/stylesheet/design/colors.scss';
	main {
		background-color: $colorPaper;
		min-height: 90vh;
		width: 70.7108562378vw;
	}
	main > div {
		text-align: center;
		padding: 10vh 5rem;
		min-height: 70vh;
	}
</style>
