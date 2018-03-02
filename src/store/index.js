import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        slidbarHeight: 0,
        closeItem: [], //存储关闭页签
        Alive: true, //页面是否缓存
        alerts: true,
        temporaryLogin: [], //本地暂时存储用户名,tokten
        username: [], //存储session纪录的每条登录账号{'name':key,'accessToken':value},用于多账号登录
        name: '', //当前登录用户名
        accessToken: '', //当前登录token
        show: false, //控制slidebar显示隐藏
        fixed: false,
        url: '/', //当前页签
        temporary: [], //本地暂时存储页签
        slidbarData: [], //从localStorage读取页签
        activeRouter: [ //进入页面子路由，重定向路由。name,parent,defult不变,url将被重定向(name=parent)
            { name: 'order', url: '/order/orderList/:id', parent: '', default: '/order/orderList/:id' }, //采购管理
            { name: 'orderDetails', url: '/order/orderDetails/:id', parent: 'order' },
            { name: 'orderList', url: '/order/orderList/:id', parent: 'order' },

            { name: 'OuManage', url: '/OuManage/OuManageList/:id', parent: '', default: '/OuManage/OuManageList/:id' }, //组织管理
            { name: 'OuManageDetail', url: '/OuManage/OuManageDetail/:id', parent: 'OuManage' },
            { name: 'OuManageModify', url: '/OuManage/OuManageModify/:id', parent: 'OuManage' },
            { name: 'OuManageSee', url: '/OuManage/OuManageSee/:id', parent: 'OuManage' },
            { name: 'OuManageList', url: '/OuManage/OuManageList/:id', parent: 'OuManage' },

            { name: 'repository', url: '/repository/repositoryList/:id', parent: '', default: '/repository/repositoryList/:id' }, //仓库管理
            { name: 'repositoryList', url: '/repository/repositoryList/:id', parent: 'repository' },
            { name: 'repositoryData', url: '/repository/repositoryData/:id', parent: 'repository' },
            { name: 'repositoryModify', url: '/repository/repositoryModify/:id', parent: 'repository' },

            { name: 'customer', url: '/customer/customerList/:id', parent: '', default: '/customer/customerList/:id' }, //客户管理
            { name: 'customerList', url: '/customer/customerList/:id', parent: 'customer' },
            { name: 'customerDetail', url: '/customer/customerDetail/:id', parent: 'customer' },

            { name: 'account', url: '/account/accountList/:id', parent: '', default: '/account/accountList/:id' }, //会计期间
            { name: 'accountList', url: '/account/accountList/:id', parent: 'account' },
            { name: 'accountDetail', url: '/account/accountDetail/:id', parent: 'account' },

            { name: 'currency', url: '/currency/currencyList/:id', parent: '', default: '/customer/currencyList/:id' }, //币种管理
            { name: 'currencyList', url: '/currency/currencyList/:id', parent: 'currency' },

            { name: 'bill', url: '/bill/billList/:id', parent: '', default: '/bill/billList/:id' }, //模板2.0
            { name: 'billDetails', url: '/bill/billDetails/:id', parent: 'bill' },
            { name: 'billList', url: '/bill/billList/:id', parent: 'bill' },

            { name: 'menu', url: '/menu/menuList/:id', parent: '', default: '/menu/menuList/:id' }, //菜单管理
            { name: 'menuDetail', url: '/menu/menuDetail/:id', parent: 'menu' },
            { name: 'menuList', url: '/menu/menuList/:id', parent: 'menu' },
            { name: 'menuModify', url: '/menu/menuModify/:id', parent: 'menu' },

            { name: 'commodity', url: '/commodity/commodityProperty/:id', parent: '', default: '/commodity/commodityProperty/:id' }, //商品属性
            { name: 'commodityProperty', url: '/commodity/commodityProperty/:id', parent: 'menu' },
            { name: 'commodityPropertyDetails', url: '/commodity/commodityPropertyDetails/:id', parent: 'commodity' },

            { name: 'commercial', url: '/commercial/commercialSpecification/:id', parent: '', default: '/commercial/commercialSpecification/:id' }, //商品规格
            { name: 'commercialSpecification', url: '/commercial/commercialSpecification/:id', parent: 'commercial' },
            { name: 'commercialSpecificationDetails', url: '/commercial/commercialSpecificationDetails/:id', parent: 'commercial' },

            { name: 'commodityleimu', url: '/commodityleimu/CommodityCategories/:id', parent: '', default: '/commodityleimu/CommodityCategories/:id' }, //商品类目
            { name: 'CommodityCategories', url: '/commodityleimu/CommodityCategories/:id', parent: 'commodityleimu' },
            { name: 'CommodityCategoriesDetails', url: '/commodityleimu/CommodityCategoriesDetails/:id', parent: 'commodityleimu' },

            { name: 'Property', url: '/Property/classProperty/:id', parent: '', default: '/Property/classProperty/:id' }, //类目属性规格
            { name: 'classProperty', url: '/Property/classProperty/:id', parent: 'Property' },
            { name: 'classPropertyDetails', url: '/Property/classPropertyDetails/:id', parent: 'Property' },

            { name: 'specification', url: '/specification/specificationOfGoodsList/:id', parent: '', default: '/specification/specificationOfGoodsList/:id' }, //商品规格组
            { name: 'specificationOfGoodsList', url: '/specification/specificationOfGoodsList/:id', parent: 'specification' },
            { name: 'specificationOfGoodsDetails', url: '/specification/specificationOfGoodsDetails/:id', parent: 'specification' },

            { name: 'Record', url: '/Record/commodityRecord/:id', parent: '', default: '/Record/commodityRecord/:id' }, //商品档案
            { name: 'commodityRecord', url: '/Record/commodityRecord/:id', parent: 'Record' },
            { name: 'commodityRecordDetails', url: '/Record/commodityRecordDetails/:id', parent: 'Record' },

            { name: 'groupManage', url: '/groupManage/groupManageList/:id', parent: '', default: '/groupManage/groupManageList/:id' }, //集团管理
            { name: 'groupManageList', url: '/groupManage/groupManageList/:id', parent: 'groupManage' },

            { name: 'businessArea', url: '/businessArea/businessAreaList/:id', parent: '', default: '/businessArea/businessAreaList/:id' }, //业务地区管理
            { name: 'businessAreaList', url: '/businessArea/businessAreaList/:id', parent: 'businessArea' },

            { name: 'department', url: '/department/departmentList/:id', parent: '', default: '/department/departmentList/:id' }, //部门资料
            { name: 'departmentList', url: '/department/departmentList/:id', parent: 'department' },

            { name: 'staff', url: '/staff/staffList/:id', parent: '', default: '/staff/staffList/:id' }, //职员资料
            { name: 'staffList', url: '/staff/staffList/:id', parent: 'staff' },

            // { name: 'user', url: '/user/userList/:id', parent: '', default: '/user/userList/:id' }, //部门资料
            // { name: 'userList', url: '/user/userList/:id', parent: 'user' },
            // { name: 'userDetail', url: '/user/userDetail/:id', parent: 'user' },
        ]
    },
    mutations: {
        go(state) { //控制slidebar显示隐藏
            state.show = !state.show
        },
        slidbarData(state) {
            if (window.localStorage.getItem('ERP') != '') {
                state.slidbarData = JSON.parse(window.localStorage.getItem('ERP'))
            }
        }, //页签数组
        username(state) {
            if (window.localStorage.getItem('_ERP') != '') {
                state.username = JSON.parse(window.sessionStorage.getItem('_ERP'))
            }
        },
        go1(state) {
            state.fixed = true;
        },
        go2(state) {
            state.fixed = false;
        },
    }
})