<template>
    <div>
        <!-- link button -->
        <a  :href="link" type="button" class="fill">
            {{text}}
        </a>
    </div>
</template>
<script>
export default {
    props: {
        text: String, 
        link: {
          type: String, 
          required: false
        },
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/variables";
    /* Fill button styling */
.fill {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid #2C3E50; //dark mode
//   border: 1px solid white; //light mode

  color: white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.fill::after {
  content: "";
  background-color: $primary-color;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
  font-family: 'Fira code';
}

.fill:hover::after {
  top: 0px;
  left: 0px;
}
.fill:hover{
    border-color: $primary-color;
}
</style>