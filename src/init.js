import Vue from 'vue'
import App from './App.vue'
import Blue from '@blibli/dls'
import BlueIcon from '@blibli/blue-icon'
import router from './router'
import store from './store'

import '@blibli/dls/dist/blue.min.css'
import '@/assets/css/main.scss'

export function initialize () {
  Vue.config.productionTip = false

  Vue.use(Blue)
  Vue.use(BlueIcon)
  Vue.use(require('vue-script2'))

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
