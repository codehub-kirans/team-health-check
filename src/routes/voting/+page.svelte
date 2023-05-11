<script>
	import { RadioInput } from '$lib/components';
	import { surveyQuestions } from '$lib/config';

	export let data;
	let selectedSprint = '';

	function getUnvotedSprints(data) {
		let allSprints = new Set();
		let votedSprints = new Set();
		let result = [];

		for (const value of data.sprints) {
			allSprints.add(value.sprint);
		}

		for (const value of data.votedSprints) {
			votedSprints.add(value.sprint);
		}

		for (let i of allSprints) {
			if (!votedSprints.has(i)) {
				result.push(i);
			}
		}

		return result;
	}
</script>

<h1>New Vote</h1>

<article class="grid">
	<div>
		<hgroup>
			<h2>
				<span data-tooltip="You can only vote for unvoted sprints" data-placement="right">
					Enter your vote:
				</span>
			</h2>
		</hgroup>
		<form action="?/create" method="POST">
			<!-- <label for="sprint">Sprint</label>
			<input
				id="sprint"
				type="text"
				name="sprint"
				placeholder="FB2301"
				minlength="6"
				maxlength="6"
				required
			/> -->

			{#if data.sprints.length === 0}
				<p>
					Looks like no sprints have been configured. Please contact your admin to add sprints to
					the sprints table.
				</p>
			{:else}
				<select bind:value={selectedSprint} name="sprint" role="button" class="contrast" required>
					<option value="" disabled selected>Select Sprint</option>
					{#each getUnvotedSprints(data) as sprint}
						<option value={sprint}>{sprint}</option>
					{/each}
				</select>
			{/if}

			{#each surveyQuestions as { question, good }, count}
				<RadioInput
					id={question.toLowerCase().split(' ').join('_')}
					label={question}
					toolTip={good}
					{count}
				/>
			{/each}

			<button>Submit</button>
		</form>
	</div>
</article>
