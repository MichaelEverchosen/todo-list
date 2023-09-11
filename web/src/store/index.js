import { createStore } from 'vuex'
import auth from '@/store/auth.js'
import todo from '@/store/todo.js'

const store = new createStore({
  modules: {
    auth,
    todo
  }
})

export default store
