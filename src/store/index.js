import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'

Vue.use(Vuex)

const mainStore = new Vuex.Store({
  state: main.state,
  mutations: main.mutations,
  actions: main.actions,
  getters: main.getters,
  strict: process.env.NODE_ENV !== 'production',
  modules: {}
})

export default mainStore
