<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '$lib/stylesheet/app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer />

<style lang="scss">
	@import '../lib/stylesheet/design/colors.scss';
	main {
		background-color: #e0c9a6;
		max-width: 1350px;
		min-height: 80vh;
		margin: 10vh 10px 0;
		padding: 5vh 0;
		width: 100%;
		text-align: center;
	}
</style>
