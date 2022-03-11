const state = {
  isMobile: false,
  filterGreen: false,
  showHeader: true
}

const getters = {
  isMobile: (state) => {
    return state.isMobile
  },
  filterGreen: (state) => {
    return state.filterGreen
  },
  showHeader(state) {
    return state.showHeader
  }
}

const mutations = {
  setIsMobile (state, value) {
    state.isMobile = value
  },
  setFilterGreen (state, value) {
    state.filterGreen = value
  },
  setShowHeader (state, value) {
    state.showHeader = value
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
