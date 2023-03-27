<script>
	export let id;
	export let label;
</script>

<div>
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">{label}</span>
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
</div>
