const loader = {
  state: {
    isActiveLoader: false
  },
  getters: {
    getActivityLoader(state) {
      return state.isActiveLoader
    }
  },
  mutations: {
    toggleLoader(state, status = false) {
      state.isActiveLoader = status
    }
  },
}

export default loader