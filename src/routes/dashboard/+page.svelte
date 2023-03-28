<script>
	import { ColumnRender } from '$lib/components';
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
					<ColumnRender {data} fieldName="sprint" />
					<!-- {#each data.records as record}
						<td>{record.sprint}</td>
					{/each} -->
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">{recordCount++}. Delivering Value</th>
					<ColumnRender {data} fieldName="delivering_value" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Code Base Health</th>
					<ColumnRender {data} fieldName="code_base_health" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Task Planning & Priority</th>
					<ColumnRender {data} fieldName="task_planning_and_priority" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Information sharing</th>
					<ColumnRender {data} fieldName="information_sharing" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Team Work</th>
					<ColumnRender {data} fieldName="team_work" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Events</th>
					<ColumnRender {data} fieldName="events" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Learning And Fun</th>
					<ColumnRender {data} fieldName="learning_and_fun" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Pawns or Players</th>
					<ColumnRender {data} fieldName="pawns_or_players" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Product Ownership</th>
					<ColumnRender {data} fieldName="product_ownership" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Speed & Incremental Deliveries</th>
					<ColumnRender {data} fieldName="speed_and_incremental_deliveries" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Easy to Release</th>
					<ColumnRender {data} fieldName="easy_to_release" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Suitable Processes</th>
					<ColumnRender {data} fieldName="suitable_processes" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Tooling</th>
					<ColumnRender {data} fieldName="tooling" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Support</th>
					<ColumnRender {data} fieldName="support" />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Leading Team by Example</th>
					<ColumnRender {data} fieldName="leading_team_by_example" />
				</tr>
			</tbody>
			<!-- <tfoot>
				<th scope="row">Overall</th>
			</tfoot> -->
		</table>
	</figure>
{/if}
