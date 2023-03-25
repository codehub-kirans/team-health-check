<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';

	export let data;
</script>

<!-- Contents of this file will be used in the header -->
<nav>
	<ul>
		{#each navItems as page}
			{#if !data.user}
				{#if !page.title.startsWith('Logout')}
					<NavItem href={page.route}>
						{page.title}
					</NavItem>
				{/if}
			{:else}
				<NavItem href={page.route}>
					{page.title}
				</NavItem>
			{/if}
		{/each}
	</ul>
</nav>
