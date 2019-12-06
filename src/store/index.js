import Vue from 'vue'
import Vuex from 'vuex'

import Weapon from './modules/weapon'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Weapon,
  }
})
