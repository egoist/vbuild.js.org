import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'

Vue.use(Router)

const Home = import('views/Home')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => Home.then(resolve)
    }
  ]
})

ga(router, 'UA-54857209-8')

export default router
