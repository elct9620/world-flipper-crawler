import Vue from 'vue'
import VueRouter from 'vue-router'
import Weapons from './pages/Weapons'

Vue.use(VueRouter)

const routes =[
  // TODO: Add index page
  { path: '/', component: Weapons }
]

export default new VueRouter({
  routes,
})
