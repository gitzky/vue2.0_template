import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  routes: [

    {
      path: "/",
      component: () => import("@/components/Layout.vue"),
      redirect: "/index",
      children: [
        /*************  index  **************/
        {
          path: "index",
          name: "Index",
          meta: {
            title: '首页',
          },
          component: () => import("@/views/index"),
        },
        {
          path: "home",
          name: "home",
          meta: {
            title: 'home',
          },
          component: () => import("@/views/home"),
        },

      ]
    },
    {
      path: "/404",
      name: "notFound",
      component: () => import("@/components/Exception/index.vue"),
    },
    {
      path: "*",
      redirect: "/404",
      name: "notFound",
      hidden: true,
    },

  ]
})

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
NProgress.configure({
  showSpinner: false,
})



export default router