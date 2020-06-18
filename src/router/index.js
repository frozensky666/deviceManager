import Vue from 'vue'
import VueRouter from 'vue-router'

const Error = () => import('../components/Error');
const Container = () => import("../components/Container");

const DeviceManageHome = () => import('../views/deviceManage/DeviceManageHome');
const LifeTimeContainer = () => import('../views/deviceManage/childComps/lifeTime/LifeTimeContainer');
const ItemModelContainer = () => import('../views/deviceManage/childComps/itemModel/ItemModelContainer');
const GroupManageContainer = () => import('../views/deviceManage/childComps/groupManage/GroupManageContainer');

const LifeTime = () => import('../views/deviceManage/childComps/lifeTime/childComps/index');
const CreatDeviceLifeTime = () => import('../views/deviceManage/childComps/lifeTime/childComps/CreatDeviceLifeTime');
const DeviceDetails = () => import('../views/deviceManage/childComps/lifeTime/childComps/DeviceDetails');
const UpdateShadow = () => import('../views/deviceManage/childComps/lifeTime/childComps/UpdateShadow');

const ItemModel = () => import('../views/deviceManage/childComps/itemModel/childComps/index');
const ItemModelEdition = () => import('../views/deviceManage/childComps/itemModel/childComps/ItemModelEdition');
const ItemModelAddition = () => import('../views/deviceManage/childComps/itemModel/childComps/ItemModelAddition');

const GroupManage = () => import('../views/deviceManage/childComps/groupManage/childComps/index');
const GroupManageDeviceEdition = () => import('../views/deviceManage/childComps/groupManage/childComps/GroupManageDeviceEdition');
const GroupManageEdition = () => import('../views/deviceManage/childComps/groupManage/childComps/GroupManageEdition');
const GroupManageAddition = () => import('../views/deviceManage/childComps/groupManage/childComps/GroupManageAddition');

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
          path: 'deviceManage',
          name: 'DeviceManageHome',
          component: DeviceManageHome,
          redirect: {name: 'LifeTimeContainer'},
          children: [
            {
              path: 'lifeTime',
              name: "LifeTimeContainer",
              component: LifeTimeContainer,
              redirect: {name: 'LifeTime'},
              children: [
                {
                  path: 'index',
                  name: 'LifeTime',
                  component: LifeTime
                },
                {
                  path: 'creatDeviceLifeTime',
                  name: 'CreatDeviceLifeTime',
                  component: CreatDeviceLifeTime
                },
                {
                  path: 'DeviceDetails',
                  name: 'DeviceDetails',
                  component: DeviceDetails
                },
                {
                  path: 'UpdateShadow',
                  name: 'UpdateShadow',
                  component: UpdateShadow
                }
              ]
            },
            {
              path: 'itemModel',
              name: "ItemModelContainer",
              component: ItemModelContainer,
              redirect: {name: 'ItemModel'},
              children: [
                {
                  path: 'index',
                  name: 'ItemModel',
                  component: ItemModel
                },
                {
                  path: 'ItemModelEdition',
                  name: 'ItemModelEdition',
                  component: ItemModelEdition
                },
                {
                  path: 'ItemModelAddition',
                  name: 'ItemModelAddition',
                  component: ItemModelAddition
                }
              ]
            },
            {
              path: 'groupManage',
              name: "GroupManageContainer",
              component: GroupManageContainer,
              redirect: {name: 'GroupManage'},
              children: [
                {
                  path: 'index',
                  name: 'GroupManage',
                  component: GroupManage
                },
                {
                  path: 'GroupManageDeviceEdition',
                  name: 'GroupManageDeviceEdition',
                  component: GroupManageDeviceEdition
                },
                {
                  path: 'GroupManageEdition',
                  name: 'GroupManageEdition',
                  component: GroupManageEdition
                },
                {
                  path: 'GroupManageAddition',
                  name: 'GroupManageAddition',
                  component: GroupManageAddition
                },
              ]
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
