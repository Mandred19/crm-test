import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App'
import router from './router'
import store from './store'

import dateFilter from './filters/dateFilter'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
