<template>
    <div class="memberLevelDetails">
        <el-row>
            <el-col :span="24">
	        <btm :date="bottonbox"> </btm>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Btm from '../../base/btm/btm'
export default {
    name:'customerInfor',
    data(){
        return{
        bottonbox:{
            url: '/memberLevel/memberLevelList',
            botton:[{
            class: 'erp_bt bt_back',
            imgsrc: '../../../static/image/common/bt_back.png',
            text: '返回',
            disabled:false
        },{
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
            class: 'erp_bt bt_save',
            imgsrc: '../../../static/image/common/bt_save.png',
            disabled:false,
            text: '保存'
        },{
            class: 'erp_bt bt_save_add',
            imgsrc: '../../../static/image/common/bt_save_add.png',
            disabled:false,
            text: '保存并新增'
        },{
            class: 'erp_bt bt_cancel',
            imgsrc: '../../../static/image/common/u470.png',
            disabled:true,
            text: '取消'
        }]},            
        }
    },
    components:{
        Btm
    }


}
</script>

