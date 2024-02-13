import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/LoginView.vue')
        },
        {
            path: '/',
            name: 'app',
            component: () => import('../views/app/AppView.vue'),
            meta: {
                requireLogin: true
            },
            children: [
                {
                    path: '/@me',
                    name: 'private-channel',
                    component: () => import('../views/private/PrivateView.vue'),
                },
                {
                    path: '/channel/:channel',
                    component: () => import('../views/private/PrivateView.vue'),
                },
                {
                    path: '/explore',
                    component: () => import('../views/private/PrivateView.vue'),
                },
                // { path: 'users/:id', component: AdminUserDetails },
            ], 
        }
    ]
})

export default router
