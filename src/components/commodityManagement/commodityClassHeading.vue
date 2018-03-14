<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="left-box" style="min-width:275px;width:275px;float:left">    
            <el-row class="bg-white" v-show="ifWidth">
                <el-col :span="24">
                    <el-row class="h48 pl15">
                        <el-col :span="18">
                            <i class="el-icon-search"></i>
                            <span>查询</span>
                        </el-col>
                        <el-col :span="5">
                            <span class="fs12 open" @click="closeLeft">+ 收起</span>
                        </el-col>
                    </el-row>
                    <div style="margin-top:20px">
                        <el-row>
                            <el-col :span="7">
                                <div class="bgcolor smallBgcolor">
                                <label >商品类目</label>
                            </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="bgcolor smallBgcolor">
                                <el-input v-model="search.CategoryName"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="7" >
                                <div class="bgcolor smallBgcolor">
                                    <label><small></small>服务类(虚拟)</label>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="bgcolor smallBgcolor">
                                    <el-select  v-model="search.IsService">
                                        <el-option v-for="item in SystemOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="7" >
                                <div class="bgcolor smallBgcolor">
                                    <label><small></small>状态</label>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="bgcolor smallBgcolor">
                                    <el-select  v-model="search.Status" >
                                        <el-option v-for="item in StatusOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <el-row>
                        <el-col :span="7">&nbsp;</el-col>
                        <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                            <span class="search-btn" @click="query"  style="float:left;margin-left:10px;">查询</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div id="bgj">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white" style="background-color:rgb(249,249,249)">
                	<el-col :span="ifWidth?0:2" class="search-block" >
	                    <div @click="openLeft">
	                        <div style="display:inline-block" @click="openLeft">
	                            <img src="../../../static/image/common/search_btn.png">
	                        </div>
	                        <div style="display:inline-block;margin-left:2px;font-size:16px;" >
	                            <span>查询</span>
	                        </div>
	                        <div class="out-img" >
	                            <span class="search_info_open" style="margin-left:0">+</span>
	                        </div>
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
                            <el-table v-loading="tableLoading" :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
                                <el-table-column type="selection" label="" width="50">
                                </el-table-column>
                                <el-table-column prop="categoryParentid" label="上级类目">
                                </el-table-column>
                                <el-table-column prop="categoryCode" label="类目编码">
                                </el-table-column>
                                <el-table-column prop="categoryName" label="类目名称" width="">
                                </el-table-column>
                                <el-table-column prop="status" label="状态">
                                </el-table-column>
                                <el-table-column prop="mnemonic" label="助记码">
                                </el-table-column>
                                <el-table-column prop="isService" label="服务类" width="80">
                                    <template slot-scope="scope">
                                        <el-checkbox disabled v-model='scope.row.isService'></el-checkbox>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="address7" label="备注" width="">
                                </el-table-column>
                                <el-table-column prop="address12" label="操作" width="">
                                    <template slot-scope="scope">
                                        <el-button @click="modify(scope.row)" type="text" size="small"  >查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination style="margin-top:20px;"  class="text-right"  background layout="total, prev, pager, next"  :page-count="totalPage" >
                            </el-pagination>   
                    </el-col>
                </el-row>
                </el-col>
            </el-row>
        </div>   
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
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
                search:{
                    CategoryName:'',
                    IsService:'',
                    Status:'',
                },
                bottonbox:{
                    url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_audit',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核' 
                },{
                    class: 'erp_bt bt_in',
                    imgsrc: '../../../static/image/common/bt_in.png',
                    text: '导入'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    text: '导出'
                }]},
                SystemOptions: [{
                    value: null,
                    label: '全部'
                    }, {
                    value: false,
                    label: '是'
                    }, {
                    value: true,
                    label: '否'
                    }],
                StatusOptions:[{
                    value: 1,
                    label: '启用'
                },{
                    value: 0,
                    label: '未启用'
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
                pageIndex:1,//分页的当前页码
                eachPage:10,//每页有多少条信息
                totalPage:100,//当前分页总数
            }
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        created:function(){       
           this.loadTree();
           this.loadTableData();
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
                obgh.style.width="calc(100% - 275px)";
            },
            handleSelectionChange(val) {//点击复选框选中的数据
            },
            btmlog:function(data){
                if(data=="启用"){
                   
                }
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgj')
                ocate.style.width="calc(100% - 275px)";
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
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('http://192.168.100.107:8085/api/services/app/CategoryManagement/GetAll',{SkipCount:(_this.pageIndex-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){
                    _this.tableData=res.result.items;
                    let countPage=res.result.totalCount;
                    _this.tableLoading=false;
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);
                  
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/CategoryManagement/GetCategoryTree')
                    .then(function(res){
                        _this.classTree=res
                        console.log(_this.classTree)
                        _this.treeLoading=false;
                        _this.loadIcon();
                },function(res){
                    _this.treeLoading=false;
                })
            },
            TreeNodeClick(data){//树节点点击回调             
                let _this=this;
                _this.tableLoading=true;
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/CategoryManagement/GetCategoryList',{inputId:data.id}).then(function(res){       
                        console.log(res.result);                
                        _this.tableData = res.result;
                        _this.totalCount=res.result.length
                        _this.tableLoading=false;
                        
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
                _this.$axios.gets('http://192.168.100.107:8085/api/services/app/CategoryManagement/GetSearch',_this.search).then(function(res){
                    console.log(res.result);
                    _this.tableData=res.result;                   
                })
            },
            modify(row){//查看编辑
                this.$store.state.url='/commodityleimu/CommodityCategoriesDetails/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
        },
        components:{
            Btm,
            Tree
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
    width: calc(100% - 275px);
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
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
</style>