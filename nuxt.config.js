module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  mode: "spa",
  modules: [
    ["bootstrap-vue/nuxt"],
    // ['nuxt-fontawesome', {
    //   component: 'fa',
    //   imports: [
    //     //import whole set
    //     {
    //       set: '@fortawesome/free-solid-svg-icons',
    //       icons: ['fas']
    //     },
    //     //import 2 icons from set
    //     // please note this is PRO set in this example,
    //     // you must have it in your node_modules to actually import
    //     {
    //       set: '@fortawesome/pro-regular-svg-icons',
    //       icons: ['faAdjust', 'faArchive']
    //     }
    //   ]
    // }]
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

