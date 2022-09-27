<script>
</script>

<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "./assets/scss/mixins/_titlebar.scss"; 
  .section {
    @apply w-full h-screen  flex justify-center items-center; 
  }
 .section__title {
   @apply text-3xl text-red-400 pb-3 
   
  }
  .section__title::before {
    @include titlebar;
    margin-left: 260px;
}
</style>