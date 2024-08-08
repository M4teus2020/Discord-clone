import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: () => import('@/views/auth/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/RegisterView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'app',
    redirect: { path: '/@me' },
    component: () => import('../views/app/AppView.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: '@me',
        name: 'private-channel',
        component: () => import('../views/private/PrivateView.vue'),
        children: [
          {
            path: '',
            name: 'friends',
            component: () => import('../views/friends/FriendsView.vue')
          },
          {
            path: ':channelId',
            component: () => import('../views/directmessage/DirectMessageView.vue')
          },
          {
            path: '/nitro',
            component: () => import('../views/EmptyView.vue')
          },
          {
            path: '/store',
            component: () => import('../views/EmptyView.vue')
          },
          {
            path: '/message-requests',
            component: () => import('../views/EmptyView.vue')
          }
        ]
      },
      {
        path: 'channel/:channel',
        component: () => import('../views/private/PrivateView.vue'),
        children: [
          {
            path: '',
            name: 'empty',
            component: () => import('../views/EmptyView.vue')
          }
        ]
      },
      {
        path: 'explore',
        component: () => import('../views/EmptyView.vue')
      }
      // { path: 'users/:id', component: AdminUserDetails },
    ]
  }
] as RouteRecordRaw[]
