<template>
    <!-- experience -->
    <div id="experience" class="section">
        <div class="experience h-full flex flex-col  justify-center">
            <!-- experience title -->
            <div class="h-auto w-full bg-green-">
                <h1 class="section__title primary-font font-bold" >03.<span
                        class="text-white" style=" color: #2C3E50;"> Expérience</span> </h1>
            </div>

            <!-- content -->
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-medium title-font text-gray-700">Freelance Front-End Developer</span>
                                <span class="mt-1 text-gray-500 text-sm secondary-font pt-3">12 Jun 2019</span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium underline title-font mb-2 text-red-400 ">@ESMC GIE</h2>
                                <p class="leading-relaxed secondary-font pt-5">Glossier echo park pug, church-key sartorial biodiesel
                                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
                                    selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland
                                    craft beer.</p>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-medium title-font text-gray-700">Freelance FullStack Developer</span>
                                <span class="mt-1 text-gray-500 text-sm secondary-font pt-3">12 Jun 2019</span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium underline title-font mb-2 text-red-400 ">@Collège Père
                                    Planque </h2>
                                <p class="leading-relaxed font-ligth secondary-font pt-5">
                                    <li>Conception, Gestion et Refonte du site internet du collège à base du HTML,CSS,JS et du framework Vue</li>
                                    <li>Mise en place du CMS Moodle afin de promouvoir les cours en ligne dans le collège. Celà a été utile notamment pendant la crise du Covid 19.</li>
                                    <li>Optimisation du SEO </li>
                                    <li>Maintenance du site</li>

                                </p>

                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins/titlebar";

.experience {
    width: $secondary-width ;

    // background-color: white;
    &__title::before {
        @include titlebar;
        margin-left: 260px;
    }
}
</style>