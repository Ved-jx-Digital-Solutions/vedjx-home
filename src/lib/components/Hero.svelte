<script>
    import Typewriter from 'svelte-typewriter'
    import { fade, fly } from 'svelte/transition'
    import { onMount } from 'svelte'
    import Logo from '$lib/images/Logo.svg?raw';

    let transitionReady = false
    
    onMount(async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(0)
        transitionReady = true
    })

</script>


<div class="md:h-[40vh] bg-[#042b34] text-nowrap text-center h-screen w-full flex flex-col justify-center items-center">
    {#if transitionReady}
        <div transition:fly={{ x: -100, duration: 1000 }} class="w-full h-full flex justify-center items-center flex-col">
            <h1 class="font-bold mb-[-15px] w-[250px] md:w-[275px]">
                {@html Logo}
            </h1>
            <h1 class="font-bold md:text-[65px] text-[45px]  pb-3">
                Web Solutions
            </h1>
    
            <div class="flex text-[18px] uppercase md:text-[25px] font-semibold min-w-[300px] justify-center">
                We provide&nbsp;
                <Typewriter mode="loop" cursor={false} interval={[66, 76, 74, 70, 63, 54, 63, 64, 74, 64]}>
                    <p class="text-[#38c5fd]">Custom solutions...</p>
                    <p class="text-[#38c5fd]">free quotes...</p>
                    <p class="text-[#38c5fd]">a digital identity...</p>
                    <p class="text-[#38c5fd]">full stack development...</p>
                </Typewriter>
            </div>
        </div>
    {/if}
</div>