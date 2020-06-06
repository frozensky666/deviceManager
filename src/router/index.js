import Vue from 'vue'
import VueRouter from 'vue-router'

const Error = () => import('../components/Error');
const Container = () => import("../components/Container");

const DeviceManageHome = () => import('../views/deviceManage/DeviceManageHome');
const LifeTime = () => import('../views/deviceManage/childComps/lifeTime/index');
const ItemModel = () => import('../views/deviceManage/childComps/itemModel/index');
const GroupManage = () => import('../views/deviceManage/childComps/groupManage/index');

const CreatDeviceLifeTime = () => import('../views/deviceManage/childComps/lifeTime/CreatDeviceLifeTime');
const DeviceDetails = () => import('../views/deviceManage/childComps/lifeTime/DeviceDetails');
const UpdateShadow = () => import('../views/deviceManage/childComps/lifeTime/UpdateShadow');

const AnotherHome = () => import('../views/another/AnotherHome');

Vue.use(VueRouter);

  const routes = [
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/',
      name: "Container",
      component: Container,
      redirect: { name: 'DeviceManageHome'},
      children: [
        {
          path: '/deviceManage',
          name: 'DeviceManageHome',
          component: DeviceManageHome,
          redirect: {name: 'LifeTime'},
          children: [
            {
              path: 'lifeTime',
              name: 'LifeTime',
              component: LifeTime
            },
            {
              path: 'lifeTime/creatDeviceLifeTime',
              name: 'CreatDeviceLifeTime',
              component: CreatDeviceLifeTime
            },
            {
              path: 'lifeTime/DeviceDetails',
              name: 'DeviceDetails',
              component: DeviceDetails
            },
            {
              path: 'lifeTime/UpdateShadow',
              name: 'UpdateShadow',
              component: UpdateShadow
            },
            {
              path: 'itemModel',
              name: 'ItemModel',
              component: ItemModel
            },
            {
              path: 'groupManage',
              name: 'GroupManage',
              component: GroupManage
            },
          ]
        },
        {
          path: '/another',
          name: 'AnotherHome',
          component: AnotherHome
        }
      ]
    },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next) => {
  if (to.matched.length === 0) {
    next({name: "Error"});
  }else {
    next();
  }
});

export default router
