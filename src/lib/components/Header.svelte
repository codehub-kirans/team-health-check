<script>
	import MainNav from './MainNav.svelte';
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<header class="container-fluid">
	<nav>
		<ul>
			<li>
				<strong>
					<a href="/" class="secondary">
						{siteTitle}
					</a>
				</strong>
			</li>
		</ul>

		<MainNav {data} />
	</nav>
</header>
