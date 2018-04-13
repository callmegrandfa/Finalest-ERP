<template>
  <div class="res-list">
      <el-row class="bg-white">
            <el-col :span="ifWidth?5:0" v-show="ifWidth">
                <el-row class="h48 pl15">
                    <el-col :span="18" class="btn-for-search">
                        <img src="../../../static/image/common/search_btn.png">
                        <span>查询</span>
                    </el-col>
                    <el-col :span="2" :offset="4">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>
                <el-row class="mt10"> 
                    <div class="bgcolor smallBgcolor">
                        <label>仓库编码</label>
                        <el-input placeholder="" v-model="queryParams.StockCode"></el-input>
                    </div> 
                </el-row>
                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>仓库名称</label>
                        <el-input placeholder="" v-model="queryParams.StockName"></el-input>
                    </div> 
                </el-row>
                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>业务地区</label>
                        <el-select v-model="queryParams.AreaCode"></el-select>
                    </div>
                </el-row>
                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>仓库类型</label>
                        <el-select v-model="queryParams.StockTypeId">
                            <el-option v-for="item in stockType" :key="item.value" :value="item.value" :label="item.label"></el-option>
                        </el-select>
                    </div>
                </el-row>
                <el-row style="text-align:center;">
                    <div class="bgcolor smallBgcolor">
                        <span class="search-btn" @click="query()">查询</span>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="ifWidth?19:24" class="border-left">
                <el-row class="h48">
                    <el-col :span='2' class="search-block"  v-show="!ifWidth">
                        <div @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                            <span>查询</span>
                            <span class='open-search'>+</span>
                        </div>
                        
                    </el-col>

                    <el-col :span="22" class="pt5">
                        <button class="erp_bt bt_add" @click="add();">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">新增</span>
                        </button>

                        <button  class="erp_bt bt_del">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_excel">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_excel.png">
                            </div>
                            <span class="btDetail">Excel</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        <div class="search_input_group">
                        <div class="search_input_wapper" >
                            <el-input
                                placeholder="搜索..."
                                class="search_input">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                        <div class="search_button_wrapper">
                            <button class="userDefined">
                                <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                            </button>
                        </div>
                    </div>
                    </el-col>
                    
                </el-row>
                <el-row class="pb10">
                    <el-col :span="24">
                        <Table :methodsUrl="httpUrl" :hasPagination="hasPagination" :cols="column" :HttpParams="HttpParams" :queryParams="queryParams" :isDisable='isDisable' :tableName="tableModel" :mutiSelect="mutiSelect"  :command="command"></Table>
                    </el-col>
                </el-row>
            </el-col>   
        </el-row>
  </div>
</template>
<script>
import Table from '../../base/Table/Table'
    export default{
        name:'repositoryList',
        data(){
            return{
                ifWidth:true,
                tableModel:'storeHouse',//数据模型名称标志
                isDisable:true,//表格是否可编辑
                mutiSelect:true,//表格是否可多选
                command:[{//操作栏按钮配置
                    text:'查看',
                    class:'green'
                },{
                    text:'删除',
                    class:'blue'
                }],
                httpUrl:{//请求接口地址
                    Initial:'/api/services/app/StockManagement/GetRepositoryList',
                    view:'/storeHouse/storeHouseModify/',
                    delete:'/api/services/app/StockManagement/Delete'
                },
                HttpParams:{//初始化参数
                    OuId:this.$store.state.OuId,
                    SkipCount:(this.$store.state.storeHouseCurrentPage-1)*this.$store.state.storeHouseEachPage,
                    MaxResultCount:this.$store.state.storeHouseEachPage
                },
                column:[{//表格列配置
                        prop: 'ouId_OuName',
                        label: '所属组织',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'stockCode',
                        label: '仓库编码',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'stockName',
                        label: '仓库名称',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'stockFullName',
                        label: '仓库全称',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'stockTypeId',
                        label: '仓库类型',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'opAreaId_AreaName',
                        label: '业务地区',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'stockAddress',
                        label: '地址',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'manager',
                        label: '负责人',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'status',
                        label: '状态',
                        controls:'select',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                        dataSource:[{
                            value: 1,
                            label: '启用'
                        },{
                            value: 0,
                            label: '禁用'
                        }]
                }],
                hasPagination:true,
                queryParams:{
                    OuId:this.$store.state.OuId,//组织单元ID
                    StockCode:'',//仓库编码
                    StockName:'',//仓库名称
                    AreaCode:'',//业务地区
                    StockTypeId:'',//仓库类型
                    Sorting:'',//排序方式
                    SkipCount:(this.$store.state.storeHouseCurrentPage-1)*this.$store.state.storeHouseEachPage,
                    MaxResultCount:this.$store.state.storeHouseEachPage
                },
                stockType:[{//仓库类型
                    value:0,
                    label: '仓库'
                    }, {
                    value:1,
                    label: '店铺'
                }],
            }
        },
        created(){
            
        },
        computed:{
            
        }, 
        watch: {
          
        },
        methods:{
            add(){//新增页面跳转
                this.$store.state.url='/storeHouse/storeHouseModify/default'
           		this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            query(){//根据条件查询数据
                let _this=this;
                _this.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',_this.queryParams).then(function(res){;
                        _this.$store.commit('Init_Table',res.result.items);//传递table数据
                        let totalPage=Math.ceil(res.result.totalCount/_this.$store.state.storeHouseEachPage);
                        _this.$store.commit('Init_pagination',totalPage);//设置总分页
                        _this.$store.commit('Init_TotalCount',res.result.totalCount);//设置总条数
                        _this.$store.commit('setCurrentPage',1)//设置当前页码为初始值1  
                })
            },
            
            //-------------------------------------------------------
            open(tittle,iconClass,className) {
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
            },
            openLeft:function(){
                let self = this;
                self.ifWidth = true;
            },
            //---树------------------------------------------
            filterNode(value, data) {
                console.log(value)
                console.log(data)
                if (!value) return true;
                    return data.areaName.indexOf(value) !== -1;
            },
           
        },
        components:{
            Table
        }
    }
</script>

<style scoped>
.res-list{
    width: 100%;
    height: 100%;
    background:#EEF1F5;
}

.w0{
    width: 0px;
}

.w20{
    width: 20%;
}
.w80{
    width: 80%;
}
w100{
    width: 100%;
}

.bg-white{
    background:white;
    border-radius: 3px;
    font-size: 14px;
}
.ml10{
    margin-left: 10px;
}
.mr10{
    margin-right: 10px;
}
.mt10{
    margin-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt10{
    padding-top: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(130, 170, 252, 1);
    border-radius: 3px;
    color: white;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(242, 242, 242, 1);
    border-radius: 3px;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
}
input:-ms-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}

input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.fs12{
    font-size: 12px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 380px;
}
</style>

<style>
.res-list .open-search{
    background-image: url(../../../static/image/common/btn-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    color: #E3E3E3;
    font-size: 12px;
    width: 19px;
    float: right;
    margin-right: 10px;
} 
.res-list .cell .el-input__inner{
    border:none;
    text-align:center;
    padding:0;
}
.res-list .bgw .el-input__inner{
    background-color:white;
}
.res-list .bgg .el-input__inner{
    background-color:#FAFAFA;
}
.res-list .bAreaSearch .el-input__inner{
    height: 30px;
    border-radius: 30px;
}
.res-list .el-table .cell{
    font-size:12px;
}
</style>
