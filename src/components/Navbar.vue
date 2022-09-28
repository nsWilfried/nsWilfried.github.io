<template>
    <!-- navbar -->
    <div class="w-full  h-auto flex justify-center mt-5 p-5 bg--200">

        <nav class="navbar lg:w-full bg-">
            <div class="navbar__content  bg--200  bg--200 mx-auto">

                <!-- navbar logo -->
                <routerLink to="/" class="flex items-center bg--200 navbar__logo">
                    <span style="color: #2C3E50;" class="text- text-5xl font-bold special-font"> <span
                            class=" text-red-400 underline">Wil</span>fried</span>
                </routerLink>

                <!-- navbar links -->
                <div
                    class="bg--300 h-full  navbar__links lg:flex justify-end items-center w-full  md:w-auto bg--200">
                    <ul
                        class="flex flex-col  mt-4  rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li v-for="(item, index) in navLinks" :key="index">
                            <a :href="item.link" class=" text-gray- secondary-font "
                                style="font-size: 16px;color:#2C3E50; "><span
                                    class="text-red-400">0{{index+1}}</span>.{{item.name}}</a>
                        </li>
                    </ul>
                </div>

                <!-- download resume -->
                <div class="navbar__resume  bg--300">
                    <Button text="Mon CV" class="uppercase" link="resume" />
                </div>
            </div>
        </nav>

    </div>
</template>
<script>
import Button from "./Button.vue"
export default {
    components: { Button },
    data() {
        return {
            navLinks: [
                {
                    name: "Accueil",
                    link: "#acceuil"
                },
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
        @include center; 
    }
}

@media only screen and (min-width: 320px) and (max-width: 1000px) {
    .navbar__links {
        display: none;
    }

    .navbar {
        &__content {
            display: flex;
        }

        &__resume {
            display: none;
        }
    }
}
</style>