export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: '/pages/',
    buildAssetsDir: 'assets'
  },
  modules:
  [
    /* '@nuxtjs/google-fonts',*/
    '@nuxt/image',
    '@nuxt/image-edge', 
    /* '@nuxtseo/module',
    'nuxt-og-image',
    'nuxt-gtag',  */
  ],
  /* image: {
    dir: 'assets/image',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  }, */
})