<template>
    <!-- navbar -->
    <div class="w-full  h-auto flex bg--400 justify-center  p-5 bg--200">

        <!-- navbar -->
        <nav class="navbar lg:w-full bg-">
            <div class="navbar__content  bg--200  bg--200 mx-auto">

                <!-- navbar logo -->
                <routerLink to="/" class="flex items-center bg--200 navbar__logo">
                    <span style="color: #2C3E50;" class="text- text-5xl font-bold special-font"> <span
                            class=" text-red-400 underline">Wil</span>fried</span>
                </routerLink>

                <!-- navbar links -->
                <div class="bg--300 h-full  navbar__links lg:flex justify-end items-center w-full  md:w-auto bg--200">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter" tag="ul"
                        class="flex flex-col  mt-4  rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li :data-index="index" v-for="(item, index) in navLinks" :key="index">
                            <a :href="item.link" class=" text-gray- secondary-font "
                                style="font-size: 16px;color:#2C3E50; "><span
                                    class="text-red-400">0{{index+1}}</span>.{{item.name}}</a>
                        </li>
                    </transition-group>
                </div>


                <!-- download resume -->
               
                <div class="navbar__resume  bg--300">
                    <Button text="Mon CV" class="uppercase" link="resume" />
                </div>
            </div>
        </nav>

        <!-- navbar mobile -->
        <nav class="navbar__mobile w-full bg--400 ">
            <div class="bg--400 w-full">
                <!-- navbar logo -->

                <div class="bg--400">
                    <routerLink to="/" class="flex items-center bg--200 navbar__logo">
                        <span style="color: #2C3E50;" class="text- text-5xl font-bold special-font"> <span
                                class=" text-red-400 underline">Wil</span>fried</span>
                    </routerLink>
                </div>


                <!-- burger menu  -->
                <Slide>
                    <a id="home" href="#">
                        <span>Home</span>
                    </a>
                </Slide>
            </div>
        </nav>

    </div>
</template>
<script>
import Button from "./Button.vue"
import { Slide } from 'vue3-burger-menu'
import gsap from "gsap"
export default {
    components: { Button, Slide },
    data() {
        return {
            navLinks: [
                // {
                //     name: "Accueil",
                //     link: "#acceuil"
                // },
                {
                    name: "About",
                    link: "#about"
                },
                {
                    name: "Expérience",
                    link: "#experience"
                },
                {
                    name: "Education",
                    link: "#education"
                },
                {
                    name: "Projets",
                    link: "#projects"
                },
                {
                    name: "Contact",
                    link: "#contact"
                }

            ]
        }
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.transform = 'translateY(-60px)'
        },
        enter(el) {
            // console.log("je suis l'élement et je viens d'entrer en scène", el)
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: el.dataset.index * 0.13
            })
        }
    }

}
</script>
<style lang="scss" >
@import "../assets/scss/mixins/titlebar";

.navbar {
    z-index: 123;

    &__content {
        width: 90%;

        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
    }

    &__resume {
        // @include center;
        display: flex;
        justify-content: flex-end;
        // align-items: flex-end;
    }

    &__mobile {
        display: none;
    }
}
.bm-burger-button {
    position: relative;
    width: 36px;
    height: 30px;
    left: 80%;
    //   right: 40px;
    top: 10px;
    cursor: pointer;
}
@media only screen and (min-width: 320px) and (max-width: 1000px) {
    .navbar__mobile {
        display: flex;
        > div{
            // width: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr ;
            // background-color: blue;
        }
    }

    .navbar {
        display: none;
    }
}
</style>