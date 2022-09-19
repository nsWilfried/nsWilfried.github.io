import Index from "../pages/index.vue"
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: "/", 
        component: Index
    }
]
const router = new createRouter({
    history: createWebHistory(), 
    routes
})
export default router