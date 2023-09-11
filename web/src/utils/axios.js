import axios from 'axios'
import router from '@/router/index.js'

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000
})

const headers = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user?.accessToken) {
    return {
      'x-access-token': user.accessToken,
      user_id: user.id
    }
  }
  return {}
}

api.interceptors.request.use((config) => {
  config.headers = headers()
  return config
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      router.push({ name: 'sign-in' })
    }
    return Promise.reject(error)
  }
)

// const getUserFromLocalStorage = () => {
//   const user = localStorage.getItem('user')
//   if (user) {
//     return JSON.parse(user)
//   }
//   return null
// }

// const user = getUserFromLocalStorage()

// export const api = axios.create({
//   baseURL: 'http://localhost:8080/api/',
//   headers: {
//     "x-access-token": user.accessToken
//   },
//   timeout: 1000
// })
