import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

const LandingPage = () => import('@/components/')
const Request = () => import('@/components/request.vue')
const TestAPI = () => import('@/components/test_api.vue')

Vue.use(Router)
Vue.use(VueResource)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    },
    {
      path: '/test_api',
      name: 'Test API',
      component: TestAPI
    }
  ]
})

export default router
