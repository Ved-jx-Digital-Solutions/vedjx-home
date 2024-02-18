<script>
    import Icon from '@iconify/svelte';

    let menuOpen = false;
</script>

<div class="w-full text-white z-30 flex justify-between items-center bg-[#212121] h-[90px] fixed max-w-[1500px] pl-5 pr-2 mx-auto">
    <h1 class="font-bold text-2xl">Ved.jx</h1>
    <ul class="lg:flex hidden font-semibold">
        <a href="/"><li class="px-3">Home</li></a>
        <a href="services"><li class="px-3">Services</li></a>
        <a href="about"><li class="px-3">About Us</li></a>
        <a href="contact"><li class="px-3">Contact</li></a>
    </ul>

    <!-- Hamburger menu -->
    <button class={`lg:hidden text-[35px] p-3 transition-all ease-in-out rounded-xl duration-150 ${menuOpen ? 'bg-[#121212]' : 'bg-[#212121]'}`} on:click={() => menuOpen = !menuOpen}>
        <Icon icon="lucide:menu" />
    </button>
</div>

<div class={`transition-all lg:hidden ease-in-out duration-150 ${menuOpen ? 'right-0' : 'right-[-40%]'} fixed pt-[90px] top-0 w-[40%] h-full bg-[#121212]`}>
    d
</div>