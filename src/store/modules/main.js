const state = {
  isMobile: false,
  filterGreen: false
}

const getters = {
  isMobile: (state) => {
    return state.isMobile
  },
  filterGreen: (state) => {
    return state.filterGreen
  }
}

const mutations = {
  setIsMobile (state, value) {
    state.isMobile = value
  },
  setFilterGreen (state, value) {
    state.filterGreen = value
  }
}

const actions = {
  setMobileDeviceStatus: ({ commit }, data) => {
    commit('setIsMobile', data)
  },
  setFilterGreen: ({ commit }, data) => {
    commit('setFilterGreen', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
