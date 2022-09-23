<template>
    <div class="index w-full flex flex-col  h-auto">

        <!-- header -->
        <Header />

        <!-- about -->
        <About/>

        <!-- experiences -->
        <Experience/>
    </div>
</template>
<script>
import client from "../backend/pocketbase"
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
export default {
    components: { Header, About, Experience },
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
.index {
    background-color: $secondary-bg;
}
</style>