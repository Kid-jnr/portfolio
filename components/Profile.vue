<template>
    <v-container class="mt-12" fluid>
        <v-row class="mt-2 justify-center" >
            <v-col class="" cols="12" sm="8" md="7" lg="6">
                <v-row class="justify-center mb-5">
                    <v-avatar class="mx-auto" size="180">
                        <img src="../static/avatar.jpg"/>
                    </v-avatar>
                </v-row>
                <div class=" text-center text-uppercase font-2 display-3 mb-4" style="color: #2F495E"> HEY WORLD, I'M </div>
                <div class="text-center text-uppercase font-3 display-2 lighten-4 pa-1 mb-4" style="color: #2F495E"> Norman </div>
                <div class="mt-2 font-1">
                    <p class="title text-center font-1" style="color: #2F495E">
                        A full stack web developer. 
                        <br>
                        <i class="text-capitalize font-2"> "declare variables not war" <v-icon class="text-center" color="#F4A0A0"> mdi-hand-peace</v-icon> </i>
                    </p> 
                </div>
                <div class="text-center mt-3">
                    <v-btn  target="_blank" href="http://www.twitter.com/norman_jnr" icon color="white" class="blue">
                        <v-icon>
                            mdi-twitter
                        </v-icon>    
                    </v-btn>
                    <v-btn  target="_blank" href="mailto:normansinto1@gmail.com" icon color="white" class="mx-4" style="background-color: #2F495E">
                        <v-icon>
                            mdi-email
                        </v-icon>    
                    </v-btn>
                </div>
            </v-col>            
        </v-row>
       
    </v-container>
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