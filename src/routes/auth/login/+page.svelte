<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<svelte:head>
	<title>Sign in</title>
	<meta
		name="description"
		content="Sign in to track your Math progress, ask question, and manage subscriptions."
	/>
</svelte:head>

{#if form?.success}
	<p>Successfully logged in! Welcome back</p>
	<p>JWT: {data.jwt}</p>
{/if}

<form method="POST">
	<label>
		Email
		<input name="email" type="email" required />
	</label>
	<label>
		Password
		<input name="password" type="password" required />
	</label>
	<button>Log in</button>
</form>
