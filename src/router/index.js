import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const index = () =>
    import ( /* webpackChunkName: "group-index" */ '../components/index')
    // 登录
const login = () =>
    import ('../components/login')
    // 注册
const register = () =>
    import ('../components/register')
    // 404
const page404 = () =>
    import ('../components/page404')
    // home
const home = () =>
    import ( /* webpackChunkName: "group-index" */ '../components/home/home')

const shortData = () =>
    import ('../components/dataTemplate/shortData')
const midData = () =>
    import ('../components/dataTemplate/midData')
const longData = () =>
    import ('../components/dataTemplate/longData')

const repository = () =>
    import ('../components/wareHouse/repository')
const repositoryList = () =>
    import ('../components/wareHouse/repositoryList')
const repositoryData = () =>
    import ('../components/wareHouse/repositoryData')
const repositoryModify = () =>
    import ('../components/wareHouse/repositoryModify')

const supplierEdit = () =>
    import ('../components/supplierData/supplierEdit')
const goodsData = () =>
    import ('../components/goodsData/goodsData')

const customer = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/customerInfor/customer')
const customerList = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/customerInfor/customerList')
const customerDetail = () =>
    import ('../components/customerInfor/customerDetail')
const customerModify = () =>
    import ('../components/customerInfor/customerModify')
//客户分类
const customerClass = () =>
    import (  '../components/customerClass/customerClass')
const customerClassList = () =>
    import (  '../components/customerClass/customerClassList')
const customerClassDetail = () =>
    import ('../components/customerClass/customerClassDetail')
const customerClassModify = () =>
    import ('../components/customerClass/customerClassModify')
const account = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/account/account')
const accountList = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/account/accountList')
const accountDetail = () =>
    import ('../components/account/accountDetail')
const accountModify = () =>
    import ('../components/account/accountModify')


const currency = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/currency/currency')
const currencyList = () =>
    import ( /* webpackChunkName: "group-customer" */ '../components/currency/currencyList')

//采购管理
const order = () =>
    import ( /* webpackChunkName: "group-order" */ '../components/purchaseOrder/order')
const orderDetails = () =>
    import ('../components/purchaseOrder/orderDetails')
const orderList = () =>
    import ( /* webpackChunkName: "group-order" */ '../components/purchaseOrder/orderList')

//用户管理
const user = () =>
    import ( /* webpackChunkName: "group-user" */ '../components/user/user')
const userList = () =>
    import ( /* webpackChunkName: "group-user" */ '../components/user/userList')
const userDetail = () =>
    import ('../components/user/userDetail')
const userModify = () =>
    import ('../components/user/userModify')
//用户组管理
const userGroup = () =>
    import ( /* webpackChunkName: "group-userGroup" */ '../components/userGroup/userGroup')
const userGroupList = () =>
    import ( /* webpackChunkName: "group-userGroup" */ '../components/userGroup/userGroupList')
const userGroupDetail = () =>
    import ('../components/userGroup/userGroupDetail')
const userGroupModify = () =>
    import ('../components/userGroup/userGroupModify')
    //角色管理
const role = () =>
    import ( /* webpackChunkName: "group-role" */ '../components/role/role')
const roleList = () =>
    import ( /* webpackChunkName: "group-role" */ '../components/role/roleList')
const roleDetail = () =>
    import ('../components/role/roleDetail')
const roleModify = () =>
    import ('../components/role/roleModify')

//租户管理
const tenant = () =>
    import ('../components/tenantManagement/tenant')
const tenantManagement = () =>
    import ('../components/tenantManagement/tenantManagement')
const tenantManagementAdd = () =>
    import ('../components/tenantManagement/tenantManagementAdd')
    //集团管理
const groupManage = () =>
    import ('../components/groupManage/groupManage')
const groupManageList = () =>
    import ('../components/groupManage/groupManageList')
    //组织管理
const OuManage = () =>
    import ( /* webpackChunkName: "group-manage" */ '../components/groupManage/OuManage')
const OuManageList = () =>
    import ( /* webpackChunkName: "group-manage" */ '../components/groupManage/OuManageList')
const OuManageDetail = () =>
    import ('../components/groupManage/OuManageDetail')
const OuManageModify = () =>
    import ('../components/groupManage/OuManageModify')
const OuManageSee = () =>
    import ('../components/groupManage/OuManageSee')
    // 2.0单据模板
const bill = () =>
    import ( /* webpackChunkName: "group-bill" */ '../components/template2.0/bill')
const billDetails = () =>
    import ('../components/template2.0/billDetails')
const billList = () =>
    import ( /* webpackChunkName: "group-bill" */ '../components/template2.0/billList')
    // 菜单管理
const menu = () =>
    import ( /* webpackChunkName: "group-menu" */ '../components/menu/menu')
const menuDetail = () =>
    import ('../components/menu/menuDetail')
const menuList = () =>
    import ( /* webpackChunkName: "group-menu" */ '../components/menu/menuList')
const menuModify = () =>
    import ('../components/menu/menuModify')
const addLangulage = () =>
    import ('../components/menu/addLangulage')
    // 业务地区管理
const businessArea = () =>
    import ( /* webpackChunkName: "group-businessArea" */ '../components/businessArea/businessArea')
const businessAreaList = () =>
    import ( /* webpackChunkName: "group-businessArea" */ '../components/businessArea/businessAreaList')
const businessAreaDetail = () =>
    import ('../components/businessArea/businessAreaDetail')
const businessAreaModify = () =>
    import ('../components/businessArea/businessAreaModify')
    // 部门资料
const department = () =>
    import ( /* webpackChunkName: "group-department" */ '../components/department/department')
const departmentList = () =>
    import ( /* webpackChunkName: "group-department" */ '../components/department/departmentList')
const departmentDetail = () =>
    import ( /* webpackChunkName: "group-department" */ '../components/department/departmentDetail')
const departmentModify = () =>
    import ( /* webpackChunkName: "group-department" */ '../components/department/departmentModify')
    //店铺资料
const shop = () =>
    import ( /* webpackChunkName: "group-shop" */ '../components/shop/shop')
const shopList = () =>
    import ( /* webpackChunkName: "group-shop" */ '../components/shop/shopList')
const shopDetail = () =>
    import ( /* webpackChunkName: "group-shop" */ '../components/shop/shopDetail')
const shopModify = () =>
    import ( /* webpackChunkName: "group-shop" */'../components/shop/shopModify')
    // 系统字典
const dictionary = () =>
    import ( /* webpackChunkName: "group-dictionary" */ '../components/dictionary/dictionary')
const dictionaryList = () =>
    import ( /* webpackChunkName: "group-dictionary" */ '../components/dictionary/dictionaryList')
    // 商品属性
const commodityleimu = () =>//商品类目
    import ('../components/commodityManagement/commodityleimu')
const CommodityCategories = () =>
    import ('../components/commodityManagement/CommodityCategories')
const CommodityCategoriesDetails = () =>
    import ('../components/commodityManagement/CommodityCategoriesDetails')
const commodityBrand = () =>
    import ('../components/commodityManagement/commodityBrand')
const commodityClassHeading = () =>
    import ('../components/commodityManagement/commodityClassHeading')
const commodityProperty = () =>//商品属性
    import ('../components/commodityManagement/commodityProperty')
const commodityPropertyList = () =>//商品属性列表
    import ('../components/commodityManagement/commodityPropertyList')
const commodityPropertyDetails = () =>//商品属性详情
    import ('../components/commodityManagement/commodityPropertyDetails') 

   

const specificationOfGoods= ()=>//商品规格
    import ('../components/commodityManagement/specificationOfGoods')  
 // 职员资料
    const staff = () =>
    import ('../components/staffInfo/staff')
const staffList = () =>
    import ('../components/staffInfo/staffList')
const staffDetail = () =>
    import ('../components/staffInfo/staffDetail')
const staffModify = () =>
    import ('../components/staffInfo/staffModify')
    // 计量单位
const count=()=>import('../components/count/count')
const countList=()=>import('../components/count/countList')
    // 行政地区
const adminstrArea = () => import('../components/administrativeArea/adminstrArea')
const adminstrAreaList = () => import('../components/administrativeArea/adminstrAreaList')
const adminstrAreaDetail = () => import('../components/administrativeArea/adminstrAreaDetail')
const adminstrAreaModify = () => import('../components/administrativeArea/adminstrAreaModify')
// 供应商分类
const supplierClassify = () => import('../components/supplierClassify/supplierClassify')
const supplierClassifyList = () => import('../components/supplierClassify/supplierClassifyList')
const supplierClassifyDetail = () => import('../components/supplierClassify/supplierClassifyDetail')
const supplierClassifyModify = () => import('../components/supplierClassify/supplierClassifyModify')
    

let redirectRouter = function(routerName) { //重定向
    let activeRouter = store.state.activeRouter;
    return store.state[routerName].url
    // for (let i = 0; i < activeRouter.length; i++) {
    //     if (activeRouter[i].name == routerName) {
    //         return activeRouter[i].url;
    //         break;
    //     }
    // }
    
}
Vue.use(Router)
const routes = [
    { path: '*', component: page404 },
    { path: '/', redirect: '/login' },
    { path: '/login', component: login, name: 'login' },
    { path: '/register', component: register, name: 'register' },
    {
        path: '/index',
        component: index,
        name: 'index',
        redirect: '/home',
        beforeEnter: (to, from, next) => { //如果未登录,index路由包括其子路由会自动跳转/login
            store.commit('username');
            if (store.state.username != null) {
                if (store.state.username.length > 1) { //多账号登录
                    window.localStorage.clear();
                    let flag = false;
                    let x = '';
                    let names = [];
                    for (let i = 0; i < store.state.username.length; i++) {
                        let name = store.state.username[i].name;
                        names.push(name);
                    }
                    if (store.state.alerts) {
                        x = prompt("当前登录" + names.length + "个账号,分别是：" + names.join(',') + "请输入您将要登录的账号或者关闭浏览器重新登录或者注销账号重新登录");
                    }
                    if (x != null && x != "") {
                        let token = '';
                        let username = '';
                        for (let e = 0; e < store.state.username.length; e++) {
                            let name = store.state.username[e].name;
                            if (x == name) { //vuex里面存在用户名和sessionStorage里面key值相等
                                token = store.state.username[e].accessToken;
                                username = name;
                                flag = true;
                                break;
                            } else {
                                flag = false;
                            }
                        }
                        if (flag) {
                            store.state.alerts = false;
                            store.state.name = x;
                            store.state.accessToken = token;
                            
                            next();
                        } else {
                            store.state.alerts = true;
                            alert('用户名错误');
                            next('/login')
                        }
                    } else {
                        alert('用户名不能为空');
                    }
                } else if (store.state.username.length == 1) {
                    store.state.name = store.state.username[0].name;
                    store.state.accessToken = store.state.username[0].accessToken;
                    next();
                } else {
                    next('/login')
                }
            } else {
                next('/login')
            }
        },
        children: [
            { path: '/home', component: home, name: 'home' },
            { path: '/shortData', component: shortData, name: 'shortData' },
            { path: '/longData', component: longData, name: 'longData' },
            { path: '/midData', component: midData, name: 'midData' },
            {
                path: '/repository',
                component: repository,
                name: 'repository',
                redirect: function() { //仓库管理
                    return redirectRouter('repository')
                },
                children: [
                    { path: '/repository/repositoryList/:id', component: repositoryList, name: 'repositoryList' },
                    { path: '/repository/repositoryData/:id', component: repositoryData, name: 'repositoryData' },
                    { path: '/repository/repositoryModify/:id', component: repositoryModify, name: 'repositoryModify' },
                ]
            },
            { path: '/supplierEdit/:id', component: supplierEdit, name: 'supplierEdit' },
            { path: '/goodsData/:id', component: goodsData, name: 'goodsData' },

            {
                path: '/customer',
                component: customer,
                name: 'customer',
                redirect: function() { //客户管理
                    return redirectRouter('customer')
                },
                children: [
                    { path: '/customer/customerList/:id', component: customerList, name: 'customerList' },
                    { path: '/customer/customerDetail/:id', component: customerDetail, name: 'customerDetail' },
                    { path: '/customer/customerModify/:id', component: customerModify, name: 'customerModify' },
                ]
            },
            {
                path: '/customerClass',
                component: customerClass,
                name: 'customerClass',
                redirect: function() { //客户分类
                    return redirectRouter('customerClass')
                },
                children: [
                    { path: '/customerClass/customerClassList/:id', component:  customerClassList, name: 'customerClassList' },
                    { path: '/customerClass/customerClassDetail/:id', component: customerClassDetail, name: 'customerClassDetail' },
                    { path: '/customerClass/customerClassModify/:id', component: customerClassModify, name: 'customerClassModify' },
                ]
            },
            {
                path: '/account',
                component: account,
                name: 'account',
                redirect: function() { //客户管理
                    return redirectRouter('account')
                },
                children: [
                    { path: '/account/accountList/:id', component: accountList, name: 'accountList' },
                    { path: '/account/accountDetail/:id', component: accountDetail, name: 'accountDetail' },
                    { path: '/account/accountModify/:id', component: accountModify, name: 'accountModify' },
                ]
            },

            {
                path: '/currency',
                component: currency,
                name: 'currency',
                redirect: function() { //币种资料
                    return redirectRouter('currency')
                },
                children: [
                    { path: '/currency/currencyList/:id', component: currencyList, name: 'currencyList' },
                ]
            },

            {
                path: '/account',
                component: account,
                name: 'account',
                redirect: function() { //会计期间
                    return redirectRouter('account')
                },
                children: [
                    { path: '/account/accountList/:id', component: accountList, name: 'accountList' },
                ]
            },

            {
                path: '/order',
                component: order,
                name: 'order',
                redirect: function() { //采购管理
                    return redirectRouter('order')
                },
                children: [
                    { path: '/order/orderDetails/:id', component: orderDetails, name: 'orderDetails' },
                    { path: '/order/orderList/:id', component: orderList, name: 'orderList' },
                ]
            },

            {
                path: '/bill',
                component: bill,
                name: 'bill',
                redirect: function() { //单据开单模板
                    return redirectRouter('bill')
                },
                children: [
                    { path: '/bill/billDetails/:id', component: billDetails, name: 'billDetails' },
                    { path: '/bill/billList/:id', component: billList, name: 'billList' },
                ]
            },
            {
                path: '/groupManage',
                component: groupManage,
                name: 'groupManage',
                redirect: function() { //集团管理
                    return redirectRouter('groupManage')
                },
                children: [
                    { path: '/groupManage/groupManageList/:id', component: groupManageList, name: 'groupManageList' },
                ]
            },
            {
                path: '/OuManage',
                component: OuManage,
                name: 'OuManage',
                redirect: function() { //组织管理
                    return redirectRouter('OuManage')
                },
                children: [
                    { path: '/OuManage/OuManageModify/:id', component: OuManageModify, name: 'OuManageModify' },
                    { path: '/OuManage/OuManageDetail/:id', component: OuManageDetail, name: 'OuManageDetail' },
                    { path: '/OuManage/OuManageList/:id', component: OuManageList, name: 'OuManageList' },
                ]
            },
            {
                path: '/menu',
                component: menu,
                name: 'menu',
                redirect: function() { //菜单管理
                    return redirectRouter('menu')
                },
                children: [
                    { path: '/menu/menuDetail/:id', component: menuDetail, name: 'menuDetail' },
                    { path: '/menu/menuList/:id', component: menuList, name: 'menuList' },
                    { path: '/menu/menuModify/:id', component: menuModify, name: 'menuModify' },
                    { path: '/menu/addLangulage/:id', component: addLangulage, name: 'addLangulage' },
                ]
            },
            { path: '/commodityBrand/:id', component: commodityBrand, name: 'commodityBrand' }, //商品品牌

            {
                path: '/businessArea',
                component: businessArea,
                name: 'businessArea',
                redirect: function() { //业务地区
                    return redirectRouter('businessArea')
                },
                children: [
                    { path: '/businessArea/businessAreaList/:id', component: businessAreaList, name: 'businessAreaList' },
                    { path: '/businessArea/businessAreaDetail/:id', component: businessAreaDetail, name: 'businessAreaDetail' },
                    { path: '/businessArea/businessAreaModify/:id', component: businessAreaModify, name: 'businessAreaModify' },
                ]
            },
            {
                path: '/department',
                component: department,
                name: 'department',
                redirect: function() { //部门资料
                    return redirectRouter('department')
                },
                children: [
                    { path: '/department/departmentList/:id', component: departmentList, name: 'departmentList' },
                    { path: '/department/departmentDetail/:id', component: departmentDetail, name: 'departmentDetail' },
                    { path: '/department/departmentModify/:id', component: departmentModify, name: 'departmentModify' },
                ]
            },
            {
                path: '/shop',
                component: shop,
                name: 'shop',
                redirect: function() { //店铺资料
                    return redirectRouter('shop')
                },
                children: [
                    { path: '/shop/shopList/:id', component: shopList, name: 'shopList' },
                    { path: '/shop/shopDetail/:id', component: shopDetail, name: 'shopDetail' },
                    { path: '/shop/shopModify/:id', component: shopModify, name: 'shopModify' },
                ]
            },


            // { path: '/supplierList/:id', component: supplierList, name: 'supplierList' },
            // { path: '/userInfoDetail/:id', component: userInfoDetail,name:'userInfoDetail' },
            // { path: '/userList/:id', component: userList,name:'userList' },
            // { path: '/userDataList/:id', component: userDataList,name:'userDataList' },
            { path: '/specificationOfGoods/:id', component: specificationOfGoods, name: 'specificationOfGoods' },

            { path: '/tenant', component: tenant,name:'tenant',redirect: function(){//租户管理
              let name='tenant';
              let activeRouter=store.state.activeRouter;
              for(let i=0;i<activeRouter.length;i++){
                  if(activeRouter[i].name==name){

                    return activeRouter[i].url;

                    break;
                  }
              }
            },children:[
                { path: '/tenant/tenantManagement/:id', component: tenantManagement,name:'tenantManagement' },
                { path: '/tenant/tenantManagementAdd/:id', component: tenantManagementAdd,name:'tenantManagementAdd' },
            ]},
            {
                path: '/staff',
                component: staff,
                name: 'staff',
                redirect: function() { //职员资料组
                    let name = 'staff';
                    let activeRouter = store.state.activeRouter;
                    for (let i = 0; i < activeRouter.length; i++) {
                        if (activeRouter[i].name == name) {

                            return activeRouter[i].url;

                            break;
                        }
                    }
                },
                children: [
                    { path: '/staff/staffList/:id', component: staffList, name: 'staffList' },
                    { path: '/staff/staffDetail/:id', component: staffDetail, name: 'staffDetail' },
                    { path: '/staff/staffModify/:id', component: staffModify, name: 'staffModify' },
                ]
            },
            {
                path: '/commodityleimu',
                component: commodityleimu,
                name: 'commodityleimu',
                redirect: function() { //商品类目
                    return redirectRouter('commodityleimu')
                },
                children: [
                    { path: '/commodityleimu/commodityClassHeading/:id', component: commodityClassHeading, name: 'commodityClassHeading' }, //商品类目
                    // { path: '/commodityleimu/CommodityCategories/:id', component: CommodityCategories, name: 'CommodityCategories' },
                    { path: '/commodityleimu/CommodityCategoriesDetails/:id', component: CommodityCategoriesDetails, name: 'CommodityCategoriesDetails' },
                ]
            },
            {
                path: '/commodityProperty',
                component: commodityProperty,
                name: 'commodityProperty',
                redirect: function() { //商品属性
                    return redirectRouter('commodityProperty')
                },
                children: [
                    { path: '/commodityProperty/commodityPropertyList/:id', component: commodityPropertyList, name: 'commodityPropertyList' }, //商品属性
                    // { path: '/commodityleimu/CommodityCategories/:id', component: CommodityCategories, name: 'CommodityCategories' },
                    { path: '/commodityProperty/commodityPropertyDetails/:id', component: commodityPropertyDetails, name: 'commodityPropertyDetails' },
                ]
            },
            {
                path: '/dictionary',
                component: dictionary,
                name: 'dictionary',
                redirect: function() { //系统字典
                    return redirectRouter('dictionary')
                },
                children: [
                    { path: '/dictionary/dictionaryList/:id', component: dictionaryList, name: 'dictionaryList' },
                ]
            },
            {
                path: '/user',
                component: user,
                name: 'user',
                redirect: function() { //用户资料
                    return redirectRouter('user')
                },
                children: [
                    { path: '/user/userList/:id', component: userList, name: 'userList' },
                    { path: '/user/userDetail/:id', component: userDetail, name: 'userDetail' },
                    { path: '/user/userModify/:id', component: userModify, name: 'userModify' },
                ]
            },
            {
                path: '/userGroup',
                component: userGroup,
                name: 'userGroup',
                redirect: function() { //用户组资料
                    return redirectRouter('userGroup')
                },
                children: [
                    { path: '/userGroup/userGroupList/:id', component: userGroupList, name: 'userGroupList' },
                    { path: '/userGroup/userGroupDetail/:id', component: userGroupDetail, name: 'userGroupDetail' },
                    { path: '/userGroup/userGroupModify/:id', component: userGroupModify, name: 'userGroupModify' },
                ]
            },
            {
                path: '/role',
                component: role,
                name: 'role',
                redirect: function() { //角色资料
                    return redirectRouter('role')
                },
                children: [
                    { path: '/role/roleList/:id', component: roleList, name: 'roleList' },
                    { path: '/role/roleDetail/:id', component: roleDetail, name: 'roleDetail' },
                    { path: '/role/roleModify/:id', component: roleModify, name: 'roleModify' },
                ]
            },
            {
                path: '/count',
                component: count,
                name: 'count',
                redirect: function () { //计量单位
                    return redirectRouter('count')
                },
                children:[
                    { path: '/count/countList/:id', component: countList, name:'countList'}
                ],

            },
            {
                path: '/adminstrArea',
                component: adminstrArea,
                name: 'adminstrArea',
                redirect: function () { //行政地区
                    return redirectRouter('adminstrArea')
                },
                children:[
                    { path: '/adminstrArea/adminstrAreaList/:id', component: adminstrAreaList, name:'adminstrAreaList'},
                    { path: '/adminstrArea/adminstrAreaDetail/:id', component: adminstrAreaDetail, name:'adminstrAreaDetail'},
                    { path: '/adminstrArea/adminstrAreaModify/:id', component: adminstrAreaModify, name:'adminstrAreaModify'},
                ],

            },
            {
                path: '/supplierClassify',
                component: supplierClassify,
                name: 'supplierClassify',
                redirect: function () { //供应商分类
                    return redirectRouter('supplierClassify')
                },
                children: [
                    { path: '/supplierClassify/supplierClassifyList/:id', component: supplierClassifyList, name: 'supplierClassifyList' },
                    { path: '/supplierClassify/supplierClassifyDetail/:id', component: supplierClassifyDetail, name: 'supplierClassifyDetail' },
                    { path: '/supplierClassify/supplierClassifyModify/:id', component: supplierClassifyModify, name: 'supplierClassifyModify' },
                ],

            },
        ]
    },

]
const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})
router.beforeEach((to, from, next) => {
    store.commit('slidbarData');
    if (from.name == 'login') { //如果用户登录，清楚缓存
        store.state.Alive = false;
    } else {
        store.state.Alive = true;
    }
    // $('.one').each(function(index){//菜单高亮
    //     if($(this).attr('data-url')!=undefined){
    //         for(let i=0;i<$(this).attr('data-url').split(',').length;i++){
    //             if($(this).attr('data-url').split(',')[i]==to.path.split('/')[1]){
    //                 $(this).addClass('menu_active')
    //                 break
    //             }
    //         }
    //     }
    // })
    if (store.state.accessToken != '' && typeof(store.state.accessToken)!='undefined') {
        document.title = to.name
        let activeRouter = store.state.activeRouter;
        store.state[to.name].url=to.fullPath;
        store.state[store.state[to.name].parent].url=to.fullPath
        // let parent = '';
        // let url = '';
        // for (let i = 0; i < activeRouter.length; i++) {
        //     if (activeRouter[i].name == to.name) {
        //         parent = activeRouter[i].parent;
        //         url = activeRouter[i].url;
        //         break
        //     }
        // }
        // for (let i = 0; i < activeRouter.length; i++) {
        //     if (activeRouter[i].name == parent) {
        //         activeRouter[i].url = url
        //         break
        //     }
        // }
    }
    next()
})
export default router