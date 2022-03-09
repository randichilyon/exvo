import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PdpPage from '@/components/pdp/PdpPage'
import ProductDetail from '@/components/pdp/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cari/:key',
      name: 'PdpPage',
      component: PdpPage
    },
    {
      path: '/p/:productName/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
