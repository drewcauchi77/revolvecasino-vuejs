import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Casino from '../views/Casino'
import CasinoGame from '../views/CasinoGame'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/casino',
        component: Casino,
        name: 'Casino'
    },
    {
        path: '/casino/:slug',
        component: CasinoGame,
        name: 'CasinoGame'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: 'is-active',
    routes
})

export default router