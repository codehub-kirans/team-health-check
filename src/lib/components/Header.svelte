<script>
  import MainNav from "./MainNav.svelte";
  import { siteTitle } from "$lib/config";

  const focusMain = () => {
    const main = document.querySelector("main");
    main.focus();
  };
</script>

<header>
  <a href="/" class="site-title">
    {siteTitle}
  </a>

  <MainNav />
</header>
