import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/main.css'
import client  from './backend/pocketbase'
const app = createApp(App)
app.use(router)
app.provide(client)
app.mount('#app')
