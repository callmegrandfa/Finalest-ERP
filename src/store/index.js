import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{

        show:false,//控制slidebar显示隐藏
        slidbarData:[],//页签数组
        url:'/',
    },
    mutations: {
        go(state){//控制slidebar显示隐藏
            state.show=!state.show
        },
        storageData(state){
            console.log(e)
        }
    }
})