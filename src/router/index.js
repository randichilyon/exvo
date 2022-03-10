import Vue from 'vue'
import Router from 'vue-router'
import PdpPage from '@/components/pdp/PdpPage'
import InsertProduct from '@/components/merchant/InsertProduct'
import EditProduct from '@/components/merchant/EditProduct'
import ProfilePage from '@/components/profile/ProfilePage'
import ProductDetail from '@/components/pdp/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cari/:key',
      name: 'PdpPage',
      component: PdpPage
    },
    {
      path: '/merchant/product',
      name: 'insertProduct',
      component: InsertProduct
    },
    {
      path: '/merchant/product/1',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path: '/member/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/p/:productName/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
