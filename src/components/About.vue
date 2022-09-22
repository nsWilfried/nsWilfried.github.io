<template>
    <div class="w-full flex justify-center  h-screen">

        <div class="about h-full grid grid-cols-2">
            <!-- <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="../public/random.json"
        /> -->
            <div class="flex justify-center items-center">
                <div class="mr-auto place-self-center lg:col-span-7">


                    <h1 class="text-3xl text-red-400 pb-3" style="font-family: 'Fira Code';">01.<span class="text-white">About</span> </h1>

                    <!-- description of myself -->
                    <p class="max-w-2xl mb-6  font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem error rem vero repellendus enim velit veniam omnis numquam itaque reiciendis excepturi necessitatibus, similique doloribus inventore dolores vel voluptates porro?</p>

                       <p class="max-w-2xl mb-6  font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem error rem vero repellendus enim velit veniam omnis numquam itaque reiciendis excepturi necessitatibus, similique doloribus inventore dolores vel voluptates porro?</p>
                    <!-- Get in touch button -->
                    <div>
                        <Button text="Me contacter" link="/" />
                    </div>
                </div>
            </div>
            <div>je suis le second wilfried</div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="css">
.about {
    width: 1320px;
    ;
    /* background-color: #252734; */
}
</style>