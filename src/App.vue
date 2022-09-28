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
    @include center-full; 
  }
  
 .section__title {
   @apply text-3xl text-red-400 pb-3 
   
  }
  .section__title::before {
    @include titlebar;
    margin-left: 260px;
}

@media only screen and (min-width: 320px) and (max-width: 800px){
 .section {
  height: auto;
 }
}
</style>