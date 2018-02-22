import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

const LandingPage = () => import('@/components/')
const Donation = () => import('@/components/donation.vue')
const Request = () => import('@/components/request.vue')
const NewRequest = () => import('@/components/newrequest.vue')
const Stock = () => import('@/components/stock.vue')
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
      path: '/donation',
      name: 'Donation',
      component: Donation
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    },
    {
      path: '/newrequest',
      name: 'NewRequest',
      component: NewRequest
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/test_api',
      name: 'Test API',
      component: TestAPI
    }
  ]
})

export default router
