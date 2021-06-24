import Vue from 'vue'
import Router from 'vue-router'
import Previsao from '@/components/Previsao/Previsao.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'previsao',
      component: Previsao
    }
  ]
})
