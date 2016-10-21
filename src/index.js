import EVA from 'eva.js'
import App from 'components/App'
import Home from 'src/views/Home'

const app = new EVA()

app.model({
  name: 'home',
  state: {
    active: 0,
    total: 6,
    jumping: false
  },
  mutations: {
    NAVIGATE_DOWN(state) {
      state.active++
    },
    NAVIGATE_TO(state, index) {
      state.active = index
    },
    JUMP_START(state) {
      state.jumping = true
    },
    JUMP_END(state) {
      state.jumping = false
    }
  }
})

app.router(route => [
  route('/', Home)
])

app.start(App, '#app')

app.$router.beforeEach((to, from, next) => {
  next()
  ga('set', 'page', to)
  ga('send', 'pageview')
})
