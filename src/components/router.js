import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './Main.vue'
import Music from './Music.vue'
import Test from './Test.vue'

Vue.use(VueRouter)
const routes = [
  {
        path: '/',
        component: Main
    },
    {
      path:'/musics',
      component:Music
    },
    {
      path:'/test',
      component:Test
    }


]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
