import pkg from './package'

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
// https://ja.nuxtjs.org/faq/github-pages/
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt.ruedap.com/',
          middleware: 'pages'
        }
      }
    : {
        router: {
          middleware: 'pages'
        }
      }

export default {
  mode: 'universal',

  server: {
    port: 3777
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - nuxt.ruedap.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/stylesheets/basics.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', 'nuxt-svg-loader'],
  styleResources: {
    scss: ['~/assets/stylesheets/abstractions.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/assets/',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  },
  generate: {
    dir: 'contents'
  },
  ...routerBase
}
