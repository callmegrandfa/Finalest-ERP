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
import orderDetail from '../components/purchaseOrder/orderDetails'
import orderList from '../components/purchaseOrder/orderList'
import supplierList from '../components/supplierData/supplierList'
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
  { path: '/detail', component: detail,name:'detail' },
  { path: '/shortData', component: shortData,name:'shortData' },
  { path: '/midData', component: midData,name:'midData' },
  { path: '/longData', component: longData,name:'longData' },
  { path: '/repositoryList', component: repositoryList,name:'repositoryList' },
  { path: '/repositoryData', component: repositoryData,name:'repositoryData' },
  { path: '/supplierEdit/:params', component: supplierEdit,name:'supplierEdit'},
  { path: '/groupManage', component: groupManage,name:'groupManage'},
  { path: '/goodsData', component: goodsData,name:'goodsData' },
  { path: '/storeData', component: storeData,name:'storeData' },
  { path: '/basicInfor', component: basicInfor,name:'basicInfor' },
  { path: '/customerBasicInfor', component: customerBasicInfor,name:'customerBasicInfor' },
  { path: '/customerInfor', component: customerInfor,name:'customerInfor' },
  { path: '/orderDetail', component: orderDetail,name:'orderDetails' },
  { path: '/orderList', component: orderList,name:'orderList' },
  { path: '/supplierList', component: supplierList,name:'supplierList' }],
  }]

  const router=new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
  })
 
  // router.beforeResolve((to, from, next) => {
  //   var isLogin= router.app.$options.store.state.accessToken
  //  console.log(router.app.$children)
  //   if(isLogin==''){
  //     next({ path: '/login' })
  //     //next()
  //   }else{
  //     next()
  //   }
  // })
export default  router
