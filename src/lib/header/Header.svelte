<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav data-sveltekit-preload-data>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/coursus'}>
				<a href="/courses">Courses</a>
			</li>
			<li class:active={$page.url.pathname === '/progress'}>
				<a href="/progress">Progress</a>
			</li>
			<li>
				<a href="/">FAQ</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
	}

	nav {
		display: flex;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0 0 10px 10px;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
