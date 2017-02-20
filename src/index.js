import Vue from 'vue'
import App from 'components/App'
import store from 'store'
import router from 'router'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

new Vue({
  el: '#app',
  router,
  store,
  ...App
})
