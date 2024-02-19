<script>
    import Icon from '@iconify/svelte';
    import Logo from '$lib/images/Logo.svg?raw';

    let menuOpen = false;

    const handleOpen = () => {
        menuOpen = true
        document.body.classList.add("noScroll")
    }

    const handleClose = () => {
        menuOpen = false
        if (document.body.classList.contains("noScroll")) {
            document.body.classList.remove("noScroll")
        }
    }

    const handleMenu = () => {
        menuOpen = !menuOpen

        if (document.body.classList.contains("noScroll")) {
            document.body.classList.remove("noScroll")
        }
        else {
            document.body.classList.add("noScroll")
        }
    }
</script>

<div class="w-screen fixed bgColor h-[90px] z-40">
    <div class="w-full centered text-white flex justify-between items-center h-[90px] fixed max-w-[1500px] pl-5 pr-2 mx-auto">
        <a href="/" on:click={() => handleClose()}><h1 class="w-[100px]">
            {@html Logo}
        </h1></a>
        <ul class="lg:flex hidden text-xl font-semibold">
            <a href="/" on:click={() => handleClose()}><li class="px-3 duration-150 ease-in-out transition-all hover:text-[#38c5fd]">Home</li></a>
            <a href="services" on:click={() => handleClose()}><li class="px-3 duration-150 ease-in-out transition-all hover:text-[#38c5fd]">Services</li></a>
            <a href="about" on:click={() => handleClose()}><li class="px-3 duration-150 ease-in-out transition-all hover:text-[#38c5fd]">About Us</li></a>
            <a href="contact" on:click={() => handleClose()}><li class="px-3 duration-150 ease-in-out transition-all hover:text-[#38c5fd]">Contact</li></a>
        </ul>
    
        <!-- Hamburger menu -->
        <button class={`lg:hidden text-[35px] p-3 transition-all ease-in-out rounded-xl duration-150 ${!menuOpen ? 'bg-[#000000]' : 'bg-[#38c5fd]'}`} on:click={() => handleMenu()} >
            <Icon icon="lucide:menu" />
        </button>
    </div>
</div>

{#if menuOpen}
    <button class={`${menuOpen ? 'left-0' : 'left-[-100%]'} lg:hidden overflow-x-hidden overflow-y-hidden w-full cursor-auto h-screen fixed top-0 left-0 bg-gray-900/50`} on:click={() => handleMenu()}></button>
{/if}

<div class={`transition-all z-30 uppercase bg-[#0b0b0b] font-semibold min-w-[250px] text-white lg:hidden ease-in-out duration-150 ${menuOpen ? 'left-0' : 'md:left-[-40%] left-[-250px]'} fixed pt-[90px] w-[250px] top-0 md:w-[40%] h-full border-r border-gray-600`}>
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