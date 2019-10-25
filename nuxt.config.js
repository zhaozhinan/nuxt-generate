module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '活动易-售票报名更容易',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0,user-scalable=no,minimum-scale=1.0, maximum-scale=1.0,width=device-width' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        name: 'Keywords', content: "活动易,活动易学院, em活动学院 活动发布, 报名, 演出, 票务系统, 小程序, 微信售票, 表单, 售票系统, 体育票务, 会员管理, CRM, 活动行, 互动吧, 麦客CRM, 微盟, 有赞, 金数据, 验票核销, 活动聚, 活动家, 31会议, 豆瓣同城" },
      {
        name: "description", content: "活动易，为旅游/演出/赛事/会议等现场活动提供强大的售票报名系统，帮助主办一键生成小程序店铺/微站、实现促销和全网分销、实现会员CRM管理和大数据跟踪分析。"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static2.evente.cn/static/img/icon.jpg' },
    ],
    script: [
      { src: 'https://ykf-webchat.7moor.com/javascripts/7moorInit.js?accessId=89424c60-940d-11e9-b35d-ef6292b91e05&autoShow=false&language=ZHCN' },
      { src: '//static2.evente.cn/static/js/flexible.js' },
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js' },
      // { src: '//hm.baidu.com/hm.js?e530ac7854e02c41adec84075e77ead9' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    // 'em-fe/dist/css/emfe.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: './plugins/VueLazyload',
      ssr: false
    },
    {
      src: './plugins/emfe',
      ssr: false
    },
    {
      src: './plugins/goTop',
      ssr: false
    },
    {
      src: './plugins/nprogress',
      ssr: false
    },
    {
      src: './plugins/router',
      ssr: false
    },
    {
      src: './plugins/navpc',
      ssr: true
    },
    {
      src: './plugins/navwap',
      ssr: true
    },
    {
      src: './plugins/swipe',
      ssr: false
    },
    {
      src: './plugins/ga.js',
      ssr: true,
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   // Doc: https://github.com/nuxt-community/eslint-module
  //   '@nuxtjs/eslint-module'
  // ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    // publicPath: 'http://www.inner.evente.cn:8000/',
    // publicPath: './'
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  },
  server: {
    port: 3001, // default: 3000
  },
  router: {
    // base: process.env.NODE_ENV === 'development' ? 'http://www.inner.evente.cn:8000/' : 'https://www.evente.cn/'
    // base: 'https://www.evente.cn/',
    // base: 'http://www.inner.evente.cn:8000/',
    middleware: 'auth'
  },
  generate: {
    routers: [
      '/',
      '/about',
      '/commerce',
      '/formtools',
      '/home',
      '/index',
      '/meetup',
      '/price',
      '/program',
      '/m/about',
      '/m/commerce',
      '/m/formtools',
      '/m/',
      '/m/index',
      '/m/meetup',
      '/m/price',
      '/m/program',
    ]
  }
}
