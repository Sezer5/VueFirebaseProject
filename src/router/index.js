import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import AddArticle from '@/components/admin/AddArticle.vue'
import UpdateArticle from '@/components/admin/UpdateArticle.vue'
import Register from '@/components/users/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/admin/addArticle',
      name: 'addarticle',
      component: AddArticle,
    },
    {
      path: '/admin/updateArticle/:id',
      name: 'updateArticle',
      component: UpdateArticle,
    }
    
  ],
})

export default router
