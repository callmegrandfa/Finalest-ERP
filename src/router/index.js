import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/indexRouter/detail'
import shotData from '../components/indexRouter/shotData'
import home from '../components/indexRouter/home'
Vue.use(Router)


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home,name:'home' },
  { path: '/detail', component: detail,name:'detail' },
  { path: '/shotData', component: shotData,name:'shotData' }
]
export default new Router({
  linkActiveClass: 'active',
  routes
})
