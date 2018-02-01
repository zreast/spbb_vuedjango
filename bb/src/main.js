// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from '../node_modules/vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
// import Buefy from '../node_modules/buefy/lib'
// import '../node_modules/buefy/lib/buefy.css'

// Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
