<template>
    <div id="about" class="w-full flex justify-center  h-screen items-center bg--300">

        <div class="about md:w-9/10 h-full grid lg:grid-cols-2 bg--400 md:flex ">

            <div class="flex justify-center bg--400 items-center">
                <div class="mr-auto place-self-center ">


                    <h1 class="text-3xl text-red-400 pb-3 about__title primary-font font-bold">01.<span class="text-"
                            style=" color: #2C3E50;"> About</span> </h1>

                    <!-- description of myself -->
                    <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                        Bonjour! Je suis <span class="font-bold">Wilfried</span> , <span class="font-bold">Développeur
                            web Full Stack</span> et j'adore construire des applications web
                        complexe et unique.Ma passion pour le développement web a commencé en 2017 lorsque j'ai
                        commencé à apprendre le HTML/CSS et réalisé mon tout premier projet professionnel ( Un site
                        vitrine pour mon lycée).
                    </p>

                    <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                        Dès lors, cette passion n'a cessé de grandir, ce qui me poussa à rentrer en cursus informatique
                        à <a href="https://ucao.org" target="_blank" class="text-red-400 underline capitalize">@l'université</a> , à apprendre de nouvelles technologies et à réaliser des tonnes de projets
                        personnels en parallèle de mes études, projets qu'on peut retrouver notamment sur mon profil <a target="_blank" href="https://github.com/nsWilfried/" class="text-red-400 underline capitalize">@github</a>. 
                    </p>

                    <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                        Mes principales aspirations aujourd'hui sont de pouvoir travailler sur des projets de plus en plus conséquents avec des enjeux énormes.</p>
                    <!-- Get in touch button -->
                    <div>
                        <Button text="Me contacter" link="/" />
                    </div>
                </div>
            </div>
            <div class="flex justify-center lg:p-7 bg--300 skills items-center">
                <Skills />
            </div>
        </div>

    </div>
</template>
<script>
import Skills from "./Skills.vue"
export default {
    components: { Skills }, 

}
</script>
<style lang="scss">
@import "../assets/scss/mixins/titlebar";
@import "../assets/scss/variables";

.about {
    width: $section-width;
    ;
    /* background-color: #252734; */
}

.about__title::before {
    @include titlebar;
    margin-left: 165px;
}

@media only screen and (min-width: 150px) and (max-width: 1080px) {
    .about {
        width: $secondary-width;
        // background-color:blue;
    }

    .skills {
        overflow: hidden ;
    }

    #about {
        height: auto;
        padding-top: 30px;
        padding-bottom: 30px;

        // background-color: red;
    }
}
@media only screen and (min-width: 680px) and (max-width: 1000px) {
  

    #about {
        height: 100vh;

    }
}
</style>