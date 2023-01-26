import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import {store} from './store/index'
import axios from 'axios'
import "./plugins/chart.js"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

axios.defaults.baseURL = "http://127.0.0.1:8000"
axios.defaults.withCredentials = false

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
