<template>
    <div class="customer-infor-wrapper">
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
                        <label>客户分类</label>
                        <el-select class="queryCu"
                                   placeholder=""
                                   v-model="queryCu">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="cuSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="cuAr"
                                     :props="selectCuProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="cuNodeClick"></el-tree>

                            <el-option v-show="false"
                                       :key="countCu.id" 
                                       :label="countCu.cuFullname" 
                                       :value="countCu.id"
                                       id="cu_confirmSelect"></el-option>
                            
                        </el-select>
                    </div>
                </el-row>

                <el-row class="fs12">
                   <div class="bgcolor smallBgcolor">
                        <label>所属组织</label>
                        <el-select class="queryOu"
                                   placeholder=""
                                   v-model="queryOu">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="ouSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="ouAr"
                                     :props="selectOuProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="ouNodeClick"></el-tree>
                            <el-option v-show="false"
                                       :key="countOu.id" 
                                       :label="countOu.ouFullname" 
                                       :value="countOu.id"
                                       id="ou_confirmSelect"></el-option>
                        </el-select>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>行政地区</label>
                        <el-select class="queryAd"
                                   placeholder=""
                                   v-model="queryAd">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="adSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="adAr"
                                     :props="selectAdProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="adNodeClick"></el-tree>
                            <el-option v-show="false"
                                       :key="countAd.id" 
                                       :label="countAd.areaName" 
                                       :value="countAd.id"
                                       id="ad_confirmSelect"></el-option>
                        </el-select>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>业务地区</label>
                        <el-select class="queryOp"
                                   placeholder=""
                                   v-model="queryOp">
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

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>编码</label>
                        <el-input placeholder="" v-model="queryCode"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>名称</label>
                        <el-input placeholder="" v-model="queryName"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>客户性质</label>
                        <el-select v-model="queryProperty" placeholder="">
                            <el-option v-for="item in propertyAr"
                                        :key="item.itemValue"
                                        :label="item.itemName"
                                        :value="item.itemValue">
                            </el-option>
                        </el-select>
                    </div> 
                </el-row>

                <el-row style="text-align:center;">
                    <div class="bgcolor smallBgcolor">
                        <span class="search-btn" @click='doSearch'>查询</span>
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

                    <el-col :span='22' class="pt5">
                        <button class="erp_bt bt_add" @click="goDetail">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">新增</span>
                        </button>

                        <button class="erp_bt bt_del" @click="delRow">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>

                        <button class="erp_bt bt_print">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_print.png">
                            </div>
                            <span class="btDetail">打印</span>
                        </button>
                    </el-col>
                    
                    
                </el-row>

                <el-row class="pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                            <el-table-column type="selection" fixed></el-table-column>
                            <el-table-column prop="ouId_OuName" label="所属组织" fixed></el-table-column>
                            <el-table-column prop="contactCode" label="客户编码" fixed>
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{scope.row.contactCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="contactName" label="客户名称">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{scope.row.contactName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="contactFullName" label="客户全称"></el-table-column>
                            <el-table-column prop="contactClassId_ClassName" label="客户类型"></el-table-column>
                            <el-table-column prop="contactWorkPropertyIdTValue" label="客户性质"></el-table-column>
                            <el-table-column prop="isSupplier" label="是否为供应商">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="allList[scope.$index].isSupplier" disabled="disabled"></el-checkbox>
                                </template>
                            </el-table-column>   
                            <el-table-column prop="ficaOuId_OuName" label="对应财务组织"></el-table-column>
                            <el-table-column prop="statusTValue" label="状态"></el-table-column>
                            <el-table-column label="操作" fixed='right'>
                                <template slot-scope="scope">
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                    <el-button v-on:click="confirmDel(scope.row)" type="text" size="small">删除</el-button>
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
                                <el-pagination style="margin-top:20px;" 
                                               class="text-right" 
                                               background 
                                               layout="total, prev, pager, next"  
                                               :page-count="totalPage" 
                                               :page-size="eachPage"
                                               @current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row>
                        
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
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
        name:'customerList',
        data(){
            return {
                allList:[],//所有数据列表

                queryCu:'',//客户分类搜索
                queryOu:'',//所属组织搜索
                queryAd:'',//行政地区搜索
                queryOp:'',//业务地区搜索
                queryCode:'',//编码搜索
                queryName:'',//名称搜索
                queryProperty:'',//客户性质搜索
                //---客户分类树形下拉-----
                cuSearch:'',
                selectCuProps:{
                    children: 'childNodes',
                    label: 'classFullname',
                    id:'id'
                },
                cuItem:{
                    id:'',
                    cuFullname:'',
                },
                cuAr:[],//客户分类下拉框
                //-----------------------
                //---所属组织树形下拉-----
                ouSearch:'',
                selectOuProps:{
                    children: 'children',
                    label: 'ouFullname',
                    id:'id'
                },
                ouItem:{
                    id:'',
                    ouFullname:'',
                },
                ouAr:[],//所属组织下拉框
                //-----------------------
                //---行政地区树形下拉-----
                adSearch:'',//树形搜索框的
                selectAdProps:{
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                adItem:{
                    id:'',
                    areaName:'',
                },
                adAr:[],//行政地区下拉框
                //-----------------------
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

                adAr:[],//行政地区下拉框
                propertyAr:'',//客户性质下拉框

                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                total:'',//数据总条数
                page:1,//当前页
                eachPage:10,//一页显示的数量
                multipleSelection: [],//复选框选中数据
                idArray:{
                    ids:[]
                },//复选框选中数据id
                ifWidth:true,//控制左侧搜索展开

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
            }
        },
        created:function(){
            this.loadAllList();
            this.loadSelect();
            
        },
        computed:{
            countCu () {
                return this.cuItem;
            },
            countOu () {
                return this.ouItem;
            },
            countAd () {
                return this.adItem;
            },
            countOp () {
                return this.opItem;
            },
        }, 
        methods:{
        //---获取数据-------------------------------------------------------
            loadAllList:function(){//获取所有列表数据
                let self = this;
                this.$axios.gets('/api/services/app/ContactManagement/GetListByCondition',{SkipCount:(self.page-1)*self.eachPage,MaxResultCount:self.eachPage}).then(function(res){
                    console.log(res);
                    self.allList = res.result;
                    self.total = res.result.length;
                    self.totalPage = Math.ceil(self.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------

        //---下拉的数据------------------------------------------------------
            loadSelect:function(){
                let self = this;
                //客户分类
                self.$axios.gets('/api/services/app/ContactClassManagement/GetTreeList',{Ower:1}).then(function(res){
                    console.log(res);
                    self.cuAr = res;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
                //组织单元
                self.$axios.gets('/api/services/app/OuManagement/GetAllTree',{AreaType:1}).then(function(res){
                    console.log(res);
                    self.ouAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
                //行政地区*2
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:2}).then(function(res){
                    // console.log(res);
                    self.opAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
                //业务地区*1
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:1}).then(function(res){
                    // console.log(res);
                    self.opAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
                //客户性质
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'CustomerWorkProperty'}).then(function(res){
                    // console.log(res);
                    self.propertyAr = res.result;
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------

        // ---跳转--------open----------------------------------------------
            goDetail(){//点击新增跳转
               this.$store.state.url='/customer/customerDetail/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            goModify:function(id){//点击跳转修改页modify
                // this.$store.state.url='/customer/customerModify/default'
                this.$store.state.url='/customer/customerModify/'+id;
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            
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
        //------------------------------------------------------------------

        //---左侧查询-------------------------------------------------------
        doSearch:function(){
            let self = this;
            this.$axios.gets('/api/services/app/ContactManagement/GetListByCondition',{ContactClassId:self.queryClass,OuId:self.queryOu,AdAreaId:self.queryAd,OpAreaId:self.queryOp,ContactCode:self.queryCode,ContactName:self.queryName,ContactWorkPropertyId:self.queryProperty,SkipCount:0,MaxResultCount:100}).then(function(res){
                console.log(res);
                if(res.length>0){
                    self.allList = res.result;
                    self.total = res.result.length;
                    self.totalPage = Math.ceil(self.total/self.eachPage)
                }else{
                    self.loadAllList();
                }
                
            },function(res){
                console.log('err'+res)
            })
        },
        //-------------------------------------------------------------------

        //---控制修改及分页--------------------------------------------------
        confirmDel(row) {
            let self = this;
            this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then(() => {
                self.delThis(row);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        delThis:function(row){//删除选中的项
            let self=this;
            self.$axios.deletes('/api/services/app/ContactManagement/Delete',{id:row.id}).then(function(res){
                self.open('删除成功','el-icon-circle-check','successERP');
                self.loadAllList();
            },function(res){
                self.errorMessage=true;
                self.open('删除失败','el-icon-error','faildERP')
                self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
            })
        },
        delRow(){//批量删除
            let self=this;
            for(let i in self.multipleSelection){
                self.idArray.ids.push(self.multipleSelection[i].id)
            }
            if(self.idArray.ids.indexOf(undefined)!=-1){
                self.$message({
                    type: 'warning',
                    message: '新增数据请在行内删除'
                });
                return;
            }
            if(self.idArray.ids.length>0){
                self.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                        self.$axios.posts('/api/services/app/ContactManagement/BatchDelete',self.idArray).then(function(res){
                            self.loadAllList();
                            self.open('删除成功','el-icon-circle-check','successERP');    
                        },function(res){
                            self.errorMessage=true;
                            self.open('删除失败','el-icon-error','faildERP')
                            self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        })
                    }).catch(() => {
                        self.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                });
            }else{
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }
        },
        handleSelectionChange:function(val){//点击复选框选中的数据
            this.multipleSelection = val;
        },
        handleCurrentChange:function(val){//获取当前页码
            this.pageIndex=val;
        },
        handleCurrentChange:function(val){//获取当前页码
            this.pageIndex=val;
            console.log(val)
            this.page = val;
            this.loadAllList();
        },
        //------------------------------------------------------------------

        //---左侧搜索展开----------------------------------------------------
        closeLeft:function(){
            let self = this;
            self.ifWidth = false;
        },
        openLeft:function(){
            let self = this;
            self.ifWidth = true;
        },
        //------------------------------------------------------------------

        //---树-------------------------------------------------------------
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
            console.log(data)
            if (!value) return true;
                return data.areaName.indexOf(value) !== -1;
        },
        cuNodeClick:function(data){
            let self = this;
            self.cuItem.id = data.id;
            self.cuItem.cuFullname = data.classFullname;
            self.$nextTick(function(){
                $('#cu_confirmSelect').click()
            })
        },
        ouNodeClick:function(data){
            let self = this;
            self.ouItem.id = data.id;
            self.ouItem.ouFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#ou_confirmSelect').click()
            })
        },
        adNodeClick:function(data){
            let self = this;
            self.adItem.id = data.id;
            self.adItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#ad_confirmSelect').click()
            })
        },
        opNodeClick:function(data){
            let self = this;
            self.opItem.id = data.id;
            self.opItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#op_confirmSelect').click()
            })
        },
        //-----------------------------------------------------

        //---获取错误信息---------------------------------------
        getErrorMessage(message,details,validationErrors){
            let _this=this;
            _this.response.message='';
            _this.response.details='';
            _this.response.validationErrors=[];
            if(details!=null && details){
                _this.response.details=details;
            }
            if(message!=null && message){
                _this.response.message=message;
            }
            if(message!=null && message){
                _this.response.validationErrors=validationErrors;
            }
        },
        //-----------------------------------------------------
    }
}
</script>

<style scoped>
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 90%;
    height: 28px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
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
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 400px;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}

.text-right{
    text-align: right;
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
</style>

<style>

</style>