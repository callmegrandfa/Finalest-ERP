<template>
    <div class="commodityProperty commodity" >
        <div id="left-box" class="left-box">
        <el-row class="bg-white"  v-show="ifWidth">
            <el-col :span="24">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <img src="../../../static/image/common/search_btn.png" class="closeLeft" >
                        <span>查询</span>
                    </el-col>
                    <el-col :span="2" :offset="4">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                <label>属性编码</label>
                       </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="smallBgcolor" style="margin-top:20px">
                        <el-input placeholder="请录入单号" v-model="search.PropertyCode"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>属性名称</label>
                       </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="smallBgcolor" >
                        <el-input placeholder="请录入单号" v-model="search.PropertyName"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>控件类型</label>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="bgcolor smallBgcolor">
                            <el-select  v-model="search.ControlType" >
                            <el-option  v-for="item in ControlTypeOptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>

                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>必填</label>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="bgcolor smallBgcolor">
                            <el-select  v-model="search.Required" >
                            <el-option  v-for="item in RequiredOptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>

                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>状态</label>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="bgcolor smallBgcolor">
                            <el-select  v-model="search.Status" >
                            <el-option  v-for="item in StatusOptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>

                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="height1"></div>
                    </el-col>
                    <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                        <span class="search-btn" style="float:left;margin-left:10px;" @click="query()">查询</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        </div>
        <div id="cp" style="float:left">
        <el-row style="">
            <el-col  class="border-left" :span="24" id="bg-white">
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
                
                <div style="min-width:200px;width:200px;float:left;">
                    <el-col :span='24' class="tree-container pl10 pt10">
                        <el-tree :data="classTree"  
                        oncontextmenu="return false" ondragstart="return false"  onbeforecopy="return false" style="-moz-user-select: none"
                        :props="defaultProps"
                        default-expand-all
                        ref="tree"
                        :expand-on-click-node="false"
                        @node-click="TreeNodeClick"
                        ></el-tree>
                    </el-col>
                </div>
                 <el-row class="table-width pt10 pr10 pb10" style="float:left">
                    <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                         <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%" class="text-center">
                            <el-table-column fixed type="selection" label="" width="50">
                            </el-table-column>
                            <el-table-column fixed prop="propertyCode" label="属性编码">
                            </el-table-column>
                            <el-table-column fixed prop="propertyName" label="属性名称">
                                <template slot-scope="scope">
                                    <el-button type="text"    >{{tableData[scope.$index].propertyName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态" width="">
                            </el-table-column>
                            <el-table-column prop="controlType" label="控件类型">
                            </el-table-column>
                            <el-table-column prop="seq" label="显示顺序">
                            </el-table-column>
                            <el-table-column prop="required" label="必填" width="">
                                <template slot-scope="scope">
                                    <el-checkbox  v-model="tableData[scope.$index].required"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address7" label="备注" width="">
                            </el-table-column> 
                            <el-table-column fixed="right" prop="address8" label="操作" width="">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="modify(scope.row)"  >查看</el-button>
                                    <el-button v-on:click="handleDel(scope.row,scope.$index)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    <el-pagination
                     style="margin-top:20px;" 
                     class="text-right" 
                     @current-change="handleCurrentChange" :current-page.sync="currentPage" background layout="total, prev, pager, next"  :page-count="totalPage" >
                     </el-pagination>   
                    </el-col> 
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
        name:'customerInfor',
        data(){
            return {
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
                bottonbox:{
                    url: '/commodityProperty/commodityPropertyDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    show:true,
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    show:true,
                    text: '删除'
                },{
                    class: 'erp_bt bt_audit',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    show:true,
                    text: '审核'
                },{
                    class: 'erp_bt bt_in',
                    imgsrc: '../../../static/image/common/bt_in.png',
                    show:true,
                    text: '导入'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    show:true,
                    text: '导出'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    show:true,
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    show:true,
                    text: '停用'
                }]},
                RequiredOptions:[{
                    value: 0,
                    label: '必填'
                    }, {
                    value: 1,
                    label: '不必填'
                }],
                ControlTypeOptions:[{
                    value: 0,
                    label: '下拉'
                    }, {
                    value: 1,
                    label: '日期'
                    }, {
                    value: 2,
                    label: '手工录入'
                    }, {
                    value: 3,
                    label: '关联档案'
                }],
                StatusOptions:[{
                    value: 0,
                    label: '已提交'
                    }, {
                    value: 1,
                    label: '不通过'
                    }, {
                    value: 2,
                    label: '已反审'
                    }, {
                    value: 3,
                    label: '通过'
                }],
                search:{
                    PropertyCode:'',
                    PropertyName:'',
                    ControlType:'',
                    Required:'',
                    Status:''
                },
                value: '',
                classTree:  [//类目tree
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children:'childNodes',
                    label:'propertyName'
                },
                idArray:{
                    ids:[]
                },
                tableData: [],
                currentPage:1,//分页的当前页码
                eachPage:10,//每页有多少条信息
                totalPage:100,//当前分页总数
                SelectionChange:[],//多选集合
                ifWidth:true,
                tableLoading:true,
                treeLoading:true,
            }
        },
        created:function(){
            // this.datashop();
            this.loadTableData();
            this.loadTree();
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
                let obgh=document.getElementById('cp');
                obgh.style.width="100%";
            },
            openLeft:function(){
               let self = this;
               self.ifWidth = true;
               let obgh=document.getElementById('cp');
                obgh.style.width="calc(100% - 340px)";
            },
            modify(row){
                this.$store.state.url='/commodityProperty/commodityPropertyDetails/'+row.id;
                this.$router.push({path:this.$store.state.url});
            },
            btmlog:function(data){
                if(data == '删除'){
                    for(var i in this.SelectionChange){
                        this.idArray.ids.push(this.SelectionChange[i].id)
                    }
                    let _this=this;
                    if(_this.idArray.ids.length>0){
                        _this.$confirm('确定删除?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning',
                            center: true
                            }).then(() => {
                                _this.$axios.posts('http://192.168.100.107:8085/api/services/app/PropertyManagement/BatchDelete',_this.idArray).then(function(res){
                                    _this.loadTableData();
                                    _this.loadTree();
                                    _this.open('删除成功','el-icon-circle-check','successERP');    
                                })
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                        });
                       
                    }else{
                        this.$message({
                            type: 'info',
                            message: '请勾选需要删除的数据！'
                        });
                    }
                }
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('cp')
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
                _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/GetAll',{SkipCount:(_this.currentPage-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){
                    _this.tableData=res.result.items;
                    function compare(property){
                        return function(a,b){
                            var value1 = a[property];
                            var value2 = b[property];
                            return value1 - value2;
                        }
                    }
                    _this.tableData.sort(compare('seq'));
                    for(let i=0;i<_this.tableData.length;i++){
                        if(_this.tableData[i].controlType == 0){
                           _this.tableData[i].controlType='下拉' 
                        }else if(_this.tableData[i].controlType == 1){
                           _this.tableData[i].controlType='日期'  
                        }else if(_this.tableData[i].controlType == 2){
                           _this.tableData[i].controlType='手工录入'  
                        }else{
                           _this.tableData[i].controlType='关联档案'  
                        }
                        if(_this.tableData[i].status == 0){
                           _this.tableData[i].status='已提交' 
                        }else if(_this.tableData[i].status == 1){
                           _this.tableData[i].status='不通过'  
                        }else if(_this.tableData[i].status == 2){
                           _this.tableData[i].status='已反审'  
                        }else{
                           _this.tableData[i].status='通过'  
                        }

                    }
                    
                    console.log(_this.tableData)
                    let countPage=res.result.totalCount;
                    // _this.tableLoading=false;
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);

                  
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/GetPropertyTree')
                    .then(function(res){
                        _this.classTree=res;
                        _this.treeLoading=false;
                        console.log(res)
                        console.log(1)
                        // _this.classTree=res
                        // console.log(res)
                        _this.loadIcon();
                        // _this.treeLoading=false;
                        // _this.loadIcon();
                },function(res){
                    _this.treeLoading=false;
                    // _this.treeLoading=false;
                })
            },
            TreeNodeClick(data){//树节点点击回调             
                let _this=this;
                _this.tableLoading=true;
                console.log(data.id); 
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/GetPropertyList',{inputId:data.id}).then(function(res){       
                        console.log(_this.tableData );                
                        // _this.tableData = res.result;
                        // _this.totalCount=res.result.length
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
            handleDel(row,index){//行内删除
                console.log(row.id);
                this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {     
                            let _this=this;
                            _this.$axios.deletes('http://192.168.100.107:8085/api/services/app/PropertyManagement/Delete',{Id:row.id}).then(function(res){
                                _this.loadTableData();
                                _this.open('删除成功','el-icon-circle-check','successERP');              
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                });
            },
            handleCurrentChange:function(val){//获取当前页码,分页
                this.currentPage=val;
                console.log(this.currentPage);
                this.loadTableData();
            },
            handleSelectionChange(val){//多选操作
                this.SelectionChange=val;
            },
            datashop(){
                for(var i=0;i<this.tableData.length;i++){
                    this.tableData[i].date=i+1;
                }

            },
            query(){//按条件查询
                let _this=this;
                _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/GetSearch',_this.search).then(function(res){
                    console.log(res.result);
                    _this.tableData=res.result;                   
                })
            },
            
                
                

        },
        components:{
            Query,
            Btm,
            Tree
        }

        

    }
</script>

<style scoped>
.search-block{
    border-bottom: 1px solid #E4E4E4;
    box-sizing: border-box;
}
.el-tree{
        background-color: transparent;
    }
    .pt10{
        padding-top: 10px;
    }
    .pl10{
        padding-left: 10px;
    }
.ml10{
    margin-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
#cp{
    width: calc(100% - 340px);
}
.table-width{
    width: calc(100% - 200px);
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
    .pl15{
        padding-left: 15px;
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
    .smallBgcolor .el-select{
        width: 100% !important ;
        margin-left: 10px;   
    }
    .bgcolor label{
        width: 100% !important ;
        margin-right: 0; 
    }
    .smallBgcolor .el-input--suffix{
        width: 100% !important ;
    }
    .smallBgcolor .el-input{
        width: 100% !important ;
        margin-right: 10px;
        margin-left: 10px;
    }
    .bgcolor{
        overflow:  visible; 
    }
    .bg-white{
        background: white;
        border-radius: 3px;
    } 
    .h48{
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #E4E4E4;
    }
</style>

<style>
.commodityProperty .bgcolor{
    width: 100%;
}
.el-checkbox__inner{
    width: 16px ;
    height: 16px ;
    background: #f4f4f5 ;
}
.el-checkbox__inner::after{
    left: 4px ;
    top: -2px ;
}
</style>