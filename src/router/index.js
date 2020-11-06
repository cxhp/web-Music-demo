import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/components/login'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { 
      keepAlive: false
    }
  },

  // {
  //   path: '/',
  //   name:'Home',
  //   meta: { keepAlive: true },
  //   children: [
  //     {
  //       path: '/home',
  //       component:()=>import('@/views/Home'),
  //       meta: { keepAlive: true }
  //     }
  //   ],
  // },

  {
    path: '/',
    component:()=>import('@/views/Home'),
    name: 'home',
    meta: { 
      title: 'about' ,
      keepAlive: true
    }
  },

  {
    path: '/about',
    component: () => import('@/views/about'),
    name: 'about',
    meta: { 
      title: 'about' ,
      keepAlive: true
    }
  }
  

]

const router = new VueRouter({
  routes
})

export default router
