<script>
    import Icon from '@iconify/svelte';

    let menuOpen = false;
</script>

<div class="w-full centered text-white z-30 flex justify-between items-center bg-[#212121] h-[90px] fixed max-w-[1500px] pl-5 pr-2 mx-auto">
    <h1 class="font-bold text-2xl">Ved.jx</h1>
    <ul class="lg:flex hidden font-semibold">
        <a href="/" on:click={() => menuOpen = false}><li class="px-3">Home</li></a>
        <a href="services" on:click={() => menuOpen = false}><li class="px-3">Services</li></a>
        <a href="about" on:click={() => menuOpen = false}><li class="px-3">About Us</li></a>
        <a href="contact" on:click={() => menuOpen = false}><li class="px-3">Contact</li></a>
    </ul>

    <!-- Hamburger menu -->
    <button class={`lg:hidden text-[35px] p-3 transition-all ease-in-out rounded-xl duration-150 ${menuOpen ? 'bg-[#121212]' : 'bg-[#212121]'}`} on:click={() => menuOpen = !menuOpen}>
        <Icon icon="lucide:menu" />
    </button>
</div>

<div class={`transition-all z-20 uppercase bg-[#0b0b0b] font-semibold min-w-[250px] text-white lg:hidden ease-in-out duration-150 ${menuOpen ? 'right-0' : 'md:right-[-40%] right-[-250px]'} fixed pt-[90px] w-[250px] top-0 md:w-[40%] h-full border-l border-gray-600`}>
    <ul>
        <a href="/" on:click={() => menuOpen = false}>
            <li class="p-4 border-b border-gray-600">Home</li>
        </a>
        <a href="services" on:click={() => menuOpen = false}>
            <li class="p-4 border-b border-gray-600">Services</li>
        </a>
        <a href="about" on:click={() => menuOpen = false}>
            <li class="p-4 border-b border-gray-600">About Us</li>
        </a>
        <a href="contact" on:click={() => menuOpen = false}>
            <li class="p-4">Contact</li>
        </a>
    </ul>
</div>