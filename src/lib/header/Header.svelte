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
		margin-top: 7vh;
	}

	nav {
		max-width: 400px;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		height: 3vh;
		flex-grow: 1;
	}

	li.active a {
		background-color: blanchedalmond;
	}

	nav a {
		border-radius: 20px 20px 0 0;
		background: #ffffff;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		padding: 0 2em;
	}

	a {
		border-right: 1px solid black;
	}

	a:hover {
		color: var(--accent-color);
	}

	@media only screen and (max-width: 393px) {
		a {
			border: 1px solid black;
		}
		nav a {
			border-radius: 0;
		}
	}
</style>
