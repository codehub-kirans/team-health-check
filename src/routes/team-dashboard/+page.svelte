<script>
	import { ColumnRender } from '$lib/components';
	export let data;
	let recordCount = 1;
	let selectedTeam = '';
	function getTeamSurveyCount(data, selectedTeam) {
		let entries = 0;

		for (const value of data.records) {
			if (value['team'] === selectedTeam) {
				entries++;
			}
		}
		return entries;
	}
</script>

<h1>Team Health Check Dashboard</h1>
{#if data.records.length === 0}
	<p>Looks like no team health check data is available.</p>
{:else}
	Select team to display dashboard results.
	<select bind:value={selectedTeam} name="team" role="button" class="contrast" required>
		<option value="" disabled selected>Select Team</option>
		{#each data.teams as teams}
			<option value={teams.team}>{teams.team}</option>
		{/each}
	</select>
{/if}

{#if selectedTeam}
	<!-- You selected {selectedTeam}. Team has recorded {data.records.length} entries. -->
	{selectedTeam} Team has recorded {getTeamSurveyCount(data, selectedTeam)} entries.
	<figure>
		<table role="grid">
			<caption><strong>Health Check Trend</strong></caption>
			<thead>
				<tr>
					<th scope="col">Category</th>
					<ColumnRender {data} fieldName="sprint" team={selectedTeam} />
					<!-- {#each data.records as record}
						<td>{record.sprint}</td>
					{/each} -->
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">{recordCount++}. Delivering Value</th>
					<ColumnRender {data} fieldName="delivering_value" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Code Base Health</th>
					<ColumnRender {data} fieldName="code_base_health" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Task Planning & Priority</th>
					<ColumnRender {data} fieldName="task_planning_and_priority" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Information sharing</th>
					<ColumnRender {data} fieldName="information_sharing" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Team Work</th>
					<ColumnRender {data} fieldName="team_work" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Events</th>
					<ColumnRender {data} fieldName="events" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Learning And Fun</th>
					<ColumnRender {data} fieldName="learning_and_fun" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Pawns or Players</th>
					<ColumnRender {data} fieldName="pawns_or_players" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Product Ownership</th>
					<ColumnRender {data} fieldName="product_ownership" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Speed & Incremental Deliveries</th>
					<ColumnRender {data} fieldName="speed_and_incremental_deliveries" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Easy to Release</th>
					<ColumnRender {data} fieldName="easy_to_release" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Suitable Processes</th>
					<ColumnRender {data} fieldName="suitable_processes" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Tooling</th>
					<ColumnRender {data} fieldName="tooling" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Support</th>
					<ColumnRender {data} fieldName="support" team={selectedTeam} />
				</tr>
				<tr>
					<th scope="row">{recordCount++}. Leading Team by Example</th>
					<ColumnRender {data} fieldName="leading_team_by_example" team={selectedTeam} />
				</tr>
			</tbody>
			<!-- <tfoot>
				<th scope="row">Overall</th>
			</tfoot> -->
		</table>
	</figure>
{/if}
