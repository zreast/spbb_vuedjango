import Vue from 'vue'
import Router from 'vue-router'
import request from '@/components/request'
import request_lab_exam from '@/components/request_lab_exam'

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
    }
  ]
})
