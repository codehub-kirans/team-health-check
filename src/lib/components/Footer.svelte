<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';

	export let data;
</script>

<footer class="container-fluid">
	<nav>
		<MainNav {data} />
	</nav>
	<small>
		&copy; {new Date().getFullYear()}
		{siteAuthor}. All rights reserved. <br />
	</small>
</footer>
