<template >
    <!-- section education -->
    <div id="education" class="section">
        <div class="education">
            <!-- experience title -->
            <div class="h-auto w-full bg-green-">
                <h1 class="section__title primary-font font-bold" >04.<span class="text-white"
                        style=" color: #2C3E50;"> Education</span> </h1>
            </div>

            <!-- content -->
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 lg:py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 education__filiere flex-shrink-0 flex flex-col flex-wrap">
                                <span class="font-medium   text-gray-700 ">Licence - Sciences Informatiques et
                                    Technologiques</span>
                                <span class="mt-1 text-gray-500 text-sm secondary-font pt-3">Novembre 2021</span>
                            </div>
                            <div class="md:flex-grow">
                                <a href="https://ucao.org"
                                    class="text-2xl font-medium underline title-font mb-2 text-red-400 ">@Université
                                    Catholique de l'Afrique de l'Ouest</a>
                                <p class="leading-relaxed secondary-font pt-5">Glossier echo park pug, church-key sartorial biodiesel
                                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
                                    selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland
                                    craft beer.</p>
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

.education {
    width: $section-width;
    background-color: white;
    z-index: 1;
}

@media only screen and (min-width: 320px) and (max-width: 1000px){
 .education {
    width: $secondary-width;
    padding-top: $vertical-space-mobile;
    &__filiere {
        width: 100%;
    }
 }
}
</style>