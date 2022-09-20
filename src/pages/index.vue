<template>
    <div class="index w-full flex justify-center items-center h-screen">

        <!-- header -->
        <Header />

    </div>
</template>
<script>
import client from "../backend/pocketbase"
import Header from "@/components/Header.vue";
export default {
    components: { Header },
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
<style lang="css">
.index {
    background-color: rgb(38, 48, 60);
    height: 100vh;
}
</style>