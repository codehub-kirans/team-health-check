<!-- Currently Not Used -->
<script>
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
</script>

<div>
	<label for={id}>
		<span>{label}</span>
	</label>
	<input {type} {placeholder} {required} {disabled} {id} name={id} {value} />
</div>
