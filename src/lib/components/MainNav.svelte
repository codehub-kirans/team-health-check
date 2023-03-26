<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';

	export let data;
</script>

<!-- Contents of this file will be used in the header -->

<ul>
	{#each navItems as page}
		<li>
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
		</li>
	{/each}
</ul>
