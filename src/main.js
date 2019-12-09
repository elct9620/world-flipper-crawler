import Vue from 'vue'
import App from './App.vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

import '@vuikit/theme'

import store from './store'

Vue.config.productionTip = false
Vue.use(Vuikit)
Vue.use(VuikitIcons)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
