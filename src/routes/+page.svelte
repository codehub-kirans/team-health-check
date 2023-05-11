<script>
	import SurveyQuestion from '$lib/components/SurveyQuestion.svelte';
	import { surveyQuestions } from '$lib/config';
</script>

<h1>Welcome to the Team Health Check App!</h1>
<article>
	<div>
		<p>
			Team (Squad) health check web application is a tool for quick assessment and visualization of
			how Agile teams perform in three aspects: tech health, team health, and product health. It
			uses a set of behaviour anchors on relevant themes for a high performing team to discuss and
			capture sentiment. For each question or theme, the team/squad discusses if they are closer to
			“awesome” or closer to “bad”, which colour to choose for that indicator, and what the trend is
			(stable, improving, or getting worse). For example, the theme "can we release easily?" might
			elicit responses of "our releases are good/meh/bad" i.e. green, amber and red, the colours of
			a traffic light.
		</p>
		<p>
			<b style="color: green;">GREEN</b>: Things are going very well. Although this does not mean
			that everything is perfect the team or squad is satisfied and does not see much space for
			improvement. <br />
			<b style="color: #ffcc00 ">AMBER</b>: There are some problems that need to be solved. However,
			it is not a disaster.
			<br />
			<b style="color: red;">RED</b>: There is a lot going wrong. Improvements are urgently needed.
			<br />
		</p>
		<p>
			The main purpose of this model is to help teams build up self-awareness about what's working
			and what's not, and to identify improvement opportunities. It also provides leaders with a way
			to support, not judge, teams. The app gathers feedback from everyone in real time and
			calculates the results. The results are displayed in a multi-team-level visualization, so that
			patterns and trends can be observed and addressed. The app can also keep a track of the squads
			progress over time without the need for manual collation.
		</p>
	</div>
</article>
<article>
	<div>
		<p>Following are the detailed descriptions of the behavior anchors:</p>
		<ol>
			{#each surveyQuestions as { question, good, bad }}
				<SurveyQuestion {question} {good} {bad} />
			{/each}
		</ol>
	</div>
</article>
