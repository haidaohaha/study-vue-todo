import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import City from './pages/city/City.vue'
import Detail from './pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './pages/about/About.vue')
    }
  ],
  // 解决 每次进入详情时 在返回主页时 浏览器会记住上一次 滚动的位置.我们不希望这样
  // 希望每次都是顶部
  // scrollBehavior (to, from, savedPosition) {
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
