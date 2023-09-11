import { createRouter, createWebHistory } from 'vue-router'
import Authorization from '@/views/auth/authorization.vue'
import Registration from '@/views/auth/registration.vue'
import TodoList from '@/views/todo-list.vue'
import TodoForm from '@/views/todo-form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList
    },
    {
      path: '/todo-form',
      name: 'todo-form',
      component: TodoForm,
      children: [
        {
          path: ':id',
          name: 'todo-form-edit',
          component: TodoForm
        }
      ]
    },
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: Authorization
    },
    {
      path: '/auth/sign-up',
      name: 'sign-up',
      component: Registration
    }
  ]
})

export default router
