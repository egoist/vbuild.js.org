import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  ga('set', 'page', to)
  ga('send', 'pageview')
})

export default router
