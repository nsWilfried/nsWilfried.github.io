<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">

        <!-- front end skills -->
        <swiper-slide>
            <div class="swiper__content">
                <div class="swiper__title pb-2 flex w-full  items-center">
                    <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-double-chevron-arrow-insignia-rank-representation-basic-tritone-tal-revivo.png"/>
                    <span class="pl-2 primary-font font-bold">Front-End Skills</span>
                </div>

                <div >
                    <div class="w-full bg--200 pb-2 secondary-font">
                        <span class="font- text--300">Langages: </span>
                        <div>
                            <!-- Front-End languages-->
                            <div class="flex w-full bg-red- justify-between ">
                                <div v-for="(item, index) in frontEndLanguages" :key="index" class="front flex justify-center items-center flex-col m-1">
                                    <img :src="item.src" />
                                    <aside class="skill__tooltip">{{item.name}}</aside>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span>Frameworks & Librairies: </span>
                        <div class="flex justify-between">
                            <div v-for="(item, index) in frontEndFrameworks" :key="index" class="front flex justify-center items-center flex-col m-1">
                                <img :src="item.src"/>

                                <aside class="skill__tooltip">{{item.name}}</aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>

        <!-- backend skills -->
        <swiper-slide>
            <div class="swiper__content">
                <div class="swiper__title pb-2 flex w-full  items-center">
                    <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-double-chevron-arrow-insignia-rank-representation-basic-tritone-tal-revivo.png"/>
                    <span class="pl-2 primary-font font-bold">Back-End Skills</span>
                </div>

                <div >
                    <div class="w-full bg--200 pb-2 secondary-font ">
                        <span class="font- text--300">Langages: </span>
                        <div>
                            <!-- Back-End languages-->
                            <div class="flex w-full bg-red- justify-between ">
                                <div v-for="(item, index) in backEndLanguages" :key="index" class="back flex justify-center items-center flex-col m-1">
                                    <img :src="item.src" />
                                    <aside class="skill__tooltip">{{item.name}}</aside>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span>Frameworks & Librairies: </span>
                        <div class="flex justify-between">
                            <div v-for="(item, index) in backEndFrameworks" :key="index" class="back flex justify-center items-center flex-col m-1">
                                <img :src="item.src"/>

                                <aside class="skill__tooltip">{{item.name}}</aside>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span>Outils: </span>
                        <div class="flex justify-between">
                            <div v-for="(item, index) in backEndOutils" :key="index" class="back flex justify-center items-center flex-col m-1">
                                <img :src="item.src"/>

                                <aside class="skill__tooltip">{{item.name}}</aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>

        <!-- other skills -->
        <swiper-slide>
            <div class="swiper__content">
                <div class="swiper__title pb-2 flex w-full  items-center">
                    <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-double-chevron-arrow-insignia-rank-representation-basic-tritone-tal-revivo.png"/>
                    <span class="pl-2 primary-font font-bold">Autres Skills</span>
                </div>

                <div >
                    <div class="w-full bg--200 pb-2 secondary-font">
                        <span class="font- text--300">Outils: </span>
                        <div>
                            <!-- Back-End languages-->
                            <div class="flex w-full bg-red- justify-between ">
                                <div v-for="(item, index) in otherOutils" :key="index" class="other flex justify-center items-center flex-col m-1">
                                    <img :src="item.src" />
                                    <aside class="skill__tooltip">{{item.name}}</aside>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span>Langages & CMS</span>
                        <div class="flex justify-between">
                            <div v-for="(item, index) in otherLanguages" :key="index" class="other flex justify-center items-center flex-col m-1">
                                <img :src="item.src"/>

                                <aside class="skill__tooltip">{{item.name}}</aside>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span>DevOps: </span>
                        <div class="flex justify-between">
                            <div v-for="(item, index) in devOpsSkills" :key="index" class="other flex justify-center items-center flex-col m-1">
                                <img :src="item.src"/>

                                <aside class="skill__tooltip">{{item.name}}</aside>
                            </div>

                        </div>
                    </div>
                  
                </div>
            </div>
        </swiper-slide>

    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [EffectCards],
            frontEndLanguages: [
                {
                    src:"https://img.icons8.com/color/48/000000/html-5--v1.png", 
                    name: "Html5"
                }, 
                {
                    src:"https://img.icons8.com/color/48/000000/css3.png", 
                    name: "Css3"
                }, 
                {
                    src:"https://img.icons8.com/color/48/000000/javascript--v1.png", 
                    name: "Javascript(ES6)"
                }, 
                {
                    src:"https://img.icons8.com/color/48/000000/typescript.png", 
                    name: "Typescript"
                }
            ], 
            frontEndFrameworks: [
                {
                    src:"https://cdn.iconscout.com/icon/free/png-48/angular-2038881-1720094.png", 
                    name: "Angular"
                }, 
                {
                    src:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png", 
                    name: "VueJS"
                }, 
                 {
                    src:"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-nuxt-js-a-free-and-open-source-web-application-framework-logo-shadow-tal-revivo.png", 
                    name: "NuxtJS"


                }, 
                {
                    src:"https://img.icons8.com/color/48/000000/tailwindcss.png", 
                    name: "Tailwindcss"
                }, 
                {
                    src:"https://img.icons8.com/color/48/000000/sass.png", 
                    name: "Sass"
                }
            ], 

            backEndLanguages: [
                {
                    src: "https://img.icons8.com/fluency/48/000000/node-js.png", 
                    name: "NodeJS"

                }, 
                {
                    src: "https://img.icons8.com/fluency/48/null/c-sharp-logo.png", 
                    name: "C Sharp"
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/python--v1.png", 
                    name: "Python"

                },
                {
                    src: "https://img.icons8.com/color/48/000000/mysql-logo.png", 
                    name: "SQL"

                },
            ], 
            backEndFrameworks: [
            {
                    src:"https://avatars.githubusercontent.com/u/13810373?s=48&v=4", 
                    name: "Adonisjs"
                }, 
                {
                    src: 'https://cdn.iconscout.com/icon/free/png-48/express-8-1175029.png', 
                    name: "ExpressJS"
                }, 
                {
                    src: "https://img.icons8.com/external-those-icons-flat-those-icons/48/null/external-Dot-Net-Logo-social-media-those-icons-flat-those-icons.png", 
                    name: ".Net"
                }, 
                {
                    src:"https://miro.medium.com/max/70/1*Q5EUk28Xc3iCDoMSkrd1_w.png", 
                    name: "Flask"
                }, 

            ], 
            backEndOutils: [
                {
                    src: "https://img.icons8.com/color/48/000000/mongodb.png", 
                    name: "Mongodb",
                }, 
               
                {
                    src: "https://img.icons8.com/color/48/000000/postgreesql.png", 
                    name: "Postgresql",
                }, 
                {
                    src:"https://cdn.iconscout.com/icon/free/png-48/sqlite-282687.png", 
                    name: "SQLite",
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/cloud-firestore.png", 
                    name: "Firestore",
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/firebase.png", 
                    name: "Firebase",
                }, 
                
            ], 
            otherOutils: [
                {
                    src: "https://img.icons8.com/color/48/000000/git.png", 
                    name: "Git",
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/bitbucket.png", 
                    name: "BitBucket",
                }, 
                {
                    src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
                    name: "Netlify"
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/heroku.png", 
                name: "Heroku"
                }
            ], 
            devOpsSkills: [
                {
                    src: "https://img.icons8.com/color/48/000000/docker.png", 
                    name: "Docker",
                }, 
                // {
                //     src: "https://img.icons8.com/color/48/000000/kubernetes.png", 
                //     name: "Kubernetes",
                // }, 
               
            ], 
            otherLanguages:[
            {
                    src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", 
                    name: "Java",
                }, 
                {
                    src: "https://img.icons8.com/color/48/000000/c-programming.png", 
                    name: "C",
                }, 
                {
                    src: "https://cdn.iconscout.com/icon/free/png-48/wordpress-1-226061.png", 
                    name: "Wordpress"
                }
            ]
        };
    },
};
</script>
  
<style lang="scss">
@import "../assets/scss/variables";

.swiper {
    // 240px 320px
    width: 340px;
    height: 360px;
    &__content {
        @apply shadow-sm border border-red-500 w-full p-6 h-full flex flex-col gap-8 justify-center underline;
    }
}

@media only screen and (min-width: 150px) and (max-width: 1000px){
    .swiper {
    // 240px 320px
    width: 260px;
    height: 360px;
   
}
}
.front, .back, .other{
    position: relative;
    &:hover .skill__tooltip {
        opacity: 1;

    }
}
.skill__tooltip{
    opacity: 0;
    width: auto;
    background-color: $primary-bg;
    color: white;
    width: auto ; 
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: absolute;
    transform: translateY(-45px);
    transition: all 0.2s ease-in;
    z-index: 300000000;
    &::before {
        content: ""; 
        position: absolute;
        bottom: -5px; 
        width: 10px; 
        height: 10px;
        background-color: $primary-bg;
        transform: rotate(45deg);
    }
}

.swiper-slide {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // border-radius: 18px;
    // font-size: 22px;
    // font-weight: bold;
    color: $secondary-color;
    background-color: white;
   
}

// .swiper-slide:nth-child(1n) {
//     // @apply bg-red-400; 
// }

// .swiper-slide:nth-child(2n) {
//     // background-color: $primary-bg;
//     // color: white;
//     // transform: scale(1.0) translate(1px, 5px) skew(6deg, -5deg);
// }

.swiper-slide:nth-child(3n) {
    // background-color: rgb(10, 184, 111);
    background-color: $primary-bg;
    color: white;

}

// .swiper-slide:nth-child(4n) {
//     // @apply bg-blue-400
// }
</style>