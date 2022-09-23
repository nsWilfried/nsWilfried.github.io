<template>
    <!-- navbar -->
    <div class="w-full h-auto flex justify-center mt-5">

        <nav class="navbar bg-" style="font-family: Fira Code;">
            <div class="container  bg--200 grid grid-cols-3 mx-auto">

                <!-- navbar logo -->
                <routerLink to="/" class="flex items-center bg--200">
                    <span style="font-family: Fira Code;" class="text-white text-3xl font-bold "> <span class="bg-red-400">Wil</span>fried</span>
                </routerLink>

                <!-- navbar links -->
                <div class="bg--300 h-full justify-between items-center w-full md:flex md:w-auto">
                    <ul
                        class="flex flex-col  mt-4  rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li v-for="(item, index) in navLinks" :key="index">
                            <routerLink :to="item.link" class=" text-gray-500 " style="font-size: 16px;"><span class="text-red-400">0{{index+1}}</span>.{{item.name}}</routerLink>
                        </li>
                    </ul>
                </div>

                <!-- download resume -->
                <div class="flex justify-end">
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
                    link: "/"
                }, 
                {
                    name: "About", 
                    link: "/"
                }, 
                {
                    name: "Expérience", 
                    link: "/"
                },
                {
                    name: "Projets", 
                    link: "/"
                },
                {
                    name: "Contact", 
                    link: "/"
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