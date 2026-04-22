<script>
	import { ColumnRender, CommentsModal } from '$lib/components';
	import { surveyQuestions } from '$lib/config';

	export let data;
	let recordCount = 1;
	let selectedTeam = '';
	let openSprint = '';
	let modalOpen = false;

	function getTeamSurveyCount(data, selectedTeam) {
		let entries = 0;

		for (const value of data.records) {
			if (value['team'] === selectedTeam) {
				entries++;
			}
		}
		return entries;
	}

	function openSprintComments(sprint) {
		openSprint = sprint;
		modalOpen = true;
	}

	$: if (selectedTeam !== undefined) {
		// reset the modal whenever the user picks a different team
		modalOpen = false;
		openSprint = '';
	}

	$: filteredComments = data.comments
		? data.comments.filter(
				(c) => c.sprint === openSprint && (selectedTeam === '' || c.team === selectedTeam)
		  )
		: [];
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
			<caption><strong>Health Check Trend</strong> — click a sprint to see comments</caption>
			<thead>
				<tr>
					<th scope="col"><em>Category</em></th>
					<ColumnRender
						{data}
						fieldName="sprint"
						team={selectedTeam}
						onSprintClick={openSprintComments}
					/>
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
		</table>
	</figure>

	<CommentsModal
		bind:open={modalOpen}
		sprint={openSprint}
		title={`Team ${selectedTeam} — comments for sprint ${openSprint}`}
		comments={filteredComments}
	/>
{/if}
