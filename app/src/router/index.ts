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
                    children: [
                        {
                            path: '',
                            name: 'friends',
                            component: () => import('../views/friends/FriendsView.vue'),
                        },
                        {
                            path: '/@me/:channelId',
                            component: () => import('../views/friends/FriendsView.vue'),
                        },
                        {
                            path: '/nitro',
                            component: () => import('../views/friends/FriendsView.vue'),
                        },
                        {
                            path: '/store',
                            component: () => import('../views/friends/FriendsView.vue'),
                        },
                        {
                            path: '/message-requests',
                            component: () => import('../views/friends/FriendsView.vue'),
                        },

                    ], 
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
