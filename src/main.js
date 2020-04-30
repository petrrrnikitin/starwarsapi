import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/app.scss'
import Axios from "axios";
window.axios = require('axios');


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
