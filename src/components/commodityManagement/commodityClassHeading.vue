<template>
    <div class="customer-infor-wrapper commodity" >
        <div id="left-box"  class="left-box">    
            <el-row class="bg-white" v-show="ifWidth">
                <el-col :span="24">
                    <el-row class="h48 pl15">
                        <el-col :span="18">
                            <img src="../../../static/image/common/search_btn.png"  class="closeLeft">
                            <span>查询</span>
                        </el-col>
                        <el-col :span="2" :offset="4">
                            <span class="fs12 search_info_open" @click="closeLeft">-</span>
                        </el-col>
                    </el-row>
                    <div style="margin-top:20px">
                        <el-row>
                            <el-col :span="9">
                                <div class="bgcolor smallBgcolor">
                                <label >商品类目</label>
                            </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="bgcolor smallBgcolor">
                                <el-input v-model="queryParams.CategoryName"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="9" >
                                <div class="bgcolor smallBgcolor">
                                    <label><small></small>服务类(虚拟)</label>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="bgcolor smallBgcolor">
                                    <el-select  v-model="queryParams.IsService">
                                        <el-option v-for="item in SystemOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="9" >
                                <div class="bgcolor smallBgcolor">
                                    <label><small></small>状态</label>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="bgcolor smallBgcolor">
                                    <el-select  v-model="queryParams.Status" >
                                        <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <el-row>
                        <el-col :span="9">
                            <div class="height1"></div>
                        </el-col>
                        <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                            <span class="search-btn" @click="query"  style="float:left;">查询</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div id="bgj">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white" style="background-color:rgb(249,249,249)">
                	<el-col :span="ifWidth?0:2" class="search-block">
                        <div @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                            <span>查询</span>
                            <span class='open-search'>+</span>
                        </div>
                    </el-col>
	                <el-col :span="ifWidth?24:22">
	                	<btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
	                </el-col>
                     <el-row style="float:left;width:100%;">
                        <el-col :span="5">
                            <el-tree oncontextmenu="return false" ondragstart="return false"  onbeforecopy="return false" style="-moz-user-select: none"
                                :data="classTree"
                                :props="defaultProps"
                                default-expand-all
                                ref="tree"
                                :expand-on-click-node="false"
                                @node-click="TreeNodeClick">
                            </el-tree>
                        </el-col>
                        <el-col :span="19" class="pb10" style="background:#fff">
                            <Table  :methodsUrl="httpUrl" :pluginSetting='pluginSetting' :queryParams="queryParams" :cols="column" :HttpParams='HttpParams' :tableName="tableModel"  :command="command"></Table>
                    </el-col>
                </el-row>
                </el-col>
            </el-row>
            <dialogBox :message="dialogMessage" :dialogVisible="dialogShow"  @confirm="delConfirm" @cancel="delCancel"></dialogBox>   
        </div>   
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
import Table from '../../base/Table/Table'
import dialogBox from '../../base/dialog/dialog'
    export default{
        name:'customerInfor',
        data(){
            return {
            	ifWidth:true,
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
                tableLoading:true,
                dialogMessage:'',
                dialogShow:false,
                bottonbox:{
                    url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增',
                    disabled:false
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除',
                    disabled:false
                },{
                    class: 'erp_bt bt_audit',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核',
                    disabled:false 
                },{
                    class: 'erp_bt bt_in',
                    imgsrc: '../../../static/image/common/bt_in.png',
                    text: '导入',
                    disabled:false
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    text: '导出',
                    disabled:false
                }]},
                httpUrl:{
                   Initial:'/api/services/app/CategoryManagement/GetAll',//数据初始化
                   view:'/commodityleimu/CommodityCategoriesDetails/',//查看详情
                   delete:'/api/services/app/CategoryManagement/Delete',//单条删除
                   query:'/api/services/app/CategoryManagement/GetSearch',//条件查询
                   treeQuery:'/api/services/app/CategoryManagement/GetCategoryList',//树节点查询
                },
                queryParams:{//查询条件参数
                    CategoryName:'',
                    IsService:'',
                    Status:'',
                    SkipCount:(this.$store.state.commodityClassHeadingCurrentPage-1)*this.$store.state.commodityClassHeadingEachPage,
                    MaxResultCount:this.$store.state.commodityClassHeadingEachPage,
                },
                column: [{
                    prop: 'categoryParentid_CategoryName',
                    label: '上级类目',
                    controls:'text',
                    isDisable:true,
                    sortable:false,
                    }, {
                    prop: 'categoryCode',
                    label: '类目编码',
                    controls:'text',
                    isDisable:true,
                    sortable:false,
                    }, {
                    prop: 'categoryName',
                    label: '类目名称',
                    controls:'text',
                    isDisable:true,
                    sortable:false,
                    }, {
                    prop: 'status',
                    label: '状态',
                    controls:'select',
                    isDisable:true,
                    sortable:false,
                    dataSource:[]
                    }, {
                    prop: 'mnemonic',
                    label: '助记码',
                    controls:'text',
                    isDisable:true,
                    sortable:false,
                    }, {
                    prop: 'isService',
                    label: '服务类',
                    controls:'checkbox',
                    isDisable:true,
                    sortable:false,
                }],
                pluginSetting:{
                    hasPagination:true,
                    mutiSelect:true,//多选栏
                    isDisable:true,
                },
                command:[{
                    text:'查看',
                    class:'green'
                },{
                    text:'删除',
                    class:'blue'
                }],
                statusOptions:[{
                        value: 1,
                        label: '启用'
                    },{
                        value: 0,
                        label: '未启用'
                    }],
                enableEdit:true,
                tableModel:'commodityClassHeading',
                HttpParams:{//数据初始化参数
                    SkipCount:(this.$store.state.commodityClassHeadingCurrentPage-1)*this.$store.state.commodityClassHeadingEachPage,
                    MaxResultCount:this.$store.state.commodityClassHeadingEachPage
                },
                SystemOptions: [{
                    value: null,
                    label: '全部'
                    }, {
                    value: false,
                    label: '否'
                    }, {
                    value: true,
                    label: '是'
                    }],
                value: '',
                classTree:  [//类目tree
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children:'childNodes',
                    label:'categoryName'
                },
                tableData: [],
                currentPage:1,//分页的当前页码
                eachPage:10,//每页有多少条信息
                totalPage:100,//当前分页总数
                SelectionChange:[],//多选集合
            }
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        created:function(){ 
            this.InitStatus();      
            this.loadTree();
           //this.loadTableData();
        },
        watch:{
            queryParams:{
                handler:function(val,oldVal){
                     
                },
                deep:true
            },
        },
        methods:{
        	closeLeft:function(){
                let self = this;
                self.ifWidth = false;
                let obgh=document.getElementById('bgj');
                obgh.style.width="100%";
            },
            openLeft:function(){
               let self = this;
               self.ifWidth = true;
               let obgh=document.getElementById('bgj');
                obgh.style.width="calc(100% - 340px)";
            },
            btmlog:function(data){
                if(data=="启用"){
                   
                }else if(data=="删除"){
                    this.delData();
                }
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgj')
                ocate.style.width="calc(100% - 340px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgj')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            InitStatus(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status002'}).then(function(res){
                    _this.column[3].dataSource=res.result;
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('/api/services/app/CategoryManagement/GetCategoryTree')
                    .then(function(res){
                        _this.classTree=res
                        _this.treeLoading=false;
                        _this.loadIcon();
                },function(res){
                    _this.treeLoading=false;
                })
            },
            TreeNodeClick(data){//树节点点击回调             
                let _this=this;
                _this.tableLoading=true;
                    _this.$axios.gets('http://192.168.100.107:8082/api/services/app/CategoryManagement/GetCategoryList',{Id:data.id,SkipCount:(_this.currentPage-1)*_this.$store.state.eachPage,MaxResultCount:_this.$store.state.eachPage}).then(function(res){                     
                        //_this.$store.state[_this.tableModel+'Table'] = res.result.items;
                        _this.queryParams.CategoryName="";
                        _this.queryParams.IsService="";
                        _this.queryParams.Status="";
                        _this.$store.commit('Init_Table',res.result.items);
                        let totalPage=Math.ceil(res.result.totalCount/_this.$store.state.commodityClassHeadingEachPage);
                        _this.$store.commit('Init_pagination',totalPage);
                        _this.$store.commit('Init_TotalCount',res.result.totalCount);
                        _this.$store.commit('setCurrentPage',1)//设置当前页码为初始值1    
                    })
            },
            loadIcon(){
                let _this=this;
                _this.$nextTick(function () {
                    $('.preNode').remove();   
                    $('.el-tree-node__label').each(function(){
                        if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                            $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                        }else{
                            $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                        }
                    })
                })
            },
            query(){//条件查询
                let _this=this;
                _this.$axios.gets('http://192.168.100.107:8082/api/services/app/CategoryManagement/GetSearch',_this.queryParams).then(function(res){
                    _this.$store.commit('Init_ifQuery',true)
                    _this.$store.commit('Init_Table',res.result.items);
                    //_this.$store.state[_this.tableModel+'Table']=res.result.items;  
                    let totalPage=Math.ceil(res.result.totalCount/_this.$store.state.commodityClassHeadingEachPage);
                    _this.$store.commit('Init_pagination',totalPage) 
                    _this.$store.commit('Init_TotalCount',res.result.totalCount);
                    _this.$store.commit('setCurrentPage',1)//设置当前页码为初始值1                       
                })
            },
            open(tittle,iconClass,className) {//提示框
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            delConfirm(){
                let _this=this;
                let delAarry={
                        "ids":[]
                    }
                for(let i in _this.SelectionChange){
                    delAarry.ids.push(_this.SelectionChange[i].id)
                }
                if(delAarry.length==1){//单条删除
                    _this.$axios.deletes('http://192.168.100.107:8082/api/services/app/CategoryManagement/Delete',{Id:delAarry.ids[0]}).then(function(res){
                        _this.$store.dispatch('InitTable');
                        _this.$store.commit('setTableSelection',[])
                        _this.dialogShow=false;
                        _this.delAarry.ids=[];
                        _this.loadTree();
                        _this.open('删除成功','el-icon-circle-check','successERP');    
                    }).catch(function(err){
                        _this.$message({
                            type: 'warning',
                            message: err.error.message
                        });
                    })
                }else{//批量删除
                        _this.$axios.posts('http://192.168.100.107:8082/api/services/app/CategoryManagement/BatchDelete',delAarry).then(function(res){
                        _this.$store.dispatch('InitTable');
                        _this.$store.commit('setTableSelection',[])
                        _this.dialogShow=false;
                        _this.loadTree();
                        _this.delAarry.ids=[];
                        _this.open('删除成功','el-icon-circle-check','successERP');    
                    }).catch(function(err){
                        _this.$message({
                            type: 'warning',
                            message: err.error.message
                        });
                    });
                }  
                  
            },
            delCancel(){
                this.dialogShow=false;
            },
            
        },
        components:{
            Btm,
            Tree,
            Table,
            dialogBox
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
.open-search{
    background-image: url(../../../static/image/common/btn-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    color: #E3E3E3;
    font-size: 12px;
    width: 19px;
    float: right;
    margin-right: 10px;
} 
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
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
.biao{
    float: left;
    width: calc(100% - 200px)
}
#bgj{
    float: left;
    width: calc(100% - 340px);
}
</style>

<style>
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
.search-btn{
        font-size: 12px;
        display: inline-block;
        width: 87px;
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        background: #4A6997;
        color: white;
        cursor: pointer;
    }
.el-checkbox__inner{
    width: 18px;
    height: 18px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
</style>