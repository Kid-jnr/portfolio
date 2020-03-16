<template>
  <v-row class="py-9">
    <blogpost :posts="posts" title="notes"/>
  </v-row>
</template>

<script>
import blogpost from '@/components/BlogPost'
import {mapGetters} from 'vuex'

export default {
  components:{
    blogpost
  },

  head () {
    return {
      title: "Blog",
    }
  },

  data(){
    return{

    }
  },

  computed:{
    ...mapGetters(['posts'])
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
