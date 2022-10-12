import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/splash',
    name: 'splash',
    component: () => import(/* webpackChunkName: "about" */ '../views/splashLogo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/loginUser.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/menuView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cartView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/paymentView.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/successView.vue')
  },
  {
    path: '/successSplash',
    name: 'successSplash',
    component: () => import('../views/sucessSplash.vue')
  }
  //{
  //  path: '/login',
  //  name: 'login',
  //  component: () => import('../views/user/chatBox1.vue')
  //},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
