import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InfoView',
    component: () => import('@/views/InfoView.vue')
  },
  {
    path: '/create-form',
    name: 'CreateFormView',
    component: () => import('@/views/CreateFormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
