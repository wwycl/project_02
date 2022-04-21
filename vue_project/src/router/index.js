import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Register from '@/views/Register/Register.vue'
import Login from '@/views/Login/Login.vue'

//商品分类
import Classify from '@/views/Classify/Classify.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home' , component: Home},
  { path: '/register', component: Register},
  { path: '/login', component: Login},

  // 商品分类的路由规则
  {path:'/classify',component: Classify},

]

const router = new VueRouter({
  routes
})

export default router
