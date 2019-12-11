import Vue from 'vue'
import App from './App.vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

import Firebase from './plugins/Firebase'

import { Firebase as firebaseConfig } from './config'
import router from './routes'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Firebase, firebaseConfig)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
