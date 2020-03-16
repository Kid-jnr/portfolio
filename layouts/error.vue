<template>
  <v-app dark>
    <v-row justify="center" align="center">
      <v-col class="cols-12 col-sm-10 col-md-7" >
        <div v-if="error.statusCode === 404">
          <v-img style="margin: 0px auto" :src="img404"/>
          <h3 class="font-3 text-center">{{ pageNotFound }}! </h3>
        </div>

        <div v-else>
          <v-img width="80%" style="margin: 0px auto" src="/undraw_bug_fixing_oc7a.svg"/>
          <h3 class="font-3 text-center">{{ otherError }} {{error.statusCode}} occurred :( </h3>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error',
      img404: '/undraw_page_not_found_su7k.svg'
    }
  }
}
</script>

<style scoped>
  h3 {
    font-size: 18px;
  }
  .font-3{
      font-family: 'Major Mono Display', cursive !important;
      font-weight: 900;
  }
</style>
