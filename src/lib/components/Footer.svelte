<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';

	export let data;
</script>

<footer class="container">
	<nav>
		<MainNav {data} />
	</nav>
	<p>
		&copy; {new Date().getFullYear()}
		{siteAuthor}. All rights reserved. <br />
	</p>
</footer>
