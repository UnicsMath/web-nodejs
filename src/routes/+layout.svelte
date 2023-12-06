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
	@media only screen and (max-width: 1200px) {
		main {
			width: 80vw;
		}
		main > div {
			padding: 5vh 2rem;
		}
	}
	@media only screen and (max-width: 600px) {
		main {
			width: 100vw;
		}
		main > div {
			padding: 5vh 0;
		}
	}
</style>
