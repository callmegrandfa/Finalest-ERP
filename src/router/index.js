import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import index from '../components/index'
import login from '../components/login'
import register from '../components/register'
import page404 from '../components/page404'
import detail from '../components/indexRouter/detail'
import shortData from '../components/dataTemplate/shortData'
import midData from '../components/dataTemplate/midData'
import longData from '../components/dataTemplate/longData'
import home from '../components/indexRouter/home'
import repositoryList from '../components/wareHouse/repositoryList'
import repositoryData from '../components/wareHouse/repositoryData'
import supplierEdit from '../components/supplierData/supplierEdit'
import groupManage from '../components/groupManage/groupManager'
import goodsData from '../components/goodsData/goodsData'
import storeData from '../components/storeInformation/storeData'
import basicInfor from '../components/storeInformation/basicInfor'
import customerBasicInfor from '../components/customerInfor/basicInfor'
import customerInfor from '../components/customerInfor/customerInfor'
import orderDetails from '../components/purchaseOrder/orderDetails'
import orderList from '../components/purchaseOrder/orderList'
import supplierList from '../components/supplierData/supplierList'
import organization from '../components/groupManage/organization'
Vue.use(Router)

const routes = [
  { path: '*', component: page404},
  { path: '/', redirect: '/login' },
  { path: '/login', component: login,name:'login' },
  { path: '/register', component: register,name:'register' },
  { path: '/index', component: index,name:'index',
  beforeEnter: (to, from, next) => {//如果未登录,index路由包括其子路由会自动跳转/login
    if (document.cookie.length>0){ 
      if (document.cookie.indexOf(store.state.username + "=")!=-1)
          { //已登录
            next();
          }else{
            //cookie名为username不存在
            next('/login');
            alert('请您先登录')
          } 
    }else{
        next('/login');
        alert('请您先登录')
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
  { path: '/groupManage/:id', component: groupManage,name:'groupManage'},
  { path: '/goodsData/:id', component: goodsData,name:'goodsData' },
  { path: '/storeData/:id', component: storeData,name:'storeData' },
  { path: '/basicInfor/:id', component: basicInfor,name:'basicInfor' },
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
