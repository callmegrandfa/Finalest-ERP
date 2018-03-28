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
                        <label>编号</label>
                        <el-input placeholder="" v-model="searchCode"></el-input>
                    </div> 
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>名称</label>
                        <el-input placeholder="" v-model='searchName'></el-input>
                    </div> 
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>业务地区</label>
                        <el-select placeholder=""
                                   v-model="searchArea">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="opSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="opAr"
                                     :props="selectOpProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="opNodeClick"></el-tree>
                            <el-option v-show="false"
                                       :key="countOp.id" 
                                       :label="countOp.areaName" 
                                       :value="countOp.id"
                                       id="op_confirmSelect"></el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>仓库类型</label>
                        <el-select v-model="searchType" placeholder="">
                            <el-option v-for="item in stockType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row style="text-align:center;">
                    <div class="bgcolor smallBgcolor">
                        <span class="search-btn" @click="searchList">查询</span>
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
                        <button class="erp_bt bt_add" @click="goDetail">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">新增</span>
                        </button>

                        <button @click="delMore(2)" class="erp_bt bt_del">
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
                    </el-col>
                    
                </el-row>

                <el-row class="pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border @selection-change="handleSelectionChange" style="width: 100%" stripe>
                            <el-table-column type="selection" fixed></el-table-column>
                            <el-table-column prop="ouId_OuName" label="所属组织" fixed></el-table-column>
                            <el-table-column prop="stockCode" label="仓库编码" fixed>
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{scope.row.stockCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="stockName" label="仓库名称">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{scope.row.stockName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="stockFullName" label="仓库全称"></el-table-column>
                            <el-table-column prop="stockTypeId" label="仓库类型">
                                <template slot-scope="scope">
                                    <el-input v-show="scope.row.status==0" :class="scope.$index%2==0?'bgw':'bgg'" v-model='stockType[0].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status==1" :class="scope.$index%2==0?'bgw':'bgg'" v-model='stockType[1].label' disabled=""></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="opAreaId_AreaName" label="业务地区"></el-table-column>
                            <el-table-column prop="stockAddress" label="地址"></el-table-column>
                            <el-table-column prop="manager" label="负责人"></el-table-column>
                            
                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <el-input v-show="scope.row.status===''" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[0].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status===0" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[1].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status===1" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[2].label' disabled=""></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" fixed='right'>
                                <template slot-scope="scope">
                                    <!-- <span>{{scope.row}}</span> -->
                                    <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                                    <!-- <el-button v-show='scope.$index==ifSave' v-on:click="handleSave(scope.$index)" type="text" size="small">保存</el-button>  -->
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                    <el-button v-on:click="delRow(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table> 
                    
                        <el-row>
                            <el-col :span='24'>
                                <!-- <div style="margin-top:20px;" class="ml10">
                                        共<span style="color:red">{{total}}</span>条，
                                        当前第<span style="color:red">{{page}}</span>页，
                                        共<span style="color:red">{{totalPage}}</span>页，
                                        每页行数<span style="display:inline-block;border:1px solid #cccccc;padding:1px 2px;border-radius:2px;font-size:12px;margin:0 3px;">{{eachPage}}</span>,
                                        第<span style="display:inline-block;border:1px solid #cccccc;padding:1px 5px;border-radius:2px;font-size:12px;margin:0 3px;">{{page}}</span>页
                                </div> -->
                                
                            <!-- </el-col>
                            <el-col :span="15"> -->
                                <el-pagination style="margin-top:20px;" 
                                               class="text-right" 
                                               background 
                                               layout="total, prev, pager, next,jumper"  
                                               :page-count="totalPage" 
                                               :current-page="pageIndex"
                                               :page-size="eachPage"
                                               @current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row>
                  
                    </el-col>
                </el-row>
            </el-col>   
        </el-row>
      
        <!-- dialog是否删除提示 -->
        <el-dialog :visible.sync="dialogDelConfirm" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">确认删除？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="sureDel">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogDelConfirm = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->

        <!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" class="detail_message_btnWapper">
                <span @click="detail_message_ifShow = !detail_message_ifShow" class="upBt">详情<i class="el-icon-arrow-down" @click="detail_message_ifShow = !detail_message_ifShow" :class="{rotate : !detail_message_ifShow}"></i></span>
            </el-col>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">数据提交有误!</p>
                </el-col>
                <el-collapse-transition>
                    
                        <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                            <vue-scroll :ops="option">
                                <span class="dialog_font">{{response.message}}</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">{{response.details}}<br><span :key="index" v-for="(value,index) in response.validationErrors"><span :key="ind" v-for="(val,ind) in value.members">{{val}}</span><br></span></span>
                            </vue-scroll> 
                        </el-col>
                      
                </el-collapse-transition>   
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
  </div>
</template>

<script>
    export default{
        name:'repositoryList',
        
        created:function(){
            this.getAllList();
            this.loadSelect();
            
        },
        computed:{
            countOp () {
                return this.opItem;
            },
        }, 
        watch: {
            opSearch(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods:{
            //---获取数据------------------------------------------
            getAllList:function(){//获取所有仓库列表0
                let self = this;
                this.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:'1',Start:(self.page-1)*self.eachPage,Length:self.eachPage}).then(function(res){
                    console.log(res);
                    self.allList = res.data;
                    self.total = res.total;
                    self.totalPage = Math.ceil(res.total/self.eachPage)
                },function(res){
                    console.log(res)
                })
            },
            
            loadSelect:function(){
                let self = this;
                //业务地区
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:1}).then(function(res){
                    console.log(res);
                    self.opAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
            },
            //----------------------------------------------------

            //---条件查找------------------------------------------
            searchList:function(){//根据条件查找仓库信息
                let self = this;
                this.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:'1',StockCode:self.searchCode,StockName:self.searchName,AreaCode:self.searchArea,StockTypeId:self.searchType,Start:'0',Length:'100'}).then(function(res){
                    console.log(res);
                    if(res.total>0){
                        self.queryList=res.data;
                        self.allList = res.data;
                        self.total = res.total;
                    }else{
                        self.getAllList();
                    }

                })
            },
            //----------------------------------------------------

            //---表格编辑------------------------------------------
            handleEdit:function(index){//表格内编辑操作
                this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！
                console.log(index)
            },

            handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },

            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
                console.log(val)
                this.page = val;
                this.getAllList();
            },     
            //---------------------------------------------------

            //---确认删除----------------------------------------
            sureDel:function(){
                let self = this;
                if(self.who == 1){
                    self.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',{id:self.whoId}).then(function(res){
                        
                        self.allList.splice(self.whoIndex,1);
                        self.dialogDelConfirm = false;
                        self.open('删除成功','el-icon-circle-check','successERP');
                    },function(res){
                        self.open('删除失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                };

                if(self.who == 2){
                    // console.log(self.idArray)
                    self.$axios.posts('/api/services/app/StockManagement/BatchDelete',self.idArray).then(function(res){
                        self.getAllList();
                        self.dialogDelConfirm = false;
                        self.open('删除成功','el-icon-circle-check','successERP');    
                    },function(res){
                        self.open('删除失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }
            },
            //--------------------------------------------------

            //---行内删除---------------------------------------
            delRow:function(index,row,who){
                let self = this;
                // console.log(row)
                self.who = who;
                self.whoIndex = index;
                self.whoId = row.id;
                self.dialogDelConfirm = true;
            },
            //-------------------------------------------------

            //---批量删除--------------------------------------
            delMore:function(num){
                let self = this;
                self.idArray.ids = [];
                for(let i in self.multipleSelection){
                    self.idArray.ids.push(self.multipleSelection[i].id)
                }

                if(self.idArray.ids.length>0){
                    if(self.idArray.ids.indexOf(undefined)!=-1){
                        self.$message({
                            type: 'warning',
                            message: '新增数据请在行内删除'
                        });
                        return;
                    }
                    self.dialogDelConfirm = true;   
                    self.who = num;
                }else{
                    self.$message({
                        type: 'info',
                        message: '请勾选需要删除的数据！'
                    });
                }
            },
            //-------------------------------------------------
            
            
            //---跳转----------------------------------------------
            goDetail(){
                this.$store.state.url='/repository/repositoryData/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            goModify:function(id){
                console.log(id)
                this.$store.state.url='/repository/repositoryModify/'+id
                // this.$store.state.url='/repository/default/repositoryModify/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
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
            filterNode(value, data) {
                console.log(value)
                console.log(data)
                if (!value) return true;
                    return data.areaName.indexOf(value) !== -1;
            },
            opNodeClick:function(data){
                // console.log(data)
                let self = this;
                self.opItem.id = data.id;
                self.opItem.areaName = data.areaName;
                self.$nextTick(function(){
                    $('#op_confirmSelect').click()
                })
            },
            //-----------------------------------------------
        },
        
        data(){
            return{ 
                allList:[],//获取所有的列表数据
                total:'',//数据总条数
                queryList:[],//将查询回来的数据保存为数组形式
                multipleSelection: [],//复选框选中数据
                listById:'',//根据id获取的list
                xx:'156416',
                idArray:{
                    ids:[]
                },//复选框选中数据id
                getAllParam:{
                    OuId:'1',//组织单元ID()
                    Draw:'1',
                    Start:'0',//偏移量
                    Length:'100',//长度
                },
                queryId:'',//需要查询的stockId
                    
                pageIndex:0,//分页的当前页码
			    totalPage:0,//当前分页总数
                page:1,//当前页
                eachPage:10,//一页显示的数量

                searchCode:'',//查询编号
                searchName:'',//查询名称
                searchArea:'',//查询业务地区
                searchType:'',//仓库类型

                stockTypeId:'',//左侧搜索框的仓库类型值
                ifWidth:true,

                //---业务地区树形下拉-----
                opSearch:'',//树形搜索框的
                selectOpProps:{
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                opItem:{
                    id:'',
                    areaName:'',
                },
                opAr:[],//业务地区下拉框
                //-----------------------

                status: [{
                    value:"",
                    label: '全部'
                    }, {
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                 }],
                stockType:[{
                    value:0,
                    label: '仓库'
                    }, {
                    value:1,
                    label: '店铺'
                }],

                //---确认删除-----------------               
                dialogDelConfirm:false,//用户删除保存提示信息
                //--------------------  

                //---错误提示框----------------
                option: {
                    vRail: {
                        width: '5px',
                        pos: 'right',
                        background: "#9093994d",
                    },
                    vBar: {
                        width: '5px',
                        pos: 'right',
                        background: '#9093994d',
                    },
                    hRail: {
                        height: '0',
                    },
                },
                errorMessage:false,
                detail_message_ifShow:false,
                response:{
                    details:'',
                    message:'',
                    validationErrors:[],
                },
                //-----------------------------
                who:'',//删除的是谁以及是否是多项删除
                whoId:'',//单项删除的id
                whoIndex:'',//单项删除的index
            }
        },
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
</style>
