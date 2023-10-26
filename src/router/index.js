import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tree',
    name: 'treeView',
    component: () => import('../views/treeView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
