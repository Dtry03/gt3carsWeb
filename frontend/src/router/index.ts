import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoView from '../views/CatalogoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coches',
      name: 'catalogo',
      component: CatalogoView
    },
 
    {
      path: '/coche/:id', // 
      name: 'car-detail',
      component: () => import('../views/CarDetailView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
       {
      path: '/taller',
      name: 'taller',
      component: () => import('../views/TallerView.vue') 
    },
    {
      path: '/detailing',
      name: 'detailing',
      component: () => import('../views/DetailingView.vue') 
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'article-detail',
      component: () => import('../views/ArticleDetailView.vue')
    }

  ]
})

export default router