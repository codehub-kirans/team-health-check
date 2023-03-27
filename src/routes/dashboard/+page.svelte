<script>
	export let data;
	let recordCount = 1;
</script>

<h1>Team Health Check Dashboard</h1>
{#if data.records.length === 0}
	<p>Looks like no health check data is available.</p>
{:else}
	Table has {data.records.length} entries.
	<figure>
		<table role="grid">
			<caption><strong>Health Check Trend</strong></caption>
			<thead>
				<tr>
					<th scope="col">Category</th>
					{#each data.records as record}
						<td>{record.sprint}</td>
					{/each}
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">{recordCount++}. Delivering Value</th>
					{#each data.records as record}
						<td>{record.delivering_value}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Code Base Health</th>
					{#each data.records as record}
						<td>{record.code_base_health}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Task Planning & Priority</th>
					{#each data.records as record}
						<td>{record.task_planning_and_priority}</td>
					{/each}
				</tr>
				<tr
					><th scope="row">{recordCount++}. Information sharing</th>
					{#each data.records as record}
						<td>{record.information_sharing}</td>
					{/each}
				</tr>
				<tr
					><th scope="row">{recordCount++}. Team Work</th>
					{#each data.records as record}
						<td>{record.team_work}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Events</th>
					{#each data.records as record}
						<td>{record.events}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Learning And Fun</th>
					{#each data.records as record}
						<td>{record.learning_and_fun}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Pawns or Players</th>
					{#each data.records as record}
						<td>{record.pawns_or_players}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Product Ownership</th>
					{#each data.records as record}
						<td>{record.code_base_health}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Speed & Incremental Deliveries</th>
					{#each data.records as record}
						<td>{record.product_ownership}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Easy to Release</th>
					{#each data.records as record}
						<td>{record.easy_to_release}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Suitable Processes</th>
					{#each data.records as record}
						<td>{record.suitable_processes}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Tooling</th>
					{#each data.records as record}
						<td>{record.tooling}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Support</th>
					{#each data.records as record}
						<td>{record.support}</td>
					{/each}
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Leading Team by Example</th>
					{#each data.records as record}
						<td>{record.leading_team_by_example}</td>
					{/each}
				</tr>
			</tbody>
			<!-- <tfoot>
				<th scope="row">Overall</th>
			</tfoot> -->
		</table>
	</figure>
{/if}
