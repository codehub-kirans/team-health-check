<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';

	export let data;
</script>

<!-- Contents of this file will be used in the header -->

<ul>
	{#each navItems as page}
		{#if !data.user}
			{#if !page.title.startsWith('Logout') && !page.title.startsWith('Voting') && !page.title.startsWith('My Dashboard') && !page.title.startsWith('Team Dashboard')}
				<li>
					<NavItem href={page.route}>
						{page.title}
					</NavItem>
				</li>
			{/if}
		{:else if !page.title.startsWith('Login') && !page.title.startsWith('Register')}
			<li>
				<NavItem href={page.route}>
					{page.title}
				</NavItem>
			</li>
		{/if}
	{/each}
</ul>
