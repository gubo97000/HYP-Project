export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  serverMiddleware: [
    '~/server-middleware/postgraphileServerMiddleware.ts',
    {
      path: '/api',
      handler: '~/server/api.js',
    },
  ],
  head: {
    title: 'HYP-Project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: "google-site-verification", content: "LGCkxuEhypB74b--3yJkwTFH0eGTp1BKu2RvSz7LkyE" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    // 'nuxt-graphql-request'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:3005/',
    // baseURL: '/',
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HEROKU_APP_NAME
          ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com/api/graphql`
          : `http://localhost:3005/api/graphql`,
      },
    },
  },
  // graphql: {
  //   /**
  //    * An Object of your GraphQL clients
  //    */
  //   clients: {
  //     default: {
  //       /**
  //        * The client endpoint url
  //        */
  //       endpoint: process.env.HEROKU_APP_NAME
  //       ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com/api/graphql`
  //         : `http://localhost:3005/api/graphql`,
  //       options: {},
  //     },
  //   },

  //   /**
  //    * Options
  //    * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
  //    */
  //   options: {},

  //   /**
  //    * Optional
  //    * default: true (this includes cross-fetch/polyfill before creating the graphql client)
  //    */
  //   useFetchPolyfill: true,

  //   /**
  //    * Optional
  //    * default: false (this includes graphql-tag for node_modules folder)
  //    */
  //   includeNodeModules: true,
  // },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: {
    //   analyzerMode: 'static'
    // },
  },
}
