import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        alerts:true,
        username:[],//存储session纪录的每条登录账号{'name':key,'accessToken':value},用于多账号登录
        name:'',//当前登录用户名
        accessToken:'',//当前登录token
        show:false,//控制slidebar显示隐藏
        url:'/',
        slidbarData:[],
    },
    mutations: {
        go(state){//控制slidebar显示隐藏
            state.show=!state.show
        },
        slidbarData(state){
            state.slidbarData=[];
            window.localStorage.removeItem('loglevel:webpack-dev-server');
            if(window.localStorage.length>0){
                 for(let i=0;i<window.localStorage.length;i++){
                    let pushItem={'name':window.localStorage.key(i),'url':window.localStorage.getItem(window.localStorage.key(i))};
                    state.slidbarData.push(pushItem);
                }
            }
        },//页签数组
        
    }
})