<script>
    import Typewriter from 'svelte-typewriter'
</script>

<div class="h-screen w-full flex flex-col justify-center items-center">
    <h1 class="font-bold md:text-[65px] mb-[-20px] text-[40px]">
        Ved.jx
    </h1>
    <h1 class="font-bold md:text-[65px] text-[40px] pb-3">
        Digital Solutions
    </h1>

    <div class="flex text-[17px] uppercase md:text-[25px] font-semibold ">
        We provide&nbsp;
        <Typewriter mode="loop" cursor={false} interval={[66, 76, 74, 70, 63, 54, 63, 64, 74, 64]}>
            <p class="text-[#50d89b]">Custom solutions...</p>
            <p class="text-[#50d89b]">free consultations...</p>
            <p class="text-[#50d89b]">a digital identity...</p>
        </Typewriter>
    </div>

</div>