<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<ul>
			<li class:active={path === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={path === '/courses'}>
				<a href="/courses">Courses</a>
			</li>
			<li class:active={path === '/admin/courses'}>
				<a href="/admin/courses">Admin</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		margin-top: 5vh;
	}

	ul {
		height: 5vh;
		display: flex;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active a {
		background-color: blanchedalmond;
	}

	nav a {
		border-radius: 20px 20px 0 0;
		background: rgba(255, 255, 255, 0.7);
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2em;
	}

	a {
		border-right: 1px solid black;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
