import Vue from 'vue'
import Router from 'vue-router'
import request from '@/components/request'
import request_lab_exam from '@/components/request_lab_exam'
import request_suggestion from '@/components/request_suggestion'
import test_api from '@/components/test_api'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Request',
      component: request
    },
		{
      path: '/lab_exam',
      name: 'Lab Exam',
      component: request_lab_exam
    },
		{
      path: '/suggestion',
      name: 'Suggestion',
      component: request_suggestion
    },
		{
      path: '/test_api',
      name: 'Test API',
      component: test_api
    }
  ]
})
