import Index from "../pages/index.vue"
import ResumeViewer from "../components/ResumeViewer.vue"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", 
        component: Index
    }, {
        path: "/resume", 
        component: ResumeViewer
    }, 
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', redirect: to => {
            return '/'
        }
    },
]
const router = new createRouter({
    history: createWebHistory(), 
    routes
})
export default router