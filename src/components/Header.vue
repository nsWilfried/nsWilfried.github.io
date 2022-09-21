<template >
    <!-- // header -->
    <div class=" w-full h-screen ">
        <!-- navbar -->
        <Navbar />

        <div class="w-full flex justify-center items-center" style="height: 90%;">
            <div class="index__header flex justify-center items-center ">

                <!-- particules js -->
                <!-- <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
                    url="../public/particlesjs-config.json" /> -->

                <!-- hero section -->
                <section class="bg- dark:bg-gray-900">
                    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div class="mr-auto place-self-center lg:col-span-7">
                            <h1>Hi, je suis </h1>
                            <h1
                                class=" mb-4 text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                                Wilfried N'SOUKPOE </h1>
                            <h1
                                class=" mb-4 text-white text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                                Web Developer</h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequuntur, dignissimos
                                ut hic ab dolore recusandae, provident, aliquam similique eaque ex. Quaerat ea illum,
                                reiciendis minima ipsam ad atque alias.</p>
                            <Button text="Me contacter" link="/" />
                        </div>
                        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <!-- <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"> -->
                        </div>
                    </div>
                </section>


            </div>
        </div>

    </div>

</template>
<script>
import Button from './Button.vue';
import Navbar from './Navbar.vue';

import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
    await loadFull(engine);
}

const particlesLoaded = async (container) => {
    console.log("Particles container loaded", container);
}
export default {
    components: { Button, Navbar },
    data() {
        return {
            particlesLoaded, particlesInit
        }
    }
}
</script>
<style lang="css" scoped>
.index__header {
    width: 1320px;
    color: #6c7794;
    height: 100%;
    z-index: 31;
    /* background-color: ; */
}
</style>