<template lang="">
    <div>
        Hello tout le monde
    </div>
</template>
<script>
    import client from "../backend/pocketbase"
export default {
    data() {
        return {
            
        }
    },
    async created(){
        await client.admins.authViaEmail(import.meta.env.VITE_POCKETBASE_ADMIN_EMAIL, import.meta.env.VITE_POCKETBASE_ADMIN_PASSWORD);
        console.log("je suis le client et je répond peut être bien, qui sait ", client.records.getList("tests"))
    }
}
</script>
<style lang="css">
    
</style>