<script>
    import "../app.css";
    import Navbar from '$lib/components/Navbar.svelte'
</script>

<Navbar />
<div class="max-w-[1500px] mx-auto min-h-screen text-white">
    <slot />
</div>
