import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import VueResource from 'vue-resource'

const LandingPage = () => import('@/components/')
const LoginPage = () => import('@/components/login.vue')
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
    },
    { path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('auth')) {
          next('/logout')
        } else {
          next()
        }
      }
    },
    { path: '/logout',
      beforeEnter: (to, from, next) => {
        store.commit('Logout')
        Vue.http.get('/api/logout/').then(response => {
          window.location.href = '/login'
        }, response => {
          console.log(response)
          window.location.href = '/'
        })
      }
    }
  ]
})

export default router
