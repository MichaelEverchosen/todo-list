import { api } from '@/utils/axios.js'

const todo = {
  state: {
    todos: [],
  },
  getters: {
    getTodosList(state) {
      return state.todos
    },
    getTodo: (state) => (id) => {
      return state.todos.find((todo) => {
        return Number(id) === todo.id
      })
    },
    getActivityLoader(state) {
      return state.isActiveLoader
    }
  },
  mutations: {
    deleteTodo(state, id) {},
    toggleLoader(state, status = false) {
      state.isActiveLoader = status
    }
  },

  actions: {
    async getTodos({ state }) {
      try {
        const response = await api.get('/todos', {
          params: {
            pagination: {
              page: 1,
              perPage: 10,
              listLength: 0
            },
            listSettings: {
              search: '',
              priorityId: null
            }
          }
        })

        state.todos = response.data.todos
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default todo
