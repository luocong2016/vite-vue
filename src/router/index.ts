import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const whiteList: string[] = ['/login']

export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]

export const asyncRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHistory(),
  routes: constRoutes
})

export default router
