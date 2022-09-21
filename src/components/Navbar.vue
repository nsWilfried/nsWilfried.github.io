<template >
    <div class="w-full h-auto flex justify-center mt-5">

        <nav class="navbar ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">

                <routerLink to="/" class="flex items-center">
                    <!-- <img src="../assets/imgs/logo.png" class="mr-3 h-6 sm:h-9" alt="Wilfried N'SOUKPOE Portfolio logo"> -->
                </routerLink>

                <div class="bg-  justify-between items-center w-full md:flex md:w-auto">
                    <ul
                        class="flex flex-col  mt-4  rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href="#" class=" text-gray-500 text-xl ">Acceuil</a>
                        </li>
                        <li>
                            <a href="#" class="  text-gray-500 text-xl ">About</a>
                        </li>
                        <li>
                            <a href="#" class=" text-gray-500 text-xl    ">Expérience</a>
                        </li>
                        <li>
                            <a href="#" class=" text-gray-500 text-xl  ">Education</a>
                        </li>
                        <li>
                            <a href="#" class=" text-gray-500 text-xl  ">Contact</a>
                        </li>
                    </ul>
                </div>

                <Button text="Mon CV" class="uppercase" link="/" />
            </div>
        </nav>

    </div>
</template>
<script>
import Button from "./Button.vue"
export default {
    components: { Button },
    data() { }

}
</script>
<style lang="css" scoped>
.navbar {
    width: 1320px;
    z-index: 1;
}
</style>