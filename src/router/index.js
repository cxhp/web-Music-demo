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

  {
    path: '/',
    name:'home',
    component:()=>import('@/views/Home'),
    meta: { 
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
