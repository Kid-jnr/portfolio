<template>
  <v-footer padless absolute bottom app color="white">
    <v-col
      class="text-center"
      cols="12"
    >
        <span class="caption font-3" style="color: #2F495E"> {{ new Date().getFullYear() }} — <strong>
           <nuxt-link style="color: #2F495E" to="/">Norman jnr</nuxt-link>
            All rights reserved
            </strong> 
        </span> 
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  .font-1{
    font-family: 'Quicksand', sans-serif !important;
    font-weight: 500;
  }
  .font-2{
    font-family: 'Quicksand', sans-serif !important;
    font-weight: 800;

  }
  .font-3{
      font-family: 'Major Mono Display', cursive !important;
      font-weight: 900;
  }

</style>