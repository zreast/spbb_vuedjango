// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueProgressBar from 'vue-progressbar'
import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')

const options = {
  color: '#EBDA68',
  failedColor: '#DD4F4F',
  thickness: '4px',
  transition: {
    speed: '0.4s',
    opacity: '0.2s',
    termination: 500
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(Vuetify)
Vue.use(VueProgressBar, options)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
