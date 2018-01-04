import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/indexRouter/detail'
import shortData from '../components/dataTemplate/shortData'
import home from '../components/indexRouter/home'
import repositoryList from '../components/wareHouse/repositoryList'
import repositoryData from '../components/wareHouse/repositoryData'
import supplierEdit from '../components/supplierData/supplierEdit'
import groupManage from '../components/groupManage/groupManager'
Vue.use(Router)


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home,name:'home' },
  { path: '/detail', component: detail,name:'detail' },
  { path: '/shortData', component: shortData,name:'shortData' },
  { path: '/repositoryList', component: repositoryList,name:'repositoryList' },
  { path: '/repositoryData', component: repositoryData,name:'repositoryData' },
  {path: '/supplierEdit', component: supplierEdit,name:'supplierEdit'},
  {path: '/groupManage', component: groupManage,name:'groupManage'}
]
export default new Router({
  linkActiveClass: 'active',
  routes
})
