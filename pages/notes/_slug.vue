<template>
    <!-- <v-container fluid class="red pa-0 ma-0"> -->
        <v-row class="mt-12 pt-8">
            <v-btn
                :href="'https://www.twitter.com/intent/tweet?text='+this.filteredPost[0].description+'&via=norman_jnr&hashtags='+this.filteredPost[0].tags+'&url='+this.baseUrl + this.$route.fullPath" 
                target="_blank"  
                icon 
                fab 
                dark 
                right 
                fixed 
                bottom 
                small 
                class="blue animated infinite jello delay-5s"
            >
                <v-icon>
                    mdi-twitter
                </v-icon>
            </v-btn>
            <v-col
                cols="12"
                class="mt-8 mx-auto"
            >
                <!-- <v-container> -->
                <h2 :class="{'display-1 text-center font-3 ': $vuetify.breakpoint.smAndDown, 'display-2 text-center font-3 ': $vuetify.breakpoint.mdAndUp}" style="color: #292929;overflow-wrap: break-word; ">{{filteredPost[0].title}} </h2>
                <!-- </v-container> -->
            </v-col>
            <v-col
                cols="12"
                class="mx-auto"
            >
                <v-container>

                    <v-img
                        class="mx-auto"
                        :src="filteredPost[0].thumbnail"
                        max-height="500"
                    />
                </v-container>
            </v-col>

            <v-col
                cols="12"
                class="mx-auto"
            >
                <v-container>
                    <div :class="{'font-3 overline font-weight-black': $vuetify.breakpoint.smAndDown, 'font-3 caption font-weight-black': $vuetify.breakpoint.mdAndUp}" style="color: #565656;"> {{new Date(filteredPost[0].date).toDateString()}} · {{readTime}} </div>
                </v-container>
            </v-col>

            <v-col
                cols="12"
                class=""
            >
                <v-container>
                    <div v-html="richtext" class="font-1 text-justify body-1" style="color: #292929; line-height: 33px"></div>
                </v-container>
            </v-col>

            <v-col
                cols="12"
                class="mx-auto"
            >
            
                <v-container>
                    <v-btn
                        color="#39AE6F"
                        small
                        outlined
                        text
                        dark
                        class="text-capitalize font-2"
                        v-for="(tag,index) in filteredPost[0].tags"
                        :key="index"
                        style="color: #2F495E"
                        :to="'/tag/'+tag"
                        >
                            #{{tag}}
                    </v-btn>
                </v-container>
                
            </v-col>
        </v-row>
    <!-- </v-container> -->
</template>

<script>

import {mapGetters} from 'vuex'
import { readingTime } from 'reading-time-estimator';

export default {
    data(){
        return{

        }
    },

  head () {
        return {
            title: this.filteredPost[0].title,
            meta: [
                { hid: 'description', name: 'description', content: this.filteredPost[0].description }
            ]
        }
    },

    computed:{
        ...mapGetters(['posts']),

        filteredPost(){
            return this.posts.filter(item=>{
                return item.id === this.$route.params.slug
            })
        },

        richtext() {
            return this.$storyapi.richTextResolver.render(this.filteredPost[0].body)
        },

        baseUrl(){
            return process.env.baseUrl
        },

        readTime(){
            return readingTime(this.richtext,{wordsPerMinute: 230}).text
        }
    },

    mounted() {
        Prism.highlightAll()
    },

    middleware: [
        function({store, redirect, route}) {
            let check = store.state.posts.filter(item=>{                    
                return item.id === route.params.slug
                })
            if(check[0] === undefined){
                return redirect('/')
            }
        },
    ],


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