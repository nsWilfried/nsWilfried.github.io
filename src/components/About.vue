<template>
    <div id="about" class="w-full flex justify-center  h-screen items-center bg--300" >

        <div class="about md:w-9/10 h-full grid lg:grid-cols-2 md:flex ">
        
            <div class="flex justify-center items-center">
                <div class="mr-auto place-self-center lg:col-span-7 ">


                    <h1 class="text-3xl text-red-400 pb-3 about__title primary-font font-bold" >02.<span class="text-" style=" color: #2C3E50;"> About</span> </h1>

                    <!-- description of myself -->
                    <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem error rem vero repellendus enim velit veniam omnis numquam itaque reiciendis excepturi necessitatibus, similique doloribus inventore dolores vel voluptates porro?</p>

                       <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg"
                        style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem error rem vero repellendus enim velit veniam omnis numquam itaque reiciendis excepturi necessitatibus, similique doloribus inventore dolores vel voluptates porro?</p>
                    <!-- Get in touch button -->
                    <div>
                        <Button text="Me contacter" link="/" />
                    </div>
                </div>
            </div>
            <div class="flex justify-center bg--300 items-center">
                <Skills/>
            </div>
        </div>

    </div>
</template>
<script>
    import Skills from "./Skills.vue"
export default {
    components:{Skills}

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
@media only screen and (min-width: 320px) and (max-width: 1000px){
 .about{
    width: $secondary-width;
    // background-color:blue;
 }
 #about {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    
    // background-color: red;
 }
}
</style>