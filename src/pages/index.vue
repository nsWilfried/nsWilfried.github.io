<template>
    <div class="index w-full  h-auto">

        <!-- header -->
        <Header />

        <!-- about -->
        <About/>

        <!-- experiences -->
        <Experience/>

        <!-- contact -->
        <Contact/>
    </div>
</template>
<script>
import client from "../backend/pocketbase"
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";

export default {
    components: { Header, About, Experience, Contact },
    data() {
        return {

        }
    },
    async created() {
        // await client.admins.authViaEmail(import.meta.env.VITE_POCKETBASE_ADMIN_EMAIL, import.meta.env.VITE_POCKETBASE_ADMIN_PASSWORD);
        // console.log("je suis le client et je répond peut être bien, qui sait ", client.records.getList("tests"))
    }
}
</script>
<style lang="scss" >
    @import "../assets/scss/variables"; 
html{
    scroll-behavior: smooth;
}
.index {
    background-color: $ligth-bg;
    font-family: "Space Mono";
}
</style>