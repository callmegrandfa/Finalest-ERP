import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        alerts:true,
        username:[],//存储session纪录的每条登录账号{'name':key,'accessToken':value}
        name:'',//当前登录用户名
        accessToken:'',//当前登录token
        show:false,//控制slidebar显示隐藏
        slidbarData:[],//页签数组
        url:'/',
    },
    mutations: {
        go(state){//控制slidebar显示隐藏
            state.show=!state.show
        }
        
    }
})