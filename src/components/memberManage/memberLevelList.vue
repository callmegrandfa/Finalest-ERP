<template>
  <div class="memberLevelList">
      <el-row>
          <el-col :span="24">
	        <btm :date="bottonbox" v-on:listbtm="btmlog" style="float:left;border:none;"> </btm>
            <div class="search_input_group" style="margin-top:0;">
                <div class="search_input_wapper" @keyup.enter="submitSearch">
                    <el-input
                        placeholder="搜索..."
                        v-model="Name"
                        class="search_input">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
                <div class="search_button_wrapper" @click="dialogUserDefined = true">
                    <button class="userDefined">
                        <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                    </button>
                </div>
            </div> 
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
                <normalTable :cols="column" :isDisable="enableEdit" :tableName="tableModel" :hasModify="hasModify"></normalTable>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import Btm from '../../base/btm/btm'
import normalTable from '../../base/Table/normalTable'

export default {
  name:'customerInfor',
  data(){
      return{
        
        bottonbox:{
            url: '/memberLevel/memberLevelDetails',
            botton:[{
            class: 'erp_bt bt_add',
            imgsrc: '../../../static/image/common/bt_add.png',
            disabled:false,
            text: '新增'
        },{
            class: 'erp_bt bt_del',
            imgsrc: '../../../static/image/common/bt_del.png',
            disabled:false,
            text: '删除'
        },{
            class: 'erp_bt bt_in',
            imgsrc: '../../../static/image/common/bt_in.png',
            disabled:false,
            text: '导入'
        },{
            class: 'erp_bt bt_out',
            imgsrc: '../../../static/image/common/bt_inOut.png',
            disabled:false,
            text: '导出'
        },{
            class: 'erp_bt bt_version',
            imgsrc: '../../../static/image/common/bt_start.png',
            disabled:false,
            text: '启用'
        },{
            class: 'erp_bt bt_auxiliary',
            imgsrc: '../../../static/image/common/bt_stop.png',
            disabled:false,
            text: '停用'
        }]},
        Name:'',//右上角模糊查询
        dialogUserDefined:false,//dialog
        column: [{
            prop: '',
            label: '等级编码',
            control:'normal'
            }, {
            prop: '',
            label: '等级名称',
            control:'normal'
            }, {
            prop: '',
            label: '有效期',
            control:'normal'
            }, {
            prop: '',
            label: '消费积分系数',
            control:'normal'
            }, {
            prop: '',
            label: '储值积分系数',
            control:'normal'
            }, {
            prop: '',
            label: '消费折扣率',
            control:'normal'
        }, {
            prop: '',
            label: '注册默认等级',
            control:'normal'
            }, {
            prop: '',
            label: '允许升降级',
            control:'checkbox'
            }, {
            prop: '',
            label: '状态',
            control:'checkbox'
            }, {
            prop: '',
            label: '备注',
            control:'normal'
            }],
        enableEdit:false,
        tableModel:'memberLevelList',
        hasModify:true,


    }
       
  },
  methods:{
      btmlog:function(data){
            console.log(data)
      }
  },
  components:{
      Btm,
      normalTable
  }
}
</script>
<style scoped>
.bg-white{
    background: white;
    border-radius: 3px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt20{
    margin-top: 20px;
}
.pl15{
    padding-left: 15px;
}
.pt5{
    padding-top: 5px;
}
.fs12{
    font-size: 12px;
}
</style>


