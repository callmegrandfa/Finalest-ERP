import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const index = () =>import(/* webpackChunkName: "group-index" */'../components/index')
const login = () =>import('../components/login')
const register = () =>import('../components/register')
const page404 = () =>import('../components/page404')
const detail = () =>import('../components/groupManage/detail')
const shortData = () =>import('../components/dataTemplate/shortData')
const midData = () =>import('../components/dataTemplate/midData')
const longData = () =>import('../components/dataTemplate/longData')
const home = () =>import(/* webpackChunkName: "group-index" */'../components/home/home')
const repositoryList = () =>import('../components/wareHouse/repositoryList')
const repositoryData = () =>import('../components/wareHouse/repositoryData')
const supplierEdit = () =>import('../components/supplierData/supplierEdit')
const groupManager = () =>import('../components/groupManage/groupManager')
const goodsData = () =>import('../components/goodsData/goodsData')
const storeData = () =>import('../components/storeInformation/storeData')
const storeBasicInfor = () =>import('../components/storeInformation/storeBasicInfor')
const customerBasicInfor = () =>import('../components/customerInfor/customerBasicInfor')
const customerInfor = () =>import('../components/customerInfor/customerInfor')
const orderDetails = () =>import('../components/purchaseOrder/orderDetails')
const orderList = () =>import('../components/purchaseOrder/orderList')
const supplierList = () =>import('../components/supplierData/supplierList')
const organization = () =>import('../components/groupManage/organization')
Vue.use(Router)

const routes = [
  { path: '*', component: page404},
  { path: '/', redirect: '/login' },
  { path: '/login', component: login,name:'login' },
  { path: '/register', component: register,name:'register' },
  { path: '/index', component: index,name:'index',
  beforeEnter: (to, from, next) => {//如果未登录,index路由包括其子路由会自动跳转/login
    //console.log(store.state.accessToken)
    if (store.state.accessToken==''){ 
      // alert('请先登录')
      // next('/login')
      next()
    }else{
      next()
    }
  },
children:[
  { path: '/home', component: home,name:'home' },
  { path: '/detail/:id', component: detail,name:'detail' },
  { path: '/shortData/:id', component: shortData,name:'shortData' },
  { path: '/longData/:id', component: longData,name:'longData' },
  { path: '/midData/:id', component: midData,name:'midData' },
  { path: '/repositoryList/:id', component: repositoryList,name:'repositoryList' },
  { path: '/repositoryData/:id', component: repositoryData,name:'repositoryData' },
  { path: '/supplierEdit/:id', component: supplierEdit,name:'supplierEdit'},
  { path: '/groupManager/:id', component: groupManager,name:'groupManager'},
  { path: '/goodsData/:id', component: goodsData,name:'goodsData' },
  { path: '/storeData/:id', component: storeData,name:'storeData' },
  { path: '/storeBasicInfor/:id', component: storeBasicInfor,name:'storeBasicInfor' },
  { path: '/customerBasicInfor/:id', component: customerBasicInfor,name:'customerBasicInfor' },
  { path: '/customerInfor/:id', component: customerInfor,name:'customerInfor' },
  { path: '/orderDetails/:id', component: orderDetails,name:'orderDetails' },
  { path: '/orderList/:id', component: orderList,name:'orderList' },
  { path: '/supplierList/:id', component: supplierList,name:'supplierList' },
  { path: '/organization/:id', component: organization,name:'organization' },

]}
]
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
