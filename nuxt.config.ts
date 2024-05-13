// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //ssr: false,

  routeRules: {
    '/': { ssr: false },
    '/aothun/**': { ssr: false },
  
  },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/css/mycss.css',
    '~/assets/css/_root.css',
    '~/assets/css/library_css.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  runtimeConfig: {
    public: {
      apiUrl:'http://127.0.0.1:8000/api/',
     // apiKey:'put_the_api_key_here'
     path_img:'http://127.0.0.1:8000/images/'
    },
    
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components
  plugins: [
    '~/plugins/myFunction.ts',
    { src: "~/plugins/jquery.client.js", mode: "client" },
  ],

  modules: ["vue3-carousel-nuxt"],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
})