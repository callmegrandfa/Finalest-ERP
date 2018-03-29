import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  commodityClassTable: [],//商品類目表格數據
  commdityBrandTable:[],//商品品牌表格數據
  tableData:[],
  currentPage:1,//当前页码
  totalPage:10,//总页数
  eachPage:10,//每页显示条数
  httpApi:'',
}
const mutations={
  InitTable(state,data){
    state.tableData=data;
  }
}
const actions={
  getTable(context){
    this.$axios.gets(context.state.httpApi,{SkipCount:(context.state.currentPage-1)*context.state.eachPage,MaxResultCount:context.state.eachPage}).then(function(res){
        context.commit('InitTable',res.rusult.items);
    },function(res){
    })
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  
})
