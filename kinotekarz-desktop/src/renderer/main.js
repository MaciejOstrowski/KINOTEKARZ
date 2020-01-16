import Vue from 'vue'
// import axios from 'axios'

import App from './App'
import router from './router'
import store from './store/index'

import { BootstrapVue } from 'bootstrap-vue'

// bootstrap library
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPlusSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faPlusSquare, faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue, LayoutPlugin
Vue.use(BootstrapVue)
// Vue.use(LayoutPlugin)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
