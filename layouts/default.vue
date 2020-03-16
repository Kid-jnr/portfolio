<template>
  <v-app>
    <navigation />
    <v-container fluid class="mb-10">
      <v-row class="pa-0" no-gutters>
        <v-col cols="12">
          <nuxt ref="page"/>
        </v-col>
      </v-row>
    </v-container>
    <footerNav/>
  </v-app>
</template>

<script>
import navigation from '@/components/NavMain'
import footerNav from '@/components/footer'


export default {
  components:{
    navigation,
    footerNav
  }

}
</script>

<style >
</style>
