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

    <div class="flex text-[20px] md:text-[30px] font-semibold text-[#50d89b]">
        &nbsp;
        <Typewriter mode="loopOnce" cursor={false} interval={[66, 76, 74, 70, 63, 54, 63, 64, 74, 64]}>
            <p class="uppercase">Custom solutions...</p>
            <p class="uppercase">Knoxville based...</p>
            <p class="uppercase">grow your business</p>
        </Typewriter>
    </div>

</div>