<script>
	import { surveyQuestions } from '$lib/config';

	export let sprint = '';
	export let title = '';
	export let comments = [];
	export let open = false;

	let dialogEl;

	function questionKey(question) {
		return question.toLowerCase().split(' ').join('_');
	}

	function commentsForQuestion(question) {
		const key = questionKey(question) + '_comment';
		return comments
			.map((row) => (row && row[key] ? String(row[key]).trim() : ''))
			.filter((c) => c.length > 0);
	}

	$: if (dialogEl) {
		if (open && !dialogEl.open) dialogEl.showModal();
		if (!open && dialogEl.open) dialogEl.close();
	}

	function close() {
		open = false;
	}
</script>

<dialog bind:this={dialogEl} on:close={close}>
	<article>
		<header>
			<a href="#close" aria-label="Close" class="close" on:click|preventDefault={close}></a>
			<strong>{title || `Comments for sprint ${sprint}`}</strong>
		</header>

		{#if comments.length === 0}
			<p>No comments recorded for this sprint.</p>
		{:else}
			{#each surveyQuestions as { question }, idx}
				{@const items = commentsForQuestion(question)}
				{#if items.length > 0}
					<section>
						<h5>{idx + 1}. {question}</h5>
						<ul>
							{#each items as comment}
								<li>{comment}</li>
							{/each}
						</ul>
					</section>
				{/if}
			{/each}

			{#if surveyQuestions.every(({ question }) => commentsForQuestion(question).length === 0)}
				<p>No comments recorded for this sprint.</p>
			{/if}
		{/if}

		<footer>
			<button on:click={close}>Close</button>
		</footer>
	</article>
</dialog>
