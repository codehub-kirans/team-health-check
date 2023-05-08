<script>
	import NavItem from '$lib/components/NavItem.svelte';
	const navigation = [
		{
			title: 'Profile',
			href: '/my-settings/profile'
		}
		// {
		// 	title: 'Account',
		// 	href: '/my-settings/account'
		// },
		// {
		// 	title: 'Security',
		// 	href: '/my-settings/security'
		// }
	];
</script>

<h2>Settings</h2>
<div class="divider" />

<article class="grid" style="grid-template-columns: 1fr 3fr;">
	<div>
		<ul>
			{#each navigation as navItem}
				<li>
					<NavItem href={navItem.href}>
						{navItem.title}
					</NavItem>
				</li>
			{/each}
		</ul>
	</div>
	<figure>
		<slot />
	</figure>
</article>
