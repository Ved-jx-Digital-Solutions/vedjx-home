<script>
    import Typewriter from 'svelte-typewriter'
</script>

<div class="h-screen w-full bg-slate-900 flex flex-col justify-center items-center">
    <h1 class="font-bold md:text-[65px] text-5xl">
        Ved.jx
    </h1>
    <h1 class="font-bold md:text-[65px] text-5xl pb-3">
        Digital Solutions
    </h1>

    <div class="flex text-[20px] uppercase md:text-[30px] font-semibold ">
        We provide&nbsp;
        <Typewriter mode="loop" cursor={false} interval={[66, 76, 74, 70, 63, 54, 63, 64, 74, 64]}>
            <p class="text-[#50d89b]">Custom solutions...</p>
            <p class="text-[#50d89b]">concise user interfaces...</p>
            <p class="text-[#50d89b]">a digital identity</p>
        </Typewriter>
    </div>

</div>