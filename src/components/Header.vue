<template >
    <!-- // header -->
    <div :class="{'dark': dark==true, 'light': dark==false}" class=" w-full h-auto">
        <!-- particles js  -->
        <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
            url="../public/random.json" />

        <!-- navbar -->
        <Navbar />


        <div class="header dark:bg-blue-300 w-full flex justify-center items-center bg--300 h-screen">
            <div class="index__header flex justify-center items-center ">

                <!-- hero section -->
                <section>
                    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                        <!-- personnal information -->
                        <div class="mr-auto place-self-center lg:col-span-7">


                            <h1 class="header__animation text-3xl text-red-400 uppercase pb-3"
                                style="font-family: 'Fira Code';">Hi_ 👋 ,
                                je suis </h1>

                            <!-- name and position -->
                            <h1 style="color: #2C3E50; "
                                class=" text- mb-4 header__title header__animation text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                                Wilfried N'SOUKPOE </h1>
                            <h1
                                class="header__animation mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-7xl">
                                Full Stack Web Developer<span class="text-" style="color: #2C3E50;">.( )</span></h1>
                            <!--  <span
                                    class="text-red-400 arrow-function" >=></span> -->
                            <!-- description of myself -->
                            <p class=" header__animation max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg lg:text-xl"
                                style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                                Je suis développeur web Full Stack et passionné de nouvelles technologies depuis tout
                                jeune.J'aime construire des applications web complexes avec une expérience
                                utilisateur unique.</p>

                            <!-- Get in touch button -->
                            <div class="header__animation">
                                <Button class="uppercase" :blank="false" text="Me contacter" link="#contact" />
                            </div>
                        </div>


                        <!-- image of code  -->
                        <div class="header__animation hidden lg:mt-0 lg:col-span-5 lg:flex justify-end items-center">
                            <!-- dark mode radial-gradient(#2C3E50, transparent) -->
                            <div class="rounded-lg shadow-xl bg-gray-900 text-white"
                                style="width:450px;height: 270px;background: #2C3E50; margin-left:30px; font-family:'Fira Code'; transform: scale(1.0) translate(1px, 5px) skew(6deg, -5deg);">
                                <div class="border-b border-gray-800 px-8 py-3">
                                    <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                                    <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                                    <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                                </div>
                                <div class="px-8 py-6">
                                    <!-- declare function -->
                                    <p><em class="text-blue-400">const</em> <span class="text-green-400">aboutMe</span>
                                        <span class="text-pink-500">=</span> <em class="text-blue-400">function</em>() {
                                    </p>

                                    <p class="ml-2"><span class="text-pink-500">return</span> {</p>
                                    <p class="ml-6">github: <span class="text-yellow-300"><a
                                                href="https://github.com/nsWilfried/" target="_blank"
                                                class="text-yellow-300 hover:underline focus:border-none">"Github.com/nsWilfried/"</a>
                                        </span>,</p>
                                    <p class="ml-6">position: <span
                                            class="text-white bg-red-400">'Full Stack Dev'</span>,</p>
                                    <!-- <p class="ml-6">linkedin: <span class="text-yellow-300">'<a
                                                href="https://nsWilfried.com" target="_blank"
                                                class="text-yellow-300 hover:underline focus:border-none">https://nsWilfried.com</a>'</span>,
                                    </p> -->
                                    <p class="ml-2">}</p>
                                    <p>}</p>
                                </div>
                            </div>
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
    // console.log("les particules sont lancées")
}
export default {
    components: { Button, Navbar },
    data() {
        return {
            dark: false,
            particlesLoaded, particlesInit
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables";

.index__header {
    width: $secondary-width;
    // background-color: yellow;
    color: #6c7794;
    height: 100%;
    z-index: 1;
    // @apply bg-green-300; 
    /* background-color: ; */
}

@media only screen and (min-width: 150px) and (max-width: 1000px) {
    .header__title {
        font-size: 3em;
    }

    .arrow-function {
        display: none;
    }

    // .header {
    //     height: auto;
    //     // background-color: red;
    //     margin-top: 30px;
    //     margin-bottom: 30px;
    // }
}
</style>