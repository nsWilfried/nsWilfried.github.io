<template>
    <!-- experience -->
    <div id="experience" class="section">
        <div class="experience h-full flex flex-col  justify-center">
            <!-- experience title -->
            <div class="h-auto w-full bg-green-">
                <h1 class="section__title experience__title primary-font font-bold" >03.<span
                        class="text-white" style=" color: #2C3E50;"> Expérience</span> </h1>
            </div>

            <!-- content -->
            <section class="text-gray-600 body-font overflow-hidden">
                <div class=" container px-5 lg:py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div v-for="(item, index) in experiences" :key="index" class="job py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span  class="font-medium title-font text-gray-700">{{item.job}}</span>
                                <span class="mt-1 text-gray-500 text-sm secondary-font pt-3">{{item.date}}</span>
                            </div>
                            <div class="md:flex-grow">
                                <a :href="item.link" target="_blank" class="text-2xl font-medium underline title-font mb-2 text-red-400 ">{{item.position}}</a>
                                <p class="leading-relaxed secondary-font pt-5">
                                        <li v-for="(element, index) in item.achivements" :key="index">{{element}}</li>
                                        
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
 data(){
    return {
        experiences: [
            {
                job: "Freelance Front-End Développeur", 
                position: "@ESMC GIE", 
                achivements: ["Consommation d'Api Restfull en coordination avec une équipe Backend SpringBoot", "Développement d'un système de Gestion d'utilisateurs dans le Dashboard, cette solution notamment permet à présent de gérer tous les droits utilisateurs",  "Conception des interfaces Back Office avec Angular et MaterialUI", "Prise en main parfaite et rapide du template de développement du Back Office",], 
                date: "Août 2022", 
                link: "https://esmcgie.com/"
            }, 
            {
                job: "Freelance Front-End Développeur", 
                position: "@Designer Portoflio", 
                achivements: ["Réalisation et Maintenance avec Vuejs du portfolio d'un designer freelance."], 
                date: "Août 2022", 
                link: "https://jobedesigner.com/"
            }, 
            {
                job: "Freelance Full Stack Développeur", 
                position: "@Collège Père Planque", 
                achivements: ["Conception, Gestion et Refonte du site internet du collège à base du HTML,CSS,JS et du framework Vue", "Mise en place du CMS Moodle afin de promouvoir les cours en ligne dans le collège. Celà a été utile notamment pendant la crise du Covid 19.", "Optimisation du SEO", "Maintenance du site"], 
                date: "Avril 2020", 
                link: "https://collegepereplanque.netlify.app"
            }, 
        ]
    }
 }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins/titlebar";

#experience {
    z-index: 1; 
}
.experience {
    width: $secondary-width ;

    // background-color: white;
    &__title::before {
        @include titlebar;
        margin-left: 260px;
    }
}
@media only screen and (min-width: 320px) and (max-width: 1000px){
 .experience {
    padding-top: $vertical-space-mobile;
 }
}
</style>