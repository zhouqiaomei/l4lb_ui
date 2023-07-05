import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/components/Layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/helloWorld'),
        hidden: true
      },
      {
        path: '/devops/vipCheck',
        component: () => import('@/views/devops/vipCheck'),
        hidden: true
      },
      {
        path: '/resource/snlvs',
        component: () => import('@/views/resource/snlvsResource'),
        hidden: true
      },
      {
        path: '/resource/idc',
        component: () => import('@/views/resource/idcResource'),
        hidden: true
      },
      {
        path: '/resource/all',
        component: () => import('@/views/resource/allResource'),
        hidden: true
      },
      {
        path: '/resource/view',
        component: () => import('@/views/resource/view'),
        hidden: true
      },
      {
        path: '/yundun/bill',
        component: () => import('@/views/yundun/bill'),
        hidden: true
      },
      {
        path: '/yundun/host',
        component: () => import('@/views/yundun/host'),
        hidden: true
      },
      {
        path: '/yundun/subuer',
        component: () => import('@/views/yundun/subuser'),
        hidden: true
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history", // 去掉url中的#
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
