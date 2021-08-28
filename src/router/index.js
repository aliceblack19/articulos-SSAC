import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/registro_usuarios',
        name: 'RegistroUsuarios',
        component: () =>
            import ( /*registro de usuarios*/ '../views/RegistroUsuarios.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /*login*/ '../views/Login.vue')
    },
    {
        path: '/rol',
        name: 'Rol',
        component: () =>
            import ( /*rol*/ '../views/Rol.vue')
    },
    {
        path: '/categorias',
        name: 'Categorias',
        component: () =>
            import ( /*categorias*/ '../views/Categorias.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router