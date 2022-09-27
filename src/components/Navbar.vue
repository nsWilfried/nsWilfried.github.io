<template>
    <!-- navbar -->
    <div class="w-full  h-auto flex justify-center mt-5 p-5 bg--200">

        <nav class="navbar bg-" style="font-family: Fira Code;">
            <div class="container  bg--200 grid grid-cols-4 mx-auto">

                <!-- navbar logo -->
                <routerLink to="/" class="flex col-span-1 items-center bg--200">
                    <span style="font-family:Montez;color: #2C3E50;" class="text- text-5xl font-bold " > <span class="text-red-400">Wil</span>fried</span>
                </routerLink>

                <!-- navbar links -->
                <div class="bg--300 h-full col-span-2 justify-end items-center w-full md:flex md:w-auto">
                    <ul
                        class="flex flex-col  mt-4  rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li v-for="(item, index) in navLinks" :key="index">
                            <a :href="item.link" class=" text-gray- " style="font-size: 16px;color:#2C3E50; "><span class="text-red-400">0{{index+1}}</span>.{{item.name}}</a>
                        </li>
                    </ul>
                </div>

                <!-- download resume -->
                <div class="flex justify-end col-span-1 items-center">
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
        return  {
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
.navbar {
    width: 90%;
    z-index: 123;
}
</style>