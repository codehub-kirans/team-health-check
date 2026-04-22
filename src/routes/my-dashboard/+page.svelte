<script>
	import { ColumnRender, CommentsModal } from '$lib/components';
	import { surveyQuestions } from '$lib/config';

	export let data;

	let openSprint = '';
	let modalOpen = false;

	function openSprintComments(sprint) {
		openSprint = sprint;
		modalOpen = true;
	}

	$: filteredComments = data.records
		? data.records.filter((r) => r.sprint === openSprint)
		: [];
</script>

<h1>My Voting History Dashboard</h1>
{#if data.records.length === 0}
	<p>Looks like you have not voted yet.</p>
{:else}
	You have voted {data.records.length} time(s).
	<figure>
		<table role="grid">
			<caption><strong>Health Check Trend</strong> — click a sprint to see your comments</caption>
			<thead>
				<tr>
					<th scope="col"><em>Category</em></th>
					<ColumnRender {data} fieldName="sprint" onSprintClick={openSprintComments} />
				</tr>
			</thead>
			<tbody>
				{#each surveyQuestions as { question, good }, count}
					<tr>
						<th scope="row" data-tooltip={good} data-placement="right">
							<b>{count + 1}. {question}</b>
						</th>
						<ColumnRender {data} fieldName={question.toLowerCase().split(' ').join('_')} />
					</tr>
				{/each}
			</tbody>
		</table>
	</figure>

	<CommentsModal
		bind:open={modalOpen}
		sprint={openSprint}
		title={`My comments for sprint ${openSprint}`}
		comments={filteredComments}
	/>
{/if}
