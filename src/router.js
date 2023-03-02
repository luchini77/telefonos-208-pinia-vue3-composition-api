import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores/auth'

import HomeView from './views/HomeView.vue'
import HomeInfoView from './views/HomeInfoView.vue'
import AdminView from './views/AdminView.vue'
import InfoView from './views/InfoView.vue'
import AgregarView from './views/AgregarView.vue'
import ActualizarView from './views/ActualizarView.vue'

const requireAuth = async(to, from, next) => {
    const store = useUserStore();

    store.loadingSession = true

    const user = await store.currentUser();
    if(user){
        next()
    }else{
        next('/')
    }
    store.loadingSession = false
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/:id',
        name: 'homeInfo',
        component: HomeInfoView
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/:id',
        name: 'info',
        component: InfoView,
        beforeEnter: requireAuth
    },
    {
        path: '/agregar',
        name: 'agregar',
        component: AgregarView,
        beforeEnter: requireAuth
    },
    {
        path: '/actualizar/:id',
        name: 'actualizar',
        component: ActualizarView,
        beforeEnter: requireAuth
    }

];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;