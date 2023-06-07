import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap/dist/css/bootstrap.css'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
