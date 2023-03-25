<script>
	import MainNav from './MainNav.svelte';
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<header>
	<a href="/" class="site-title">
		{siteTitle}
	</a>

	<MainNav {data} />
</header>
