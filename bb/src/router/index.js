import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import request from '@/components/request'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
		{
      path: '/a',
      name: 'Hello2',
      component: request
    }
  ]
})
