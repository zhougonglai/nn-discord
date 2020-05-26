import config from './config/config'
export default {
  mode: 'universal',
  env: {
    NUXT_ENV_a: 'b',
    NUXT_ENV_Recharge_URL: process.env.Recharge_URL,
    NUXT_ENV_ws: process.env.ws,
  },
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
  plugins: [
    {
      src: '~/plugins/persistedstate',
      ssr: false,
    },
    // {
    //   src: '~/plugins/idb',
    //   ssr: false,
    // },
    {
      src: '~/plugins/nn-wc',
      ssr: true,
    },
    '~/plugins/element-ui.js',
    {
      src: '~/plugins/svg-icon',
      ssr: false,
    },
    '~/plugins/axios',
    { src: '~/plugins/ws/', ssr: false },
    {
      src: '~plugins/nuxt-quill-plugin.js',
      ssr: false,
    },
  ],

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  server: {
    host: config.host,
    port: config.port,
  },
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/proxy',
      {
        pathRewrite: {
          '^/userapi': '',
          '^/friendapi': '',
          '^/channelapi': '',
          '^/pgcapi': '',
        },
      },
    ],
    '@nuxtjs/pwa',
  ],
  axios: {
    // proxy: true,
  },
  proxy: {
    '/userapi': config.userapi,
    '/friendapi': config.friendapi,
    '/channelapi': config.channelapi,
    '/pgcapi': config.pgcapi,
  },
  styleResources: {
    scss: './styles/variables.scss',
  },
  build: {
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
            style: false,
            // styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },
  },
}
