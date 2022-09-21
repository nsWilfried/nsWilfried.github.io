<template>
    <div class="index w-full flex flex-col  h-auto">

        <!-- header -->
        <Header />

        <!-- about -->
        <About/>
    </div>
</template>
<script>
import client from "../backend/pocketbase"
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
export default {
    components: { Header, About },
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
<style lang="css" scoped >
.index {
    background-color: rgb(38, 48, 60);
}
</style>