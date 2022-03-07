import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontPage.vue'),
    meta: { title: 'Home' },
    children: [{
      path: '',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home' }
    },
    {
      path: 'products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue'),
      meta: { title: 'Products' },
      children: [{
        path: 'product/:id',
        component: () => import('../views/ProductView.vue'),
        meta: { title: 'Product' }
      }]
    },
    {
      path: 'product/:id',
      component: () => import('../views/ProductView.vue'),
      meta: { title: 'Product' }
    },
    {
      path: 'sendInfo',
      name: 'SendInfo',
      component: () => import('../views/SendInfo.vue'),
      meta: { title: 'SendInfo' }
    }]
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/admin',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'adminProducts',
        name: 'AdminProducts',
        component: () => import('../views/AdminProduct.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  },
  {
    path: '/:matchPath(.*)*',
    name: 'FindNoPage',
    component: () => import('../views/FindNoPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
