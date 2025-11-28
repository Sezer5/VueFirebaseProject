import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import AddArticle from '@/components/admin/AddArticle.vue'
import UpdateArticle from '@/components/admin/UpdateArticle.vue'
import Register from '@/components/users/Register.vue'
import { AUTH } from '@/firebase/configs.js'

const isAuth=(to,from)=>{
    let user = AUTH.currentUser;
    if(!user){
      return '/users/register';
    }
    return true;
}

const isLoggedIn=(to,from)=>{
    let user = AUTH.currentUser;
    if(user){
      return '/';
    }
    return true;
}

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
      beforeEnter: isLoggedIn,
      
    },
    {
      path: '/admin/addArticle',
      name: 'addarticle',
      component: AddArticle,
      beforeEnter:isAuth
    },
    {
      path: '/admin/updateArticle/:id',
      name: 'updateArticle',
      component: UpdateArticle,
      beforeEnter:isAuth
    }
    
  ],
})

export default router
