<template>
   <v-app-bar
        color="white"
        dense
        dark
        hide-on-scroll
        elevation="0"
        app
    >
        <v-row id="scrolling-techniques-8">
            <v-col class="px-0">
                <v-btn color="orange" tile text class="black--text font-3" width="100%" to="/" >
                    Home
                </v-btn>
            </v-col>
            <v-col class="px-0 pb-0">
                <v-btn text color="green" tile class="black--text font-3" width="100%" to="/notes">
                    notes
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style scoped>
  /* .font-1{
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
  } */

</style>