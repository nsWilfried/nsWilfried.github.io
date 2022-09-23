import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/main.css'
import client  from './backend/pocketbase'
import Particles from "vue3-particles";
const app = createApp(App)
app.use(router)
app.use(Particles)
app.provide(client)
app.mount('#app')
