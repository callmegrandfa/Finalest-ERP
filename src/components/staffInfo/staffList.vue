<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
       	<query :data="querychend"></query>     
        <div id="bgc">
	        <el-row >
	            <el-col :span="24" class="border-left">
	            	<btm :date="bottonbox"> </btm>
	                <el-row class="pb10">
	                	 <div id="bg-white" style="background-color: rgba(251, 252, 253, 1);">

                            
                             <el-col :span='24'>
               
                                <el-row class="pl10 pt10 pr10 pb10">
                                    <el-col :span="24">
                                        <el-table :data="allList" border style="width: 100%" stripe="true" highlight-current-row="true" fit="false" @selection-change="handleSelectionChange">
                                            <el-table-column type="selection"></el-table-column>
                                            <el-table-column label="序号">
                                                <template slot-scope="scope">
                                                    <img v-show='scope.$index==ar[scope.$index]' class="abimg" src="../../../static/image/content/redremind.png"/>
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.seq"
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            

                                            <el-table-column prop="ouId" label="职员编码">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.currencyCode"
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="contact" label="职员名称">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.currencyName" 
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="contactFullName" label="手机号码">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.increment"
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="contactName" label="所属部门">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.status"
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="contactClassId" label="性别">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.remark" 
                                                            @change='handleChange(scope.$index,scope.row)'
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="contactWorkPropertyId" label="生日">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.createBy" 
                                                            disabled
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="ficaOuId" label="职员类型">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.createTime" 
                                                            disabled
                                                            type="text"/>
                                                </template>
                                            </el-table-column>

                                             <el-table-column prop="ficaOuId" label="所属店铺">
                                                <template slot-scope="scope">
                                                    <input class="input-need" 
                                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                                            v-model="scope.row.createTime" 
                                                            disabled
                                                            type="text"/>
                                                </template>
                                            </el-table-column>
                                            
                                            <el-table-column label="操作">
                                                <template slot-scope="scope">
                                                    <el-button v-on:click="handleDel(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>

                                        <el-row>
                                            <el-col :span='6'>
                                                <div style="margin-top:20px;" class="ml10">
                                                        记录<span>{{total}}</span>，当前第<span>{{page}}</span>页，共<span>{{totalPage}}</span>页
                                                </div>
                                                
                                            </el-col>
                                            <el-col :span="18">
                                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" v-on:current-change="handleCurrentChange"></el-pagination>
                                            </el-col>
                                        </el-row>
                                        
                                    </el-col>
                                </el-row>

                            </el-col>  


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
                 allList:[],//所有数据列表
                updateList:[],//修改的数据
                addList:[],//新增的数据
                multipleSelection: [],//复选框选中数据
                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                total:'',//数据总条数
                page:1,//当前页
                eachPage:10,//一页显示的数量
                x:0,//增行的下标
                rows:[],//增行的数组
                createParams:{
                    "group_id": 1,
                    "currencyCode": "",
                    "currencyName": "",
                    "increment": '',
                    "seq": '',
                    "status": '',
                    "remark": ""
                },
                redShow:false,//判斷修改过的表格左上角红标
                redIndex:'',
                ar:[],
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