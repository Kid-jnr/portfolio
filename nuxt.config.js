import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s' + " - Norman Akanegbu",
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: "index, follow" },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'Norman, Akanegbu, Norman Akanegbu, Akanegbu Norman, Norman-Jnr, Norman Jnr, Norman Portfolio, Akanegbu Norman Portfolio' }
    ],
    script: [
      // { src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display|Quicksand:500,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'pink' },
  /*
  ** Global CSS
  */
  css: [
    'assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "@/plugins/aos", ssr: false},
    { src: "@/plugins/prism", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@neneos/nuxt-animate.css',
    ['storyblok-nuxt', {
      accessToken: 'CMkBQJU6B0Yltmeq0efyqQtt',
      cacheProvider: 'memory'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
