<template>
  <v-row class="py-9">
    <blogpost :posts="filteredTags" :title="'by '+ this.$route.params.tag +' tag'"/>
  </v-row>
</template>

<script>
import blogpost from '@/components/BlogPost'
import {mapGetters} from 'vuex'

export default {
  components:{
    blogpost
  },

  data(){
    return{

    }
  },

  head () {
    return {
      title: this.$route.params.tag,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.$route.params.tag }
      ]
    }
  },


  data(){
    return{

    }
  },

  computed:{
    ...mapGetters(['posts']),
    
    filteredTags(){
        return this.posts.filter((item,index)=>{
            return item.tags.find(tag => tag === this.$route.params.tag)
        })
    }
  }

}
</script>

<style >
  .font-1{
    font-family: 'Quicksand', sans-serif !important;
    font-weight: 500;
  }
  .font-2{
    font-family: 'Quicksand', sans-serif !important;
    font-weight: 800;

  }
</style>
