<template>
  <v-container class="py-0" fluid>
    <v-row >
        <v-col  cols="12" class="" style="background-color: white ;" >
          <profile />
        </v-col>
      <v-col class="">
        <v-container fluid>
          <v-row>
            <v-col 
                data-aos="fade-up-right"
                data-aos-delay="50"
                data-aos-duration="750"
                data-aos-offset= "120"
                cols="12"
                sm="6"
                md="6"
                lg="6"
                style="border: 2px dashed black"
              >
            <h2 class="text-center text-capitalize"> <v-icon v-for=" n in 3" :key="n" color="pink"> mdi-heart </v-icon> </h2>
              <v-chip v-for="(p,index) in proficient" :key="index" label :color="p.color" class="font-2 white--text mr-3 my-3">
                {{p.name}}
              </v-chip>
            </v-col>

            <v-col 
                data-aos="fade-up-right"
                data-aos-delay="200"
                data-aos-duration="750"
                data-aos-offset= "120"
                cols="12"
                sm="6" 
                md="6" 
                lg="6" 
                style="border: 2px dashed black"
              >
              <h2 class="text-center text-capitalize">
                <v-icon v-for=" n in 2" :key="n" color="pink"> mdi-heart </v-icon>...
              </h2>
              <v-chip v-for="(f,index) in familiar" :key="index" label :color="f.color" class=" font-2 white--text mr-3 my-3">
                {{f.name}}
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row style="background-color: #45b29a" >
      <v-col>
        <v-container fluid>
          <h1 class="white--text font-3 text-uppercase"> projects </h1>
          <v-row>
            <v-col sm="9" md="4" lg="4" v-for="(project,index) in projects " :key="index" class="mx-auto"
                data-aos="fade-right"
                :data-aos-delay=200*index
                data-aos-duration="750"
                data-aos-offset= "120"
              >
              <v-card
                class="mx-auto ma-4 pa-7"
                style="border-radius: 0px;color: #2F495E"
                elevation="2"  
                
              >
                <v-img
                  :src="project.thumbnail"
                  height=""
                >
                </v-img>

                <v-card-title class="text-capitalize px-0 font-2" style="color: #2F495E">
                  {{project.title}}
                </v-card-title>

                <v-card-text class=" px-0 font-1" style="color: #2F495E">
                    <div> <b> Tools : </b>{{project.tools}} </div>
                    <div> <b>Description : </b> {{project.description}} </div>
                    <div> <b> Link : </b> <a :href="project.link"> {{project.title}} </a> </div>
                </v-card-text>

              </v-card>

            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profile from '@/components/Profile'
import {mapGetters} from 'vuex'

export default {
  components:{
    profile
  },

  head () {
    return {
      title: "About, FullStack Developer, JAMstack enthusiast ",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: "I'M NORMAN A FullStack Developer, JAMstack enthusiast and a Tech Fanboy XD" }
      ]
    }
  },

  data(){
    return{
      proficient:[
        {name: 'HTML', icon: '', color: '#F2552C'},
        {name: 'CSS', icon: '', color: '#BC70A4'},
        {name: 'Javascript', icon: '', color: 'red'},
        {name: 'Nuxt', icon: '', color: 'green'},
        {name: 'Vue', icon: '', color: '#37A591'},
        {name: 'Node', icon: '', color: '#206E00'},
        {name: 'Express', icon: '', color: '#5B5EA6'},
        {name: 'Pug', icon: '', color: 'purple'},
        {name: 'MongoDB', icon: '', color: '#000000'},
        {name: 'Firebase', icon: '', color: '#CE3175'},
        {name: 'Git', icon: '', color: '#5B5EA6'},
        {name: 'Lua', icon: '', color: '#42C68E'},
        {name: 'Headless CMS', icon: '', color: '#5B2eA6'},
        {name: 'Netlify', icon: '', color: 'orange'}
      ],
      familiar:[
        {name: 'Flutter', icon: '', color: '#B565A7'},
        {name: 'React', icon: '', color: '#F5786B'},
        {name: 'PHP', icon: '', color: '#F43C12'},
        {name: 'Laravel', icon: '', color: 'blue'},
        {name: 'SQL', icon: '', color: 'purple'},

      ]
    }
  },

  computed:{
    ...mapGetters({projects: 'projects/projects'})
  }

}
</script>

<style>
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