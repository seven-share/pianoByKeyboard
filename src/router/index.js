import Vue from 'vue'
import Router from 'vue-router'
import keyBoard from '@/components/keyBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:keyBoard
    }
  ]
})
