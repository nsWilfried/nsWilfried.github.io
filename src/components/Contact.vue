<template>
    <div class="w-full contact">
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 "> <span class="text-3xl text-red-400 pb-3 " style="font-family: 'Fira Code';">05.</span> Me contacter 
                    
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn asymmetrical gentrify.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Nom</label>
                                <input type="text" id="name" name="name"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="subject" class="leading-7 text-sm text-gray-600">Sujet</label>
                                <input type="text" id="subject" name="subject"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full flex justify-center">
                            <!-- boutton d'envoi de l'email -->
                            <Button text="Envoyer" class="uppercase" link="#"/>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a href="mailto:wacnsoukpoe@gmail.com" class="text-red-400">wacnsoukpoe@email.com</a>
                            <p class="leading-normal my-5">49 Smith St.
                                <br>Quebec, Canada
                            </p>

                            <p class="leading-normal my-9">
                                Designed & build by wilfried n'soukpoe
                            </p>
                            <span class="inline-flex">
                               <SocialLinks/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Button from './Button.vue';
import SocialLinks from './SocialLinks.vue';
export default {
    components: { Button, SocialLinks }
}
</script>
<style lang="scss">
.contact {
    z-index: 123;
}
</style>