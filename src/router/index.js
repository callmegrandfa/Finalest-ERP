import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const index = () =>import(/* webpackChunkName: "group-index" */'../components/index')
const login = () =>import('../components/login')
const register = () =>import('../components/register')
const page404 = () =>import('../components/page404')
const shortData = () =>import('../components/dataTemplate/shortData')
const midData = () =>import('../components/dataTemplate/midData')
const longData = () =>import('../components/dataTemplate/longData')
const home = () =>import(/* webpackChunkName: "group-index" */'../components/home/home')
const repositoryList = () =>import('../components/wareHouse/repositoryList')
const repositoryData = () =>import('../components/wareHouse/repositoryData')
const supplierEdit = () =>import('../components/supplierData/supplierEdit')
const goodsData = () =>import('../components/goodsData/goodsData')
const storeData = () =>import('../components/storeInformation/storeData')
const storeBasicInfor = () =>import('../components/storeInformation/storeBasicInfor')
const customerBasicInfor = () =>import('../components/customerInfor/customerBasicInfor')
const customerInfor = () =>import('../components/customerInfor/customerInfor')
const order = () =>import(/* webpackChunkName: "group-order" */'../components/purchaseOrder/order')
const orderDetails = () =>import('../components/purchaseOrder/orderDetails')
const orderList = () =>import(/* webpackChunkName: "group-order" */'../components/purchaseOrder/orderList')
const supplierList = () =>import('../components/supplierData/supplierList')
const userInfoDetail = () =>import('../components/user/userInfoDetail')
const userList = () =>import('../components/user/userList')
const userDataList = () =>import('../components/user/userDataList')
const tenantManagement = () =>import('../components/tenantManagement/tenantManagement')
const tenantManagementAdd = () =>import('../components/tenantManagement/tenantManagementAdd')
const groupManage = () =>import(/* webpackChunkName: "group-manage" */'../components/groupManage/groupManage')
const groupManageList = () =>import(/* webpackChunkName: "group-manage" */'../components/groupManage/groupManageList')
const detail = () =>import('../components/groupManage/detail')
const organization = () =>import('../components/groupManage/organization')
const groupManager = () =>import('../components/groupManage/groupManager')
Vue.use(Router)

const routes = [
  { path: '*', component: page404},
  { path: '/', redirect: '/login' },
  { path: '/login', component: login,name:'login' },
  { path: '/register', component: register,name:'register' },
  { path: '/index', component: index,name:'index',
  beforeEnter: (to, from, next) => {//如果未登录,index路由包括其子路由会自动跳转/login
    let names=[];
    store.state.username=[];//初始化，避免重复push
    for(let i=0;i<window.sessionStorage.length;i++){
        let key=window.sessionStorage.key(i);
        let value=window.sessionStorage.getItem(key);
        let item={'name':key,'accessToken':value};
        store.state.username.push(item);//vuex,store里面存入数据
        for(let e=0;e<store.state.username.length;e++){
            let name=store.state.username[e].name;
            let token=store.state.username[e].accessToken;
            if(key==name){//vuex里面存在用户名和sessionStorage里面key值相等
              names.push(name); 
            }
        }
    }
    if(names.length>1){//多账号登录
      window.localStorage.clear();
      let flag=false;
      let x='';
      if(store.state.alerts){
         x=prompt("当前登录"+names.length+"个账号,分别是："+names.join(',')+"请输入您将要登录的账号或者关闭浏览器重新登录或者注销已经登录的账号重新登录");
      }
      if(x!=null && x!=""){
        let token='';
        let username='';
        for(let e=0;e<store.state.username.length;e++){
            let name=store.state.username[e].name;
            if(x==name){//vuex里面存在用户名和sessionStorage里面key值相等
              token=store.state.username[e].accessToken;
              username=name;
              flag=true;
              break;
            }else{
              flag=false;
            }
        }
        if(flag){
          store.state.alerts=false;
          store.state.name=x;
          store.state.accessToken=token;
          next();
        }else{
          store.state.alerts=true;
          alert('用户名错误');
          next('/login')
        }
      }else{
        alert('用户名不能为空');
      }
    }else if(names.length==1){//正常登录
      store.state.name=store.state.username[0].name;
      store.state.accessToken=store.state.username[0].accessToken;
      next();
    }else{
      next('/login')
    }
  
  },
children:[
  { path: '/home', component: home,name:'home' },
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
  { path: '/order/:id', component: order,name:'order',redirect: function(){//单据开弹模板
    return store.state.OrderActiveRouter;
  },children:[
      { path: '/order/default/orderDetails/:id', component: orderDetails,name:'orderDetails' },
      { path: '/order/default/orderList/:id', component: orderList,name:'orderList' },
  ]},
  { path: '/groupManage/:id', component: groupManage,name:'groupManage',redirect: function(){//集团管理
    return store.state.groupActiveRouter;
  },children:[
      { path: '/groupManage/default/detail/:id', component: detail,name:'detail' },
      { path: '/groupManage/default/groupManageList/:id', component: groupManageList,name:'groupManageList' },
  ]},
  { path: '/supplierList/:id', component: supplierList,name:'supplierList' },
  { path: '/organization/:id', component: organization,name:'organization' },
  { path: '/userInfoDetail/:id', component: userInfoDetail,name:'userInfoDetail' },
  { path: '/userList/:id', component: userList,name:'userList' },
  { path: '/userDataList/:id', component: userDataList,name:'userDataList' },
  { path: '/tenantManagement/:id', component: tenantManagement,name:'tenantManagement' },
  { path: '/tenantManagementAdd/:id', component: tenantManagementAdd,name:'tenantManagementAdd' },
]}
]
let router=new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
router.beforeEach((to, from, next) => {
  store.commit('slidbarData');
  document.title = to.name
  if(to.name=='orderDetails'){
    store.state.OrderActiveRouter='/order/default/orderDetails/:id';
  }else if(to.name=='orderList'){
    store.state.OrderActiveRouter='/order/default/orderList/:id';
  }else if(to.name=='detail'){
    store.state.groupActiveRouter='/groupManage/default/detail/:id';
  }else if(to.name=='groupManageList'){
    store.state.groupActiveRouter='/groupManage/default/groupManageList/:id';
  }
   next()
})
export default router
