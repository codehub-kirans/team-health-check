<script>
	import { RadioInput } from '$lib/components';
</script>

<h1>New Vote</h1>

<article class="grid">
	<div>
		<hgroup><h2>Enter your vote:</h2></hgroup>
		<form action="?/create" method="POST">
			<label for="sprint">Sprint</label>
			<input
				id="sprint"
				type="text"
				name="sprint"
				placeholder="FB2301"
				minlength="6"
				maxlength="6"
				required
			/>
			<RadioInput id="delivering_value" label="Delivering Value" />
			<RadioInput id="code_base_health" label="Code Base Health" />
			<RadioInput id="task_planning_and_priority" label="Task Planning & Priority" />
			<RadioInput id="information_sharing" label="Information sharing" />
			<RadioInput id="team_work" label="Team Work" />
			<RadioInput id="events" label="Events" />
			<RadioInput id="learning_and_fun" label="Learning And Fun" />
			<RadioInput id="pawns_or_players" label="Pawns or Players" />
			<RadioInput id="product_ownership" label="Product Ownership" />
			<RadioInput id="speed_and_incremental_deliveries" label="Speed & Incremental Deliveries" />
			<RadioInput id="easy_to_release" label="Easy to Release" />
			<RadioInput id="suitable_processes" label="Suitable Processes" />
			<RadioInput id="tooling" label="Tooling" />
			<RadioInput id="support" label="Support" />
			<RadioInput id="leading_team_by_example" label="Leading Team by Example" />
			<button>Submit</button>
		</form>
	</div>
</article>
