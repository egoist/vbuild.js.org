import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: {
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
    }
  }
})
