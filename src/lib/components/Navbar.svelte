<script>
    import Icon from '@iconify/svelte';

    let menuOpen = false;

    const handleOpen = () => {
        menuOpen = !menuOpen
        document.body.classList.add("noScroll")
    }

    const handleClose = () => {
        menuOpen = !menuOpen
        document.body.classList.remove("noScroll")
    }
</script>

<div class="w-screen bg-[#212121] fixed h-[90px] z-40">
    <div class="w-full centered text-white flex justify-between items-center h-[90px] fixed max-w-[1500px] pl-5 pr-2 mx-auto">
        <a href="/" on:click={() => handleOpen()}><h1 class="font-bold text-2xl text-[#50d89b]">Ved.jx</h1></a>
        <ul class="lg:flex hidden text-xl font-semibold">
            <a href="/" on:click={() => handleOpen()}><li class="px-3">Home</li></a>
            <a href="services" on:click={() => handleOpen()}><li class="px-3">Services</li></a>
            <a href="about" on:click={() => handleOpen()}><li class="px-3">About Us</li></a>
            <a href="contact" on:click={() => handleOpen()}><li class="px-3">Contact</li></a>
        </ul>
    
        <!-- Hamburger menu -->
        <button class={`lg:hidden text-[35px] p-3 transition-all ease-in-out rounded-xl duration-150 ${menuOpen ? 'bg-[#121212]' : 'bg-[#212121]'}`} on:click={() => handleOpen()}>
            <Icon icon="lucide:menu" />
        </button>
    </div>
</div>

{#if menuOpen}
    <button class={`${menuOpen ? 'right-0' : 'right-[-100%]'} lg:hidden overflow-x-hidden overflow-y-hidden w-full cursor-auto h-screen fixed top-0 right-0 bg-gray-500/20 blur-lg`} on:click={() => handleClose()}></button>
{/if}

<div class={`transition-all z-30 uppercase bg-[#0b0b0b] font-semibold min-w-[250px] text-white lg:hidden ease-in-out duration-150 ${menuOpen ? 'right-0' : 'md:right-[-40%] right-[-250px]'} fixed pt-[90px] w-[250px] top-0 md:w-[40%] h-full border-l border-gray-600`}>
    <ul>
        <a href="/" on:click={() => handleClose()}>
            <li class="p-4 border-b border-gray-600">Home</li>
        </a>
        <a href="services" on:click={() => handleClose()}>
            <li class="p-4 border-b border-gray-600">Services</li>
        </a>
        <a href="about" on:click={() => handleClose()}>
            <li class="p-4 border-b border-gray-600">About Us</li>
        </a>
        <a href="contact" on:click={() => handleClose()}>
            <li class="p-4">Contact</li>
        </a>
    </ul>
</div>