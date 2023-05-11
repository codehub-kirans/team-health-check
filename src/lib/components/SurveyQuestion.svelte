<script>
	export let question;
	export let good;
	export let bad;
</script>

<li>
	<b>{question}</b>
	<ul>
		<li><span class="good">Good:</span> {good}</li>
		<li><span class="bad">Bad:</span> {bad}</li>
	</ul>
</li>
<br />

<style>
	.good {
		color: green;
	}

	.bad {
		color: red;
	}
</style>
