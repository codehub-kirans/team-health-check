<script>
	export let data = []; //array of records
	export let fieldName = ''; //field name to use for cell data
</script>

{#each data.records as record}
	{#if record[fieldName] === -2}
		<td style="background-color: red;">🙁</td>
	{:else if record[fieldName] === 0}
		<td style="background-color: #ffcc00;">😐</td>
	{:else if record[fieldName] === 2}
		<td style="background-color: green;">🥳</td>
	{:else}
		<td>{record[fieldName]}</td>
	{/if}
{/each}
