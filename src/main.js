import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/main.css'
import client  from './backend/pocketbase'
import Particles from "vue3-particles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(fas, far, fab)

const app = createApp(App) 
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Particles)
app.provide(client)
app.mount('#app')
