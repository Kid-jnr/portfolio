<template>
    <v-container fluid style="background: #F8BBD0" class="mt-7">
        <h1 class="text-uppercase font-3 display-1 text-center mt-6" style="color: #2F495E"> {{title}} </h1>
        <v-row class="pt-7 mt-5">
            <v-col
                v-for=" (post, index) in posts"
                :key="index"
                cols="12"
                sm="6" 
                md="4" 
                lg="4"
                class="mx-auto"
                data-aos="fade-up-right"
                data-aos-delay="500"
                data-aos-duration="750"
                data-aos-offset= "120"
            >
                    <v-card
                        class="mx-auto ma-4 pa-7"
                        style="border-radius: 0px;"
                        elevation="6"             
                    >
                        <v-img
                        :src="post.thumbnail"
                        height=""
                        >
                        </v-img>
                        <div class="">

                            <v-card-title class="text-capitalize px-0 font-2">
                            <nuxt-link style="color: #2F495E" :to="'/notes/'+post.id"> {{post.title}} </nuxt-link> 
                            </v-card-title>

                            <v-card-text class="text-capitalize px-0 font-1" style="color: #2F495E">
                                {{post.description}}
                            </v-card-text>
                            <v-card-actions>
                                <v-row class="">
                                    <v-btn
                                    color="#39AE6F"
                                    small
                                    outlined
                                    text
                                    dark
                                    class="text-capitalize font-2"
                                    v-for="(tag, index) in post.tags"
                                    :key="index"
                                    style="color: #2F495E"
                                    :to="'/tag/'+tag"
                                    >
                                        #{{tag}}
                                    </v-btn>
                                </v-row>
                            </v-card-actions>
                        </div>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:{
        posts:{
            type: Array,
            required: true
        },
        title:{
            type: String,
            required: true
        }
    }

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