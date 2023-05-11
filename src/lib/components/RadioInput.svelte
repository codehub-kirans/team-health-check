<script>
	export let count = '';
	export let id;
	export let label;
	export let toolTip;
</script>

<label for={id}>
	<span data-tooltip={toolTip} data-placement="right">{count + 1}. {label}</span>
</label>
{#each [2, 0, -2] as number}
	<label>
		<input type="radio" name={id} value={number} />

		{#if number === 2}
			Awsome! 🥳
		{:else if number === 0}
			Meh 😐
		{:else}
			Bad! 🙁
		{/if}
	</label>
{/each}
<br />
