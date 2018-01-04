import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/indexRouter/detail'
import shortData from '../components/dataTemplate/shortData'
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
Vue.use(Router)


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home,name:'home' },
  { path: '/detail', component: detail,name:'detail' },
  { path: '/shortData', component: shortData,name:'shortData' },
  { path: '/repositoryList', component: repositoryList,name:'repositoryList' },
  { path: '/repositoryData', component: repositoryData,name:'repositoryData' },
  { path: '/supplierEdit', component: supplierEdit,name:'supplierEdit'},
  { path: '/groupManage', component: groupManage,name:'groupManage'},
  { path: '/goodsData', component: goodsData,name:'goodsData' },
  { path: '/storeData', component: storeData,name:'storeData' },
  { path: '/basicInfor', component: basicInfor,name:'basicInfor' },
  { path: '/customerBasicInfor', component: customerBasicInfor,name:'customerBasicInfor' },
  { path: '/customerInfor', component: customerInfor,name:'customerInfor' },
  { path: '/orderDetail', component: orderDetail,name:'orderDetails' },
  { path: '/orderList', component: orderList,name:'orderList' },
]
export default new Router({
  linkActiveClass: 'active',
  routes
})
