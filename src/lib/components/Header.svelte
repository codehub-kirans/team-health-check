<script>
	import MainNav from './MainNav.svelte';
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<header class="container">
	<nav>
		<ul>
			<li>
				<strong>
					<a href="/">
						{siteTitle}
					</a>
				</strong>
			</li>
		</ul>

		<MainNav {data} />
	</nav>
</header>
