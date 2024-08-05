import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/auth/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'register',
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
              component: () => import('../views/friends/FriendsView.vue')
            },
            {
              path: '/@me/:channelId',
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
          path: '/channel/:channel',
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
          path: '/explore',
          component: () => import('../views/EmptyView.vue')
        }
        // { path: 'users/:id', component: AdminUserDetails },
      ]
    }
  ]
})

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    if (isAuthenticated()) {
      next('/@me')
    } else {
      next('/login')
    }
  } else if (to.meta.requireLogin && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router
