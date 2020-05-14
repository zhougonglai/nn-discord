module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'zh-Hans',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#040C11',
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: 'NN',
      },
      {
        hid: 'apple-application-name',
        name: 'apple-application-name',
        content: 'NN',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'NN',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'NN',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'NN',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css',
      },
    ],
  },
  loading: { color: '#fff' },
  css: [
    'modern-normalize/modern-normalize.css',
    'dialog-polyfill/dialog-polyfill.css',
    '~/styles/global.scss',
  ],
  env: {
    'jest/globals': true,
  },
  plugins: [
    {
      src: '~/plugins/persistedstate',
      ssr: false,
    },
    {
      src: '~/plugins/nn-wc',
      ssr: false,
    },
    '~/plugins/element-ui.js',
  ],

  buildModules: ['@nuxtjs/dotenv', '@nuxtjs/eslint-module'],
  server: {
    host: '0.0.0.0',
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  build: {
    cache: true,
    parallel: true,
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },
  },
}
