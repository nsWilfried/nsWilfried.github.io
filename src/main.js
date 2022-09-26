import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/main.css'
// backend
import client  from './backend/pocketbase'; 
// sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
// http request
import axios from 'axios'
import VueAxios from 'vue-axios'
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
app.use(VueSweetalert2)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Particles)
app.use(VueAxios, axios)
app.provide(client)
app.mount('#app')
