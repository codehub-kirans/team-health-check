<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';

	export let data;
</script>

<footer>
	<MainNav {data} />
	<p>
		&copy; {new Date().getFullYear()}
		{siteAuthor}. All rights reserved. <br />
	</p>
</footer>
