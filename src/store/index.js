import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        alerts:true,
        temporaryLogin:[],//本地暂时存储用户名,tokten
        username:[],//存储session纪录的每条登录账号{'name':key,'accessToken':value},用于多账号登录
        name:'',//当前登录用户名
        accessToken:'',//当前登录token
        show:false,//控制slidebar显示隐藏
        url:'/',//当前页签
        temporary:[],//本地暂时存储页签
        slidbarData:[],//从localStorage读取页签
        OrderActiveRouter:'/order/orderList/:id',
        groupActiveRouter:'/groupManage/groupManageList/:id',
        // groupActiveRouter:'/groupManage/groupManageList/:id',
        resActiveRouter:'/repository/repositoryList/:id',
        customerActiveRouter:'/customer/customerList/:id',
        billActiveRouter:'/bill/billList/:id',
    },
    mutations: {
        go(state){//控制slidebar显示隐藏
            state.show=!state.show
        },
        slidbarData(state){
            if(window.localStorage.getItem('ERP')!=''){
                state.slidbarData=JSON.parse(window.localStorage.getItem('ERP'))
            }
        },//页签数组
        username(state){
            if(window.localStorage.getItem('_ERP')!=''){
                state.username=JSON.parse(window.sessionStorage.getItem('_ERP'))
            }
        }
    }
})