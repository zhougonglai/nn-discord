module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    // 'boxicons/css/boxicons.min.css',
    'modern-normalize/modern-normalize.css',
    'dialog-polyfill/dialog-polyfill.css',
    '~/styles/global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/nn-wc',
      ssr: false
    }
  ],
  buildModules: ['@nuxtjs/dotenv', '@nuxtjs/eslint-module'],
  server: {
    host: '0.0.0.0'
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  /*
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader']
      })
    }
  }
}
