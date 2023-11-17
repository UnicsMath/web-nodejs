<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;

	export let form: ActionData;
</script>

{#if form?.success}
	<p>Successfully logged in! Welcome back</p>
	<p>{data.user}</p>
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
