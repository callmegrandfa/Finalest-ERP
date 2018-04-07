import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);
export default new vuex.Store({
    state: {
        option: {//滚动条样式
            vRail: {
                width: '5px',
                pos: 'right',
                background: "#9093994d",
            },
            vBar: {
                width: '5px',
                pos: 'right',
                background: '#9093994d',
            },
            hRail: {
                height: '0',
            },
        },
        slidbarHeight: 0,
        closeItem: [], //存储关闭页签
        Alive: true, //页面是否缓存
        alerts: true,
        temporaryLogin: [], //本地暂时存储用户名,tokten
        username: [], //存储session纪录的每条登录账号{'name':key,'accessToken':value} ,用于多账号登录
        name: '', //当前登录用户名
        accessToken: '', //当前登录token
        show: false, //控制slidebar显示隐藏
        fixed: false,
        url: '/', //当前页签
        temporary: [], //本地暂时存储页签
        slidbarData: [], //从localStorage读取页签
        tableData:[],//表格数据

//------------------------------------------------------------------------路由数据----------------------------------------------------------------------
        order:{ name: 'order', url: '/order/orderList/:id', parent: '', default: '/order/orderList/:id' } , //采购管理
        orderDetails:{ name: 'orderDetails', url: '/order/orderDetails/:id', parent: 'order' } ,
        orderList:{ name: 'orderList', url: '/order/orderList/:id', parent: 'order' } ,
        OuManage:{ name: 'OuManage', url: '/OuManage/OuManageList/:id', parent: '', default: '/OuManage/OuManageList/:id' } , //组织管理
        OuManageDetail:{ name: 'OuManageDetail', url: '/OuManage/OuManageDetail/:id', parent: 'OuManage' } ,
        OuManageModify:{ name: 'OuManageModify', url: '/OuManage/OuManageModify/:id', parent: 'OuManage' } ,
        OuManageList:{ name: 'OuManageList', url: '/OuManage/OuManageList/:id', parent: 'OuManage' } ,
        repository:{ name: 'repository', url: '/repository/repositoryList/:id', parent: '', default: '/repository/repositoryList/:id' } , //仓库管理
        repositoryList:{ name: 'repositoryList', url: '/repository/repositoryList/:id', parent: 'repository' } ,
        repositoryData:{ name: 'repositoryData', url: '/repository/repositoryData/:id', parent: 'repository' } ,
        repositoryModify:{ name: 'repositoryModify', url: '/repository/repositoryModify/:id', parent: 'repository' } ,

        customer:{ name: 'customer', url: '/customer/customerList/:id', parent: '', default: '/customer/customerList/:id' } , //客户管理
        customerList:{ name: 'customerList', url: '/customer/customerList/:id', parent: 'customer' } ,
        customerDetail:{ name: 'customerDetail', url: '/customer/customerDetail/:id', parent: 'customer' } ,
        customerModify:{ name: 'customerModify', url: '/customer/customerModify/:id', parent: 'customer' } ,
        //客户分类
        customerClass:{ name: 'customerClass', url: '/customerClass/customerClassList/:id', parent: '', default: '/customerClass/customerClassList/:id' } , //客户分类
        customerClassList:{ name: 'customerClassList', url: '/customerClass/customerClassList/:id', parent: 'customerClass' } ,
        customerClassDetail:{ name: 'customerClassDetail', url: '/customerClass/customerClassDetail/:id', parent: 'customerClass' } ,
        customerClassModify:{ name: 'customerClassModify', url: '/customerClass/customerClassModify/:id', parent: 'customerClass' } ,
        account:{ name: 'account', url: '/account/accountList/:id', parent: '', default: '/account/accountList/:id' } , //会计期间
        accountList:{ name: 'accountList', url: '/account/accountList/:id', parent: 'account' } ,
        accountDetail:{ name: 'accountDetail', url: '/account/accountDetail/:id', parent: 'account' } ,

        currency:{ name: 'currency', url: '/currency/currencyList/:id', parent: '', default: '/customer/currencyList/:id' } , //币种管理
        currencyList:{ name: 'currencyList', url: '/currency/currencyList/:id', parent: 'currency' } ,

        commodityBrand:{name: 'commodityBrand', url: '/commodityBrand/:id', parent: 'commodityBrand', default: '/commodityBrand/:id' },//商品品牌

        bill:{ name: 'bill', url: '/bill/billList/:id', parent: '', default: '/bill/billList/:id' } , //模板2.0
        billDetails:{ name: 'billDetails', url: '/bill/billDetails/:id', parent: 'bill' } ,
        billList:{ name: 'billList', url: '/bill/billList/:id', parent: 'bill' } ,

        menu:{ name: 'menu', url: '/menu/menuList/:id', parent: '', default: '/menu/menuList/:id' } , //菜单管理
        menuDetail:{ name: 'menuDetail', url: '/menu/menuDetail/:id', parent: 'menu' } ,
        menuList:{ name: 'menuList', url: '/menu/menuList/:id', parent: 'menu' } ,
        menuModify:{ name: 'menuModify', url: '/menu/menuModify/:id', parent: 'menu' } ,

        commodityProperty:{ name: 'commodityProperty', url: '/commodityProperty/commodityPropertyList/:id', parent: '', default: '/commodityProperty/commodityPropertyList/:id' }, //商品属性
        commodityPropertyDetails:{ name: 'commodityPropertyDetails', url: '/commodityProperty/commodityPropertyDetails/:id', parent: 'commodityProperty' },
        commodityPropertyList:{ name: 'commodityPropertyList', url: '/commodityProperty/commodityPropertyList/:id', parent: 'commodityProperty' },

        commercial:{ name: 'commercial', url: '/commercial/commercialSpecification/:id', parent: '', default: '/commercial/commercialSpecification/:id' } , //商品规格
        commercialSpecification:{ name: 'commercialSpecification', url: '/commercial/commercialSpecification/:id', parent: 'commercial' } ,
        commercialSpecificationDetails:{ name: 'commercialSpecificationDetails', url: '/commercial/commercialSpecificationDetails/:id', parent: 'commercial' } ,

        commodityleimu:{ name: 'commodityleimu', url: '/commodityleimu/commodityClassHeading/:id', parent: '', default: '/commodityleimu/commodityClassHeading/:id' } , //商品类目
        // { name: 'CommodityCategories', url: '/commodityleimu/CommodityCategories/:id', parent: 'commodityleimu' } ,
        CommodityCategoriesDetails:{ name: 'CommodityCategoriesDetails', url: '/commodityleimu/CommodityCategoriesDetails/:id', parent: 'commodityleimu' } ,
        commodityClassHeading:{ name: 'commodityClassHeading', url: '/commodityleimu/commodityClassHeading/:id', parent: 'commodityleimu' } ,

        Property:{ name: 'Property', url: '/Property/classProperty/:id', parent: '', default: '/Property/classProperty/:id' } , //类目属性规格
        classProperty:{ name: 'classProperty', url: '/Property/classProperty/:id', parent: 'Property' } ,
        classPropertyDetails:{ name: 'classPropertyDetails', url: '/Property/classPropertyDetails/:id', parent: 'Property' } ,

        specification:{ name: 'specification', url: '/specification/specificationOfGoodsList/:id', parent: '', default: '/specification/specificationOfGoodsList/:id' } , //商品规格组
        specificationOfGoodsList:{ name: 'specificationOfGoodsList', url: '/specification/specificationOfGoodsList/:id', parent: 'specification' } ,
        specificationOfGoodsDetails:{ name: 'specificationOfGoodsDetails', url: '/specification/specificationOfGoodsDetails/:id', parent: 'specification' } ,

        tenant:{ name: 'tenant', url: '/tenant/tenantManagement/:id', parent: '', default: '/tenant/tenantManagement/:id' } , //租户管理
        tenantManagement:{ name: 'tenantManagement', url: '/tenant/tenantManagement/:id', parent: 'tenant' } ,
        tenantManagementAdd:{ name: 'tenantManagementAdd', url: '/tenant/tenantManagementAdd/:id', parent: 'tenant' } ,

        Record:{ name: 'Record', url: '/Record/commodityRecord/:id', parent: '', default: '/Record/commodityRecord/:id' } , //商品档案
        commodityRecord:{ name: 'commodityRecord', url: '/Record/commodityRecord/:id', parent: 'Record' } ,
        commodityRecordDetails:{ name: 'commodityRecordDetails', url: '/Record/commodityRecordDetails/:id', parent: 'Record' } ,

        groupManage:{ name: 'groupManage', url: '/groupManage/groupManageList/:id', parent: '', default: '/groupManage/groupManageList/:id' } , //集团管理
        groupManageList:{ name: 'groupManageList', url: '/groupManage/groupManageList/:id', parent: 'groupManage' } ,

        businessArea:{ name: 'businessArea', url: '/businessArea/businessAreaList/:id', parent: '', default: '/businessArea/businessAreaList/:id' } , //业务地区管理
        businessAreaList:{ name: 'businessAreaList', url: '/businessArea/businessAreaList/:id', parent: 'businessArea' } ,
        businessAreaDetail:{ name: 'businessAreaDetail', url: '/businessArea/businessAreaDetail/:id', parent: 'businessArea' } ,
        businessAreaModify:{ name: 'businessAreaModify', url: '/businessArea/businessAreaModify/:id', parent: 'businessArea' } ,

        department:{ name: 'department', url: '/department/departmentList/:id', parent: '', default: '/department/departmentList/:id' } , //部门资料
        departmentList:{ name: 'departmentList', url: '/department/departmentList/:id', parent: 'department' } ,
        departmentDetail:{ name: 'departmentDetail', url: '/department/departmentDetail/:id', parent: 'department' } ,
        departmentModify:{ name: 'departmentModify', url: '/department/departmentModify/:id', parent: 'department' } ,

        shop:{ name: 'shop', url: '/shop/shopList/:id', parent: '', default: '/shop/shopList/:id' } , //店铺资料
        shopList:{ name: 'shopList', url: '/shop/shopList/:id', parent: 'shop' } ,
        shopDetail:{ name: 'shopDetail', url: '/shop/shopDetail/:id', parent: 'shop' } ,
        shopModify:{ name: 'shopModify', url: '/shop/shopModify/:id', parent: 'shop' } ,

        dictionary:{ name: 'dictionary', url: '/dictionary/dictionaryList/:id', parent: '', default: '/dictionary/dictionaryList/:id' } , //系统字典
        dictionaryList:{ name: 'dictionaryList', url: '/dictionary/dictionaryList/:id', parent: 'dictionary' } ,

        user:{ name: 'user', url: '/user/userList/:id', parent: '', default: '/user/userList/:id' } , //用户资料
        userList:{ name: 'userList', url: '/user/userList/:id', parent: 'user' } ,
        userDetail:{ name: 'userDetail', url: '/user/userDetail/:id', parent: 'user' } ,
        userModify:{ name: 'userModify', url: '/user/userModify/:id', parent: 'user' } ,

        userGroup:{ name: 'userGroup', url: '/userGroup/userGroupList/:id', parent: '', default: '/userGroup/userGroupList/:id' } , //用户组
        userGroupList:{ name: 'userGroupList', url: '/userGroup/userGroupList/:id', parent: 'userGroup' } ,
        userGroupDetail:{ name: 'userGroupDetail', url: '/userGroup/userGroupDetail/:id', parent: 'userGroup' } ,
        userGroupModify:{ name: 'userGroupModify', url: '/userGroup/userGroupModify/:id', parent: 'userGroup' } ,

        role:{ name: 'role', url: '/role/roleList/:id', parent: '', default: '/role/roleList/:id' } , //角色资料
        roleList:{ name: 'roleList', url: '/role/roleList/:id', parent: 'role' } ,
        roleDetail:{ name: 'roleDetail', url: '/role/roleDetail/:id', parent: 'role' } ,
        roleModify:{ name: 'roleModify', url: '/role/roleModify/:id', parent: 'role' } ,
        //职员资料
        staff:{ name: 'staff', url: '/staff/staffList/:id', parent: '', default: '/staff/staffList/:id' } , 
        staffList:{ name: 'staffList', url: '/staff/staffList/:id', parent: 'staff' } ,
        staffDetail:{ name: 'staffDetail', url: '/staff/staffDetail/:id', parent: 'staff' } ,
        //计量单位
        count:{ name: 'count', url: '/count/countList/:id', parent: '' , default: '/count/countList/:id' }, 
        //行政地区
        adminstrArea:{ name: 'adminstrArea', url: '/adminstrArea/adminstrAreaList/:id', parent: '', default: '/adminstrArea/adminstrAreaList/:id' }, 
        adminstrAreaDetail:{ name: 'adminstrAreaDetail', url: '/adminstrArea/adminstrAreaDetail/:id', parent: 'adminstrArea', default: '/adminstrArea/adminstrAreaList/:id' }, 
        adminstrArea:{ name: 'adminstrArea', url: '/adminstrArea/adminstrAreaModify/:id', parent: '', default: '/adminstrArea/adminstrAreaModify/:id' },
        //供应商分类
        supplierClassify:{ name: 'supplierClassify', url: '/supplierClassify/supplierClassifyList/:id', parent: '', default: '/supplierClassify/supplierClassifyList/:id' },
        supplierClassifyDetail:{ name: 'supplierClassifyDetail', url: '/supplierClassify/supplierClassifyDetail/:id', parent: 'supplierClassify', default: '/supplierClassify/supplierClassifyList/:id' },
        supplierClassifyModify:{ name: 'supplierClassifyModify', url: '/supplierClassify/supplierClassifyModify/:id', parent: '', default: '/supplierClassify/supplierClassifyModify/:id' },
//----------------------------------------------------------------------------路由数据-----------------------------------------------------------------------

        // activeRouter: [ //进入页面子路由，重定向路由。name,parent,defult不变,url将被重定向(name=parent)
        //     { name: 'order', url: '/order/orderList/:id', parent: '', default: '/order/orderList/:id' } , //采购管理
        //     { name: 'orderDetails', url: '/order/orderDetails/:id', parent: 'order' } ,
        //     { name: 'orderList', url: '/order/orderList/:id', parent: 'order' } ,

        //     { name: 'OuManage', url: '/OuManage/OuManageList/:id', parent: '', default: '/OuManage/OuManageList/:id' } , //组织管理
        //     { name: 'OuManageDetail', url: '/OuManage/OuManageDetail/:id', parent: 'OuManage' } ,
        //     { name: 'OuManageModify', url: '/OuManage/OuManageModify/:id', parent: 'OuManage' } ,
        //     { name: 'OuManageList', url: '/OuManage/OuManageList/:id', parent: 'OuManage' } ,

        //     { name: 'repository', url: '/repository/repositoryList/:id', parent: '', default: '/repository/repositoryList/:id' } , //仓库管理
        //     { name: 'repositoryList', url: '/repository/repositoryList/:id', parent: 'repository' } ,
        //     { name: 'repositoryData', url: '/repository/repositoryData/:id', parent: 'repository' } ,
        //     { name: 'repositoryModify', url: '/repository/repositoryModify/:id', parent: 'repository' } ,

        //     { name: 'customer', url: '/customer/customerList/:id', parent: '', default: '/customer/customerList/:id' } , //客户管理
        //     { name: 'customerList', url: '/customer/customerList/:id', parent: 'customer' } ,
        //     { name: 'customerDetail', url: '/customer/customerDetail/:id', parent: 'customer' } ,
        //     { name: 'customerModify', url: '/customer/customerModify/:id', parent: 'customer' } ,
        //     //客户分类
        //     { name: 'customerClass', url: '/customerClass/customerClassList/:id', parent: '', default: '/customerClass/customerClassList/:id' } , //客户分类
        //     { name: 'customerClassList', url: '/customerClass/customerClassList/:id', parent: 'customerClass' } ,
        //     { name: 'customerClassDetail', url: '/customerClass/customerClassDetail/:id', parent: 'customerClass' } ,
        //     { name: 'customerClassModify', url: '/customerClass/customerClassModify/:id', parent: 'customerClass' } ,
        //     { name: 'account', url: '/account/accountList/:id', parent: '', default: '/account/accountList/:id' } , //会计期间
        //     { name: 'accountList', url: '/account/accountList/:id', parent: 'account' } ,
        //     { name: 'accountDetail', url: '/account/accountDetail/:id', parent: 'account' } ,

        //     { name: 'currency', url: '/currency/currencyList/:id', parent: '', default: '/customer/currencyList/:id' } , //币种管理
        //     { name: 'currencyList', url: '/currency/currencyList/:id', parent: 'currency' } ,

        //     { name: 'bill', url: '/bill/billList/:id', parent: '', default: '/bill/billList/:id' } , //模板2.0
        //     { name: 'billDetails', url: '/bill/billDetails/:id', parent: 'bill' } ,
        //     { name: 'billList', url: '/bill/billList/:id', parent: 'bill' } ,

        //     { name: 'menu', url: '/menu/menuList/:id', parent: '', default: '/menu/menuList/:id' } , //菜单管理
        //     { name: 'menuDetail', url: '/menu/menuDetail/:id', parent: 'menu' } ,
        //     { name: 'menuList', url: '/menu/menuList/:id', parent: 'menu' } ,
        //     { name: 'menuModify', url: '/menu/menuModify/:id', parent: 'menu' } ,

        //     { name: 'commodityProperty', url: '/commodityProperty/commodityPropertyList/:id', parent: '', default: '/commodityProperty/commodityPropertyList/:id' }, //商品属性
        //     { name: 'commodityPropertyDetails', url: '/commodityProperty/commodityPropertyDetails/:id', parent: 'commodityProperty' },
        //     { name: 'commodityPropertyList', url: '/commodityProperty/commodityPropertyList/:id', parent: 'commodityProperty' },

        //     { name: 'commercial', url: '/commercial/commercialSpecification/:id', parent: '', default: '/commercial/commercialSpecification/:id' } , //商品规格
        //     { name: 'commercialSpecification', url: '/commercial/commercialSpecification/:id', parent: 'commercial' } ,
        //     { name: 'commercialSpecificationDetails', url: '/commercial/commercialSpecificationDetails/:id', parent: 'commercial' } ,

        //     { name: 'commodityleimu', url: '/commodityleimu/commodityClassHeading/:id', parent: '', default: '/commodityleimu/commodityClassHeading/:id' } , //商品类目
        //     // { name: 'CommodityCategories', url: '/commodityleimu/CommodityCategories/:id', parent: 'commodityleimu' } ,
        //     { name: 'CommodityCategoriesDetails', url: '/commodityleimu/CommodityCategoriesDetails/:id', parent: 'commodityleimu' } ,
        //     { name: 'commodityClassHeading', url: '/commodityleimu/commodityClassHeading/:id', parent: 'commodityleimu' } ,

        //     { name: 'Property', url: '/Property/classProperty/:id', parent: '', default: '/Property/classProperty/:id' } , //类目属性规格
        //     { name: 'classProperty', url: '/Property/classProperty/:id', parent: 'Property' } ,
        //     { name: 'classPropertyDetails', url: '/Property/classPropertyDetails/:id', parent: 'Property' } ,

        //     { name: 'specification', url: '/specification/specificationOfGoodsList/:id', parent: '', default: '/specification/specificationOfGoodsList/:id' } , //商品规格组
        //     { name: 'specificationOfGoodsList', url: '/specification/specificationOfGoodsList/:id', parent: 'specification' } ,
        //     { name: 'specificationOfGoodsDetails', url: '/specification/specificationOfGoodsDetails/:id', parent: 'specification' } ,

        //     { name: 'tenant', url: '/tenant/tenantManagement/:id', parent: '', default: '/tenant/tenantManagement/:id' } , //租户管理
        //     { name: 'tenantManagement', url: '/tenant/tenantManagement/:id', parent: 'tenant' } ,
        //     { name: 'tenantManagementAdd', url: '/tenant/tenantManagementAdd/:id', parent: 'tenant' } ,

        //     { name: 'Record', url: '/Record/commodityRecord/:id', parent: '', default: '/Record/commodityRecord/:id' } , //商品档案
        //     { name: 'commodityRecord', url: '/Record/commodityRecord/:id', parent: 'Record' } ,
        //     { name: 'commodityRecordDetails', url: '/Record/commodityRecordDetails/:id', parent: 'Record' } ,

        //     { name: 'groupManage', url: '/groupManage/groupManageList/:id', parent: '', default: '/groupManage/groupManageList/:id' } , //集团管理
        //     { name: 'groupManageList', url: '/groupManage/groupManageList/:id', parent: 'groupManage' } ,

        //     { name: 'businessArea', url: '/businessArea/businessAreaList/:id', parent: '', default: '/businessArea/businessAreaList/:id' } , //业务地区管理
        //     { name: 'businessAreaList', url: '/businessArea/businessAreaList/:id', parent: 'businessArea' } ,
        //     { name: 'businessAreaDetail', url: '/businessArea/businessAreaDetail/:id', parent: 'businessArea' } ,
        //     { name: 'businessAreaModify', url: '/businessArea/businessAreaModify/:id', parent: 'businessArea' } ,

        //     { name: 'department', url: '/department/departmentList/:id', parent: '', default: '/department/departmentList/:id' } , //部门资料
        //     { name: 'departmentList', url: '/department/departmentList/:id', parent: 'department' } ,

        //     { name: 'shop', url: '/shop/shopList/:id', parent: '', default: '/shop/shopList/:id' } , //部门资料
        //     { name: 'shopList', url: '/shop/shopList/:id', parent: 'shop' } ,

        //     { name: 'dictionary', url: '/dictionary/dictionaryList/:id', parent: '', default: '/dictionary/dictionaryList/:id' } , //系统字典
        //     { name: 'dictionaryList', url: '/dictionary/dictionaryList/:id', parent: 'dictionary' } ,

        //     { name: 'user', url: '/user/userList/:id', parent: '', default: '/user/userList/:id' } , //用户资料
        //     { name: 'userList', url: '/user/userList/:id', parent: 'user' } ,
        //     { name: 'userDetail', url: '/user/userDetail/:id', parent: 'user' } ,
        //     { name: 'userModify', url: '/user/userModify/:id', parent: 'user' } ,

        //     { name: 'userGroup', url: '/userGroup/userGroupList/:id', parent: '', default: '/userGroup/userGroupList/:id' } , //用户组
        //     { name: 'userGroupList', url: '/userGroup/userGroupList/:id', parent: 'userGroup' } ,
        //     { name: 'userGroupDetail', url: '/userGroup/userGroupDetail/:id', parent: 'userGroup' } ,
        //     { name: 'userGroupModify', url: '/userGroup/userGroupModify/:id', parent: 'userGroup' } ,

        //     { name: 'role', url: '/role/roleList/:id', parent: '', default: '/role/roleList/:id' } , //角色资料
        //     { name: 'roleList', url: '/role/roleList/:id', parent: 'role' } ,
        //     { name: 'roleDetail', url: '/role/roleDetail/:id', parent: 'role' } ,
        //     { name: 'roleModify', url: '/role/roleModify/:id', parent: 'role' } ,
        //     //职员资料
        //     { name: 'staff', url: '/staff/staffList/:id', parent: '', default: '/staff/staffList/:id' } , 
        //     { name: 'staffList', url: '/staff/staffList/:id', parent: 'staff' } ,
        //     { name: 'staffDetail', url: '/staff/staffDetail/:id', parent: 'staff' } ,
        //     //计量单位
        //     { name: 'count', url: '/count/countList/:id', parent: '' , default: '/count/countList/:id' }, 
        //     //行政地区
        //     { name: 'adminstrArea', url: '/adminstrArea/adminstrAreaList/:id', parent: '', default: '/adminstrArea/adminstrAreaList/:id' }, 
        //     { name: 'adminstrAreaDetail', url: '/adminstrArea/adminstrAreaDetail/:id', parent: 'adminstrArea', default: '/adminstrArea/adminstrAreaList/:id' }, 
        //     { name: 'adminstrArea', url: '/adminstrArea/adminstrAreaModify/:id', parent: '', default: '/adminstrArea/adminstrAreaModify/:id' },
        //     //供应商分类
        //     { name: 'supplierClassify', url: '/supplierClassify/supplierClassifyList/:id', parent: '', default: '/supplierClassify/supplierClassifyList/:id' },
        //     { name: 'supplierClassifyDetail', url: '/supplierClassify/supplierClassifyDetail/:id', parent: 'supplierClassify', default: '/supplierClassify/supplierClassifyList/:id' },
        //     { name: 'supplierClassifyModify', url: '/supplierClassify/supplierClassifyModify/:id', parent: '', default: '/supplierClassify/supplierClassifyModify/:id' },
        // ],
        icon:[
            {code:'fa fa-address-book',label:"",},
            {code:'fa fa-address-book-o',label:"",},
            {code:'fa fa-address-card',label:"",},
            {code:'fa fa-address-card-o',label:"",},
            {code:'fa fa-adjust',label:"",},
            {code:'fa fa-american-sign-language-interpreting',label:"",},
            {code:'fa fa-anchor',label:"",},
            {code:'fa fa-archive',label:"",},
            {code:'fa fa-area-chart',label:"",},
            {code:'fa fa-arrows',label:"",},
            {code:'fa fa-arrows-h',label:"",},
            {code:'fa fa-arrows-v',label:"",},
            {code:'fa fa-asl-interpreting',label:"",},
            {code:'fa fa-assistive-listening-systems',label:"",},
            {code:'fa fa-asterisk',label:"",},
            {code:'fa fa-at',label:"",},
            {code:'fa fa-audio-description',label:"",},
            {code:'fa fa-automobile',label:"",},
            {code:'fa fa-balance-scale',label:"",},
            {code:'fa fa-ban',label:"",},
            {code:'fa fa-bank',label:"",},
            {code:'fa fa-bar-chart',label:"",},
            {code:'fa fa-bar-chart-o',label:"",},
            {code:'fa fa-barcode',label:"",},
            {code:'fa fa-bars',label:"",},
            {code:'fa fa-bath',label:"",},
            {code:'fa fa-bathtub',label:"",},
            {code:'fa fa-battery',label:"",},
            {code:'fa fa-battery-0',label:"",},
            {code:'fa fa-battery-1',label:"",},
            {code:'fa fa-battery-2',label:"",},
            {code:'fa fa-battery-3',label:"",},
            {code:'fa fa-battery-4',label:"",},
            {code:'fa fa-battery-empty',label:"",},
            {code:'fa fa-battery-full',label:"",},
            {code:'fa fa-battery-half',label:"",},
            {code:'fa fa-battery-quarter',label:"",},
            {code:'fa fa-battery-three-quarters',label:"",},
            {code:'fa fa-bed',label:"",},
            {code:'fa fa-beer',label:"",},
            {code:'fa fa-bell',label:"",},
            {code:'fa fa-bell-o',label:"",},
            {code:'fa fa-bell-slash',label:"",},
            {code:'fa fa-bell-slash-o',label:"",},
            {code:'fa fa-bicycle',label:"",},
            {code:'fa fa-binoculars',label:"",},
            {code:'fa fa-birthday-cake',label:"",},
            {code:'fa fa-blind',label:"",},
            {code:'fa fa-bluetooth',label:"",},
            {code:'fa fa-bluetooth-b',label:"",},
            {code:'fa fa-bolt',label:"",},
            {code:'fa fa-bomb',label:"",},
            {code:'fa fa-book',label:"",},
            {code:'fa fa-bookmark',label:"",},
            {code:'fa fa-bookmark-o',label:"",},
            {code:'fa fa-braille',label:"",},
            {code:'fa fa-briefcase',label:"",},
            {code:'fa fa-bug',label:"",},
            {code:'fa fa-building',label:"",},
            {code:'fa fa-building-o',label:"",},
            {code:'fa fa-bullhorn',label:"",},
            {code:'fa fa-bullseye',label:"",},
            {code:'fa fa-bus',label:"",},
            {code:'fa fa-cab',label:"",},
            {code:'fa fa-calculator',label:"",},
            {code:'fa fa-calendar',label:"",},
            {code:'fa fa-calendar-check-o',label:"",},
            {code:'fa fa-calendar-minus-o',label:"",},
            {code:'fa fa-calendar-o',label:"",},
            {code:'fa fa-calendar-plus-o',label:"",},
            {code:'fa fa-calendar-times-o',label:"",},
            {code:'fa fa-camera',label:"",},
            {code:'fa fa-camera-retro',label:"",},
            {code:'fa fa-car',label:"",},
            {code:'fa fa-caret-square-o-down',label:"",},
            {code:'fa fa-caret-square-o-left',label:"",},
            {code:'fa fa-caret-square-o-right',label:"",},
            {code:'fa fa-caret-square-o-up',label:"",},
            {code:'fa fa-cart-arrow-down',label:"",},
            {code:'fa fa-cart-plus',label:"",},
            {code:'fa fa-cc',label:"",},
            {code:'fa fa-certificate',label:"",},
            {code:'fa fa-check',label:"",},
            {code:'fa fa-check-circle',label:"",},
            {code:'fa fa-check-circle-o',label:"",},
            {code:'fa fa-check-square',label:"",},
            {code:'fa fa-check-square-o',label:"",},
            {code:'fa fa-child',label:"",},
            {code:'fa fa-circle',label:"",},
            {code:'fa fa-circle-o',label:"",},
            {code:'fa fa-circle-o-notch',label:"",},
            {code:'fa fa-circle-thin',label:"",},
            {code:'fa fa-clock-o',label:"",},
            {code:'fa fa-clone',label:"",},
            {code:'fa fa-close',label:"",},
            {code:'fa fa-cloud',label:"",},
            {code:'fa fa-cloud-download',label:"",},
            {code:'fa fa-cloud-upload',label:"",},
            {code:'fa fa-code',label:"",},
            {code:'fa fa-code-fork',label:"",},
            {code:'fa fa-coffee',label:"",},
            {code:'fa fa-cog',label:"",},
            {code:'fa fa-cogs',label:"",},
            {code:'fa fa-comment',label:"",},
            {code:'fa fa-comment-o',label:"",},
            {code:'fa fa-commenting',label:"",},
            {code:'fa fa-commenting-o',label:"",},
            {code:'fa fa-comments',label:"",},
            {code:'fa fa-comments-o',label:"",},
            {code:'fa fa-compass',label:"",},
            {code:'fa fa-copyright',label:"",},
            {code:'fa fa-creative-commons',label:"",},
            {code:'fa fa-credit-card',label:"",},
            {code:'fa fa-credit-card-alt',label:"",},
            {code:'fa fa-crop',label:"",},
            {code:'fa fa-crosshairs',label:"",},
            {code:'fa fa-cube',label:"",},
            {code:'fa fa-cubes',label:"",},
            {code:'fa fa-cutlery',label:"",},
            {code:'fa fa-dashboard',label:"",},
            {code:'fa fa-database',label:"",},
            {code:'fa fa-deaf',label:"",},
            {code:'fa fa-deafness',label:"",},
            {code:'fa fa-desktop',label:"",},
            {code:'fa fa-diamond',label:"",},
            {code:'fa fa-dot-circle-o',label:"",},
            {code:'fa fa-download',label:"",},
            {code:'fa fa-drivers-license',label:"",},
            {code:'fa fa-drivers-license-o',label:"",},
            {code:'fa fa-edit',label:"",},
            {code:'fa fa-ellipsis-h',label:"",},
            {code:'fa fa-ellipsis-v',label:"",},
            {code:'fa fa-envelope',label:"",},
            {code:'fa fa-envelope-o',label:"",},
            {code:'fa fa-envelope-open',label:"",},
            {code:'fa fa-envelope-open-o',label:"",},
            {code:'fa fa-envelope-square',label:"",},
            {code:'fa fa-eraser',label:"",},
            {code:'fa fa-exchange',label:"",},
            {code:'fa fa-exclamation',label:"",},
            {code:'fa fa-exclamation-circle',label:"",},
            {code:'fa fa-exclamation-triangle',label:"",},
            {code:'fa fa-external-link',label:"",},
            {code:'fa fa-external-link-square',label:"",},
            {code:'fa fa-eye',label:"",},
            {code:'fa fa-eye-slash',label:"",},
            {code:'fa fa-eyedropper',label:"",},
            {code:'fa fa-fax',label:"",},
            {code:'fa fa-feed',label:"",},
            {code:'fa fa-female',label:"",},
            {code:'fa fa-fighter-jet',label:"",},
            {code:'fa fa-file-archive-o',label:"",},
            {code:'fa fa-file-audio-o',label:"",},
            {code:'fa fa-file-code-o',label:"",},
            {code:'fa fa-file-excel-o',label:"",},
            {code:'fa fa-file-image-o',label:"",},
            {code:'fa fa-file-movie-o',label:"",},
            {code:'fa fa-file-pdf-o',label:"",},
            {code:'fa fa-file-photo-o',label:"",},
            {code:'fa fa-file-picture-o',label:"",},
            {code:'fa fa-file-powerpoint-o',label:"",},
            {code:'fa fa-file-sound-o',label:"",},
            {code:'fa fa-file-video-o',label:"",},
            {code:'fa fa-file-word-o',label:"",},
            {code:'fa fa-file-zip-o',label:"",},
            {code:'fa fa-film',label:"",},
            {code:'fa fa-filter',label:"",},
            {code:'fa fa-fire',label:"",},
            {code:'fa fa-fire-extinguisher',label:"",},
            {code:'fa fa-flag',label:"",},
            {code:'fa fa-flag-checkered',label:"",},
            {code:'fa fa-flag-o',label:"",},
            {code:'fa fa-flash',label:"",},
            {code:'fa fa-flask',label:"",},
            {code:'fa fa-folder',label:"",},
            {code:'fa fa-folder-o',label:"",},
            {code:'fa fa-folder-open',label:"",},
            {code:'fa fa-folder-open-o',label:"",},
            {code:'fa fa-frown-o',label:"",},
            {code:'fa fa-futbol-o',label:"",},
            {code:'fa fa-gamepad',label:"",},
            {code:'fa fa-gavel',label:"",},
            {code:'fa fa-gear',label:"",},
            {code:'fa fa-gears',label:"",},
            {code:'fa fa-gift',label:"",},
            {code:'fa fa-glass',label:"",},
            {code:'fa fa-globe',label:"",},
            {code:'fa fa-graduation-cap',label:"",},
            {code:'fa fa-group',label:"",},
            {code:'fa fa-hand-grab-o',label:"",},
            {code:'fa fa-hand-lizard-o',label:"",},
            {code:'fa fa-hand-paper-o',label:"",},
            {code:'fa fa-hand-peace-o',label:"",},
            {code:'fa fa-hand-pointer-o',label:"",},
            {code:'fa fa-hand-rock-o',label:"",},
            {code:'fa fa-hand-scissors-o',label:"",},
            {code:'fa fa-hand-spock-o',label:"",},
            {code:'fa fa-hand-stop-o',label:"",},
            {code:'fa fa-handshake-o',label:"",},
            {code:'fa fa-hard-of-hearing',label:"",},
            {code:'fa fa-hashtag',label:"",},
            {code:'fa fa-hdd-o',label:"",},
            {code:'fa fa-headphones',label:"",},
            {code:'fa fa-heart',label:"",},
            {code:'fa fa-heart-o',label:"",},
            {code:'fa fa-heartbeat',label:"",},
            {code:'fa fa-history',label:"",},
            {code:'fa fa-home',label:"",},
            {code:'fa fa-hotel',label:"",},
            {code:'fa fa-hourglass',label:"",},
            {code:'fa fa-hourglass-1',label:"",},
            {code:'fa fa-hourglass-2',label:"",},
            {code:'fa fa-hourglass-3',label:"",},
            {code:'fa fa-hourglass-end',label:"",},
            {code:'fa fa-hourglass-half',label:"",},
            {code:'fa fa-hourglass-o',label:"",},
            {code:'fa fa-hourglass-start',label:"",},
            {code:'fa fa-i-cursor',label:"",},
            {code:'fa fa-id-badge',label:"",},
            {code:'fa fa-id-card',label:"",},
            {code:'fa fa-id-card-o',label:"",},
            {code:'fa fa-image',label:"",},
            {code:'fa fa-inbox',label:"",},
            {code:'fa fa-industry',label:"",},
            {code:'fa fa-info',label:"",},
            {code:'fa fa-info-circle',label:"",},
            {code:'fa fa-institution',label:"",},
            {code:'fa fa-key',label:"",},
            {code:'fa fa-keyboard-o',label:"",},
            {code:'fa fa-language',label:"",},
            {code:'fa fa-laptop',label:"",},
            {code:'fa fa-leaf',label:"",},
            {code:'fa fa-legal',label:"",},
            {code:'fa fa-lemon-o',label:"",},
            {code:'fa fa-level-down',label:"",},
            {code:'fa fa-level-up',label:"",},
            {code:'fa fa-life-bouy',label:"",},
            {code:'fa fa-life-buoy',label:"",},
            {code:'fa fa-life-ring',label:"",},
            {code:'fa fa-life-saver',label:"",},
            {code:'fa fa-lightbulb-o',label:"",},
            {code:'fa fa-line-chart',label:"",},
            {code:'fa fa-location-arrow',label:"",},
            {code:'fa fa-lock',label:"",},
            {code:'fa fa-low-vision',label:"",},
            {code:'fa fa-magic',label:"",},
            {code:'fa fa-magnet',label:"",},
            {code:'fa fa-mail-forward',label:"",},
            {code:'fa fa-mail-reply',label:"",},
            {code:'fa fa-mail-reply-all',label:"",},
            {code:'fa fa-male',label:"",},
            {code:'fa fa-map',label:"",},
            {code:'fa fa-map-marker',label:"",},
            {code:'fa fa-map-o',label:"",},
            {code:'fa fa-map-pin',label:"",},
            {code:'fa fa-map-signs',label:"",},
            {code:'fa fa-meh-o',label:"",},
            {code:'fa fa-microchip',label:"",},
            {code:'fa fa-microphone',label:"",},
            {code:'fa fa-microphone-slash',label:"",},
            {code:'fa fa-minus',label:"",},
            {code:'fa fa-minus-circle',label:"",},
            {code:'fa fa-minus-square',label:"",},
            {code:'fa fa-minus-square-o',label:"",},
            {code:'fa fa-mobile',label:"",},
            {code:'fa fa-mobile-phone',label:"",},
            {code:'fa fa-money',label:"",},
            {code:'fa fa-moon-o',label:"",},
            {code:'fa fa-mortar-board',label:"",},
            {code:'fa fa-motorcycle',label:"",},
            {code:'fa fa-mouse-pointer',label:"",},
            {code:'fa fa-music',label:"",},
            {code:'fa fa-navicon',label:"",},
            {code:'fa fa-newspaper-o',label:"",},
            {code:'fa fa-object-group',label:"",},
            {code:'fa fa-object-ungroup',label:"",},
            {code:'fa fa-paint-brush',label:"",},
            {code:'fa fa-paper-plane',label:"",},
            {code:'fa fa-paper-plane-o',label:"",},
            {code:'fa fa-paw',label:"",},
            {code:'fa fa-pencil',label:"",},
            {code:'fa fa-pencil-square',label:"",},
            {code:'fa fa-pencil-square-o',label:"",},
            {code:'fa fa-percent',label:"",},
            {code:'fa fa-phone',label:"",},
            {code:'fa fa-phone-square',label:"",},
            {code:'fa fa-photo',label:"",},
            {code:'fa fa-picture-o',label:"",},
            {code:'fa fa-pie-chart',label:"",},
            {code:'fa fa-plane',label:"",},
            {code:'fa fa-plug',label:"",},
            {code:'fa fa-plus',label:"",},
            {code:'fa fa-plus-circle',label:"",},
            {code:'fa fa-plus-square',label:"",},
            {code:'fa fa-plus-square-o',label:"",},
            {code:'fa fa-podcast',label:"",},
            {code:'fa fa-power-off',label:"",},
            {code:'fa fa-print',label:"",},
            {code:'fa fa-puzzle-piece',label:"",},
            {code:'fa fa-qrcode',label:"",},
            {code:'fa fa-question',label:"",},
            {code:'fa fa-question-circle',label:"",},
            {code:'fa fa-question-circle-o',label:"",},
            {code:'fa fa-quote-left',label:"",},
            {code:'fa fa-quote-right',label:"",},
            {code:'fa fa-random',label:"",},
            {code:'fa fa-recycle',label:"",},
            {code:'fa fa-refresh',label:"",},
            {code:'fa fa-registered',label:"",},
            {code:'fa fa-remove',label:"",},
            {code:'fa fa-reorder',label:"",},
            {code:'fa fa-reply',label:"",},
            {code:'fa fa-reply-all',label:"",},
            {code:'fa fa-retweet',label:"",},
            {code:'fa fa-road',label:"",},
            {code:'fa fa-rocket',label:"",},
            {code:'fa fa-rss',label:"",},
            {code:'fa fa-rss-square',label:"",},
            {code:'fa fa-s15',label:"",},
            {code:'fa fa-search',label:"",},
            {code:'fa fa-search-minus',label:"",},
            {code:'fa fa-search-plus',label:"",},
            {code:'fa fa-send',label:"",},
            {code:'fa fa-send-o',label:"",},
            {code:'fa fa-server',label:"",},
            {code:'fa fa-share',label:"",},
            {code:'fa fa-share-alt',label:"",},
            {code:'fa fa-share-alt-square',label:"",},
            {code:'fa fa-share-square',label:"",},
            {code:'fa fa-share-square-o',label:"",},
            {code:'fa fa-shield',label:"",},
            {code:'fa fa-ship',label:"",},
            {code:'fa fa-shopping-bag',label:"",},
            {code:'fa fa-shopping-basket',label:"",},
            {code:'fa fa-shopping-cart',label:"",},
            {code:'fa fa-shower',label:"",},
            {code:'fa fa-sign-in',label:"",},
            {code:'fa fa-sign-language',label:"",},
            {code:'fa fa-sign-out',label:"",},
            {code:'fa fa-signal',label:"",},
            {code:'fa fa-signing',label:"",},
            {code:'fa fa-sitemap',label:"",},
            {code:'fa fa-sliders',label:"",},
            {code:'fa fa-smile-o',label:"",},
            {code:'fa fa-snowflake-o',label:"",},
            {code:'fa fa-soccer-ball-o',label:"",},
            {code:'fa fa-sort',label:"",},
            {code:'fa fa-sort-alpha-asc',label:"",},
            {code:'fa fa-sort-alpha-desc',label:"",},
            {code:'fa fa-sort-amount-asc',label:"",},
            {code:'fa fa-sort-amount-desc',label:"",},
            {code:'fa fa-sort-asc',label:"",},
            {code:'fa fa-sort-desc',label:"",},
            {code:'fa fa-sort-down',label:"",},
            {code:'fa fa-sort-numeric-asc',label:"",},
            {code:'fa fa-sort-numeric-desc',label:"",},
            {code:'fa fa-sort-up',label:"",},
            {code:'fa fa-space-shuttle',label:"",},
            {code:'fa fa-spinner',label:"",},
            {code:'fa fa-spoon',label:"",},
            {code:'fa fa-square',label:"",},
            {code:'fa fa-square-o',label:"",},
            {code:'fa fa-star',label:"",},
            {code:'fa fa-star-half',label:"",},
            {code:'fa fa-star-half-empty',label:"",},
            {code:'fa fa-star-half-full',label:"",},
            {code:'fa fa-star-half-o',label:"",},
            {code:'fa fa-star-o',label:"",},
            {code:'fa fa-sticky-note',label:"",},
            {code:'fa fa-sticky-note-o',label:"",},
            {code:'fa fa-street-view',label:"",},
            {code:'fa fa-suitcase',label:"",},
            {code:'fa fa-sun-o',label:"",},
            {code:'fa fa-support',label:"",},
            {code:'fa fa-tablet',label:"",},
            {code:'fa fa-tachometer',label:"",},
            {code:'fa fa-tag',label:"",},
            {code:'fa fa-tags',label:"",},
            {code:'fa fa-tasks',label:"",},
            {code:'fa fa-taxi',label:"",},
            {code:'fa fa-television',label:"",},
            {code:'fa fa-terminal',label:"",},
            {code:'fa fa-thermometer',label:"",},
            {code:'fa fa-thermometer-0',label:"",},
            {code:'fa fa-thermometer-1',label:"",},
            {code:'fa fa-thermometer-2',label:"",},
            {code:'fa fa-thermometer-3',label:"",},
            {code:'fa fa-thermometer-4',label:"",},
            {code:'fa fa-thermometer-empty',label:"",},
            {code:'fa fa-thermometer-full',label:"",},
            {code:'fa fa-thermometer-half',label:"",},
            {code:'fa fa-thermometer-quarter',label:"",},
            {code:'fa fa-thermometer-three-quarters',label:"",},
            {code:'fa fa-thumb-tack',label:"",},
            {code:'fa fa-thumbs-down',label:"",},
            {code:'fa fa-thumbs-o-down',label:"",},
            {code:'fa fa-thumbs-o-up',label:"",},
            {code:'fa fa-thumbs-up',label:"",},
            {code:'fa fa-ticket',label:"",},
            {code:'fa fa-times',label:"",},
            {code:'fa fa-times-circle',label:"",},
            {code:'fa fa-times-circle-o',label:"",},
            {code:'fa fa-times-rectangle',label:"",},
            {code:'fa fa-times-rectangle-o',label:"",},
            {code:'fa fa-tint',label:"",},
            {code:'fa fa-toggle-down',label:"",},
            {code:'fa fa-toggle-left',label:"",},
            {code:'fa fa-toggle-off',label:"",},
            {code:'fa fa-toggle-on',label:"",},
            {code:'fa fa-toggle-right',label:"",},
            {code:'fa fa-toggle-up',label:"",},
            {code:'fa fa-trademark',label:"",},
            {code:'fa fa-trash',label:"",},
            {code:'fa fa-trash-o',label:"",},
            {code:'fa fa-tree',label:"",},
            {code:'fa fa-trophy',label:"",},
            {code:'fa fa-truck',label:"",},
            {code:'fa fa-tty',label:"",},
            {code:'fa fa-tv',label:"",},
            {code:'fa fa-umbrella',label:"",},
            {code:'fa fa-universal-access',label:"",},
            {code:'fa fa-university',label:"",},
            {code:'fa fa-unlock',label:"",},
            {code:'fa fa-unlock-alt',label:"",},
            {code:'fa fa-unsorted',label:"",},
            {code:'fa fa-upload',label:"",},
            {code:'fa fa-user',label:"",},
            {code:'fa fa-user-circle',label:"",},
            {code:'fa fa-user-circle-o',label:"",},
            {code:'fa fa-user-o',label:"",},
            {code:'fa fa-user-plus',label:"",},
            {code:'fa fa-user-secret',label:"",},
            {code:'fa fa-user-times',label:"",},
            {code:'fa fa-users',label:"",},
            {code:'fa fa-vcard',label:"",},
            {code:'fa fa-vcard-o',label:"",},
            {code:'fa fa-video-camera',label:"",},
            {code:'fa fa-volume-control-phone',label:"",},
            {code:'fa fa-volume-down',label:"",},
            {code:'fa fa-volume-off',label:"",},
            {code:'fa fa-volume-up',label:"",},
            {code:'fa fa-warning',label:"",},
            {code:'fa fa-wheelchair',label:"",},
            {code:'fa fa-wheelchair-alt',label:"",},
            {code:'fa fa-wifi',label:"",},
            {code:'fa fa-window-close',label:"",},
            {code:'fa fa-window-close-o',label:"",},
            {code:'fa fa-window-maximize',label:"",},
            {code:'fa fa-window-minimize',label:"",},
            {code:'fa fa-window-restore',label:"",},
            {code:'fa fa-wrench',label:"",},
        ],
        tableName:'',//表格名称
        commodityClassHeadingHttpApi:'',
        commodityClassHeadingTable:[],//商品类目表格数据
        commodityClassHeadingUpdateColArray:[],
        commodityClassHeadingSelection:[],//选中数据集合
        commodityClassHeadingCurrentPage:1,
        commodityClassHeadingTotalPagination:10,//总页数
        commodityBrandHttpApi:'',
        commodityBrandTable:[],//品牌表格数据
        commodityBrandTableClone:[],//品牌表格数据clone
        commodityBrandNewCol:'',
        commodityBrandIfDel:false,//是否删除
        commodityBrandNewColArray:[],//表格内新增数据集合
        commodityBrandUpdateColArray:[],//表格内修改数据集合
        commodityBrandSelection:[],//选中数据集合
        commodityBrandUpdateRow:'',//修改表格行数据
        commodityBrandUpdateRowId:'',//修改的表格行ID
        commodityBrandCurrentPage:1,
        commodityBrandTotalPagination:10,//总页数
        queryparams:{},
        tableLoading:true,
        totalPage:10,//总页数
        eachPage:10,//每页显示条数
        httpApi:'',
    } ,
    mutations: {
        go(state) { //控制slidebar显示隐藏
            state.show = !state.show
        } ,
        slidbarData(state) {
            if (window.localStorage.getItem('ERP') != '') {
                state.slidbarData = JSON.parse(window.localStorage.getItem('ERP'))
            }
        } , //页签数组
        username(state) {
            if (window.localStorage.getItem('_ERP') != '') {
                state.username = JSON.parse(window.sessionStorage.getItem('_ERP'))
            }
        } ,
        go1(state) {
            state.fixed = true;
        } ,
        go2(state) {
            state.fixed = false;
        } ,
        Init_Table(state,data){//表格数据模型
            state[state.tableName+'Table']=data;
        },
        Init_TableClone(state,data){
            state[state.tableName+'TableClone']=data;
        },
        Init_pagination(state,data){//页码总数
            state[state.tableName+'TotalPagination']=data
        },
        setIfDel(state,data){//配置是否删除参数
            state[state.tableName+'IfDel']=data
        },
        setHttpApi(state,api){//api地址
            state[state.tableName+'HttpApi']=api;
        },
        setTableName(state,name){//对应表格名称
            state.tableName=name;
        },
        setCurrentPage(state,page){//当前页码
           state[state.tableName+'CurrentPage']=page;
        },
        setAddColArray(state,array){//重置行内新增集合
            state[state.tableName+'NewColArray']=array;
        },
        setUpdateColArray(state,array){//重置行内修改集合
            state[state.tableName+'UpdateColArray']=array;
        },
        setTableSelection(state,array){//设置表格多选集合
            state[state.tableName+'Selection']=array;
        },
        setUpdateRowId(state,id){//重置修改行id
            state[state.tableName+'UpdateRowId']=id;
        },
        add_col(state,data){//表格行内新增
            state[state.tableName+'Table'].unshift(data);
            state[state.tableName+'NewColArray'].unshift(data);
        },
        Add_UpdateArray(state,data){//行内修改集合
            state[state.tableName+'UpdateColArray'].push(data);
        },
        get_RowId(state,data){//行id
            state[state.tableName+'UpdateRowId']=data;
        }
    },
    actions:{
        InitTable(context){//表格初始化
            axios.get(context.state[context.state.tableName+'HttpApi'],{
                params:{
                    SkipCount:(context.state[context.state.tableName+'CurrentPage']-1)*context.state.eachPage,
                    MaxResultCount:context.state.eachPage
                }
            }).then(function(res){
                context.commit('Init_Table',res.data.result.items);
                let totalPage=Math.ceil(res.data.result.totalCount/context.state.eachPage);
                context.commit('Init_pagination',totalPage);
                },function(res){
            })
        },
        addCol(context,item){//添加行
            //通过参数传递
            context.commit('add_col',item)
        },
        AddUpdateArray(context){//更改行id
            if(context.state[context.state.tableName+'UpdateColArray'].length==0){
                if(context.state[context.state.tableName+'UpdateRowId']!=""&&typeof(context.state[context.state.tableName+'UpdateRowId'])!="undefined")
                context.commit('Add_UpdateArray',context.state[context.state.tableName+'UpdateRowId'])
            }else{
                if(context.state[context.state.tableName+'UpdateColArray'].indexOf(context.state[context.state.tableName+'UpdateRowId'])==-1&&context.state[context.state.tableName+'UpdateRowId']!=""&&typeof(context.state[context.state.tableName+'UpdateRowId'])!="undefined"){
                    context.commit('Add_UpdateArray',context.state[context.state.tableName+'UpdateRowId'])
                }else{
                    return
                }
            }
        },
        getRowId(context,id){
            context.commit('get_RowId',id);
        },
        queryTable(context){
      
        }
    }
})