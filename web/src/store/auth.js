const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  if (user) {
    return JSON.parse(user)
  }
  return null
}

const user = getUserFromLocalStorage()

const auth = {
  state: {
    user: user
  },
  getters: {
    getAuthHeaders(state) {
      if (state.user && state.user.accessToken) {
        return {
          'x-access-token': state.user.accessToken,
          user_id: state.user.id
        }
      }
      return {}
    }
  },
  mutations: {
    saveUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.user = null
    }
  },
  actions: {}
}

export default auth
