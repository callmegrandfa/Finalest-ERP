<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
       	<query :data="querychend"></query>     
        <div id="bgc">
	        <el-row >
	            <el-col :span="24" class="border-left">
	            	<btm :date="bottonbox"> </btm>
	                <el-row class="pb10">
	                	 <div id="bg-white" style="background-color: rgba(251, 252, 253, 1);">
                            <router-view></router-view>           
                         </div> 
	                </el-row>
	            </el-col>
	        </el-row>
        </div>
    </div>
</template>

<script>
    import Query from '../../base/query/query'
    import Btm from '../../base/btm/btm'
    import Tree from '../../base/tree/tree'
    export default{
        name:'staffList',
        data(){
            return {
                input4:'',
                value1:[],
                checked:true,
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
                },
                options:[{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                value: '',
                bottonbox:{
                    // url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_auxiliary.png',
                    text: '辅助功能'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_excel.png',
                    text: 'Excel'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_print.png',
                    text: '打印'
                }]},
                querychend:{
                    up:'',
                    demand:[{
                    must: '',
                    title: '职员编码',
                    place: ''                
                },{
                    must: '',
                    title: '职员名称',
                     options:[{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    place: ''                 
                },{
                    must: '',
                    title: '部门',
                    options:[{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }]                
                },{
                    must: '',
                    title: '店铺',
                    options:[{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }]                
                }]},
            }
        },
        created:function(){       
            
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },              
        components:{
            Query,
            Btm,
            Tree
        }
    }
</script>

<style scoped>
    .smallBgcolor .el-select{
        width: 100% !important ;
        margin-left: 10px;
    }
    .bgcolor label{
        width: 100% !important ;
        margin-right: 0; 
    }
    .smallBgcolor .el-input{
        width: 100% !important ;
        margin-left: 10px;
    }

    .bgcolor{
        overflow:  visible; 
    }
    .bg-white{
        background: white;
        border-radius: 3px;
    }
    .bm-pd10{
        border-bottom: 1px solid #e4e4e4;
        margin: 10px 0;
    }
    .shop-title{
        float: left;
        height: 40px;
        line-height: 40px;
        margin: 0;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 3px solid rgb(51,204,204);
        color: #000;
        padding: 0 20px;
    }
    .pb10{
        padding-bottom: 10px;
    }
    .pr10{
        padding-right: 10px;
    }
    .border-left{
        border-left: 1px solid #E4E4E4;
    }
</style>

<style>
    .bgd{
        float: left;
        width: calc(100% - 200px);
    }
    #bgc{
        float: left;
        width: calc(100% - 275px);
        background-color: #fff;
    }
    .pl10{
        padding-left: 10px;
    }
    .pt10{
        padding-top: 10px;
    }
    .el-checkbox__inner{
        width: 16px;
        height: 16px;
        background: #f4f4f5;
    }
    .el-checkbox__inner::after{
        left: 4px;
        top: -2px;
    }
    .el-input-group__append{
        background-color: rgb(51,204,204);
        color: #fff;
        cursor: pointer;
        border-color: rgb(51,204,204);
    }
    .el-input__inner{
        
        height: 30px;
    }
    .ai .el-input__inner{
        border: none;
    }
</style>