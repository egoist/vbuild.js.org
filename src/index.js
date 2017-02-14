import Vue from 'vue'
import App from 'components/App'
import store from 'store'
import router from 'router'

new Vue({
  el: '#app',
  router,
  store,
  ...App
})
