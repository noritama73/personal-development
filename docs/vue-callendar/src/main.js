import Vue from 'vue'
import App from './App'
import store from './store'
import "dayjs/locale/ja"
import dayjs from 'dayjs'

dayjs.locale('ja');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  dayjs,
  render: h => h(App)
})
