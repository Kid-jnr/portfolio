<template>
    <v-container >
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
                class="mt-8"
            >
                <v-container>
                <h1 class="text-center font-3 display-1" style="color: #292929">{{filteredPost[0].title}} </h1>
                </v-container>
            </v-col>
            <v-col
                cols="12"
                class="mx-auto"
            >
                <v-container>

                    <v-img
                        class="mx-auto"
                        :src="filteredPost[0].thumbnail"
                        max-height="450"
                    />
                </v-container>
            </v-col>

            <v-col
                cols="12"
                class="mx-auto"
            >
                <v-container>
                    <div class="font-3 subtitle-2" style="color: #292929"> {{new Date(filteredPost[0].date).toDateString()}} · {{readTime}} </div>
                </v-container>
            </v-col>

            <v-col
                cols="12"
                class="mx-auto"
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
    </v-container>
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

<style>

    .v-application code {
        background-color: #2d2a2a !important;
        color: #ffffff !important;
        box-shadow: none;
    }

</style>

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