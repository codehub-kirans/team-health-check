<script>
  import MainNav from "./MainNav.svelte";
  import { siteAuthor } from "$lib/config";
</script>

<footer>
  <MainNav />
  <p>
    &copy; {new Date().getFullYear()}
    {siteAuthor}. All rights reserved. <br />
  </p>
</footer>
