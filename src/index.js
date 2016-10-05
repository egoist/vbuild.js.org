import EVA from 'eva.js'
import App from 'components/App'
import Home from 'src/views/Home'
import Guide from 'src/views/Guide'
import GuideCommon from 'src/views/GuideCommon'
import GuideBabel from 'src/views/GuideBabel'
import GuidePostcss from 'src/views/GuidePostcss'
import GuideComponents from 'src/views/GuideComponents'

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
  route('/', Home),
  route('/guide', Guide, [
    route('home', GuideCommon),
    route('babel', GuideBabel),
    route('postcss', GuidePostcss),
    route('components', GuideComponents)
  ])
])

app.start(App, '#app')