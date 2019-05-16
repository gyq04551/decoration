import Vue from 'vue'
import Router from 'vue-router'
import rationIndex from '@/components/rationIndex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rationIndex',
      component: rationIndex,
      meta: {
        title: '装修首页'
      }

    }
  ]
})
