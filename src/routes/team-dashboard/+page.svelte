<script>
	import { ColumnRender } from '$lib/components';
	import { surveyQuestions } from '$lib/config';

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
	{selectedTeam} Team has recorded {getTeamSurveyCount(data, selectedTeam)} sprint entries.
	<figure>
		<table role="grid">
			<caption><strong>Health Check Trend</strong></caption>
			<thead>
				<tr>
					<th scope="col"><em>Category</em></th>
					<ColumnRender {data} fieldName="sprint" team={selectedTeam} />
					<!-- {#each data.records as record}
						<td>{record.sprint}</td>
					{/each} -->
				</tr>
			</thead>
			<tbody>
				{#each surveyQuestions as { question, good }, count}
					<tr>
						<th scope="row" data-tooltip={good} data-placement="right">
							<b>{count + 1}. {question}</b>
						</th>
						<ColumnRender
							{data}
							fieldName={question.toLowerCase().split(' ').join('_')}
							team={selectedTeam}
						/>
					</tr>
				{/each}
			</tbody>
			<!-- <tfoot>
				<th scope="row">Overall</th>
			</tfoot> -->
		</table>
	</figure>
{/if}
