import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'ComponentCommunication',
    path: '/ComponentCommunication',
    component: () => import('@/views/ComponentCommunication/ComponentCommunication')
  },{
    name: 'PropsOnEmit',
    path: '/PropsOnEmit',
    component: () => import('@/views/PropsOnEmit/parent')
  }, {
    name: 'AttrsListeners',
    path: '/AttrsListeners',
    component: () => import('@/views/Attrs&Listeners/parent')
  }, {
    name: 'ProvideInject',
    path: '/ProvideInject',
    component: () => import('@/views/ProvideInject/parent')
  }, {
    name: 'eventBus',
    path: '/eventBus',
    component: () => import('@/views/EventBus/parent')
  }, {
    name: 'vuex',
    path: '/vuex',
    component: () => import('@/views/Vuex/parent')
  }, {
    path: '*',
    redirect: '/ComponentCommunication'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
