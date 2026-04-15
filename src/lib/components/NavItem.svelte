<script>
	import { currentPage } from '$lib/assets/js/store';

	export let href;

	$: isCurrentPage = $currentPage.endsWith(href);
</script>

{#if isCurrentPage}
	<a {href} class="contrast">
		<slot />
	</a>
{:else}
	<a {href}>
		<slot />
	</a>
{/if}
