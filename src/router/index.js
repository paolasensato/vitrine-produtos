import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/Produtos.vue')
    },
    {
      path: '/produtos/:id',
      component: () => import('../views/Produto.vue')
    },
    {
      path: '/produtos/categoria/:id',
      component: () => import('../views/ProdutoCategoria.vue')
    }
  ]
})

export default router
