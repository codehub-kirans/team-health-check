<script>
	export let data = []; //array of records
	export let fieldName = ''; //field name to use for cell data
	export let team = ''; //tean name to filter for results
</script>

{#each data.records as record}
	{#if team === '' || record['team'] === team}
		{#if record[fieldName] >= -2 && record[fieldName] <= -1}
			<td style="background-color: red;">🙁</td>
		{:else if record[fieldName] > -1 && record[fieldName] < 1}
			<td style="background-color: #ffcc00;">😐</td>
		{:else if record[fieldName] <= 2 && record[fieldName] >= 1}
			<td style="background-color: green;">🥳</td>
		{:else}
			<td>{record[fieldName]}</td>
		{/if}
	{/if}
{/each}
