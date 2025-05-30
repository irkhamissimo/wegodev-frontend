import colors from 'vuetify/es5/util/colors';

export default {
  ssr: false,
  server: {
    port: 5454,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - irkham',
    title: 'irkhamdev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.js', mode: 'client' },
    { src: '~/plugins/axiosInterceptor.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],
  i18n: {
    langDir: 'lang/',
    defaultLocale: 'id',
    locales: [
      { code: 'id', name: 'Indonesia', iso: 'id-ID', file: 'id.json' },
      { code: 'en', name: 'English', iso: 'en-EN', file: 'en.json' },
    ],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
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
          success: colors.green.accent3,
        },
      },
    },
  },
  axios: {
    prefix: 'http://localhost:5000',
    proxy: true,
  },
  // proxy: {
  //   // target: 'http://localhost:5000/',
  //   '/api/': {
  //     target: 'http://localhost:5000/',
  //     pathRewrite: { "^/api/": "" }
  //   },
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  },
};
