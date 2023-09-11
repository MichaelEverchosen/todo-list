import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueFeather from 'vue-feather'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('FeatherIcon', VueFeather)

app.mount('#app')
