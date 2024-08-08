import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuth()

  if (to.matched.some((record) => record.name === 'auth') && (await auth.isAuth())) {
    return next({ name: 'app' })
  }

  if (to.matched.some((record) => record.meta.auth)) {
    if (await auth.isAuth()) {
      return next()
    } else {
      return next({ name: 'login' })
    }
  }

  return next()
})

export default router
