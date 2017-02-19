import Vue from 'vue'
import Router from 'vue-router'

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

router.beforeEach((to, from, next) => {
  next()
  ga('set', 'page', to)
  ga('send', 'pageview')
})

export default router
