<template>
    <div class="userGroupList">
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
                <div class="mt20 bgcolor smallBgcolor"><label>用户组编码</label><el-input v-model="searchData.UserGroupCode" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>用户组名称</label><el-input v-model="searchData.UserGroupName" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor">
                    <label>所属组织</label>
                    <el-select v-model="searchData.OuId" placeholder="">
                        <el-input
                        placeholder="搜索..."
                        class="selectSearch"
                        v-model="search">
                        </el-input>
                        <el-tree
                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                        :data="selectTree"
                        :props="selectProps"
                        node-key="id"
                        default-expand-all
                        ref="tree"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        @node-click="nodeClick"
                        >
                        </el-tree>
                        <!-- <el-option v-show="false" :key="item.id" :label="item.ouFullname" :value="item.id">
                        </el-option> -->
                        <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label></label>
                    <span class="search-btn" @click="SimpleSearchClick">查询</span>
                </div>
            </el-col>

            <el-col :span="ifWidth?19:24" class="border-left">
                <el-row class="h48">
                    <el-col :span="ifWidth?0:2" class="search-block">
                        <div @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                            <span>查询</span>
                            <span class='open-search'>+</span>
                        </div>
                    </el-col>
                    <el-col :span="ifWidth?24:22" class="pt5">
                        <!-- <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button> -->
                        <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                        <button @click="confirm" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                        <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
                        <button class="erp_bt bt_out bt_width">
                            <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                            <span class="btDetail">导出</span>
                            <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                        </button>
                        <button class="erp_bt bt_start bt_width">
                            <div class="btImg"><img src="../../../static/image/common/bt_start.png"></div>
                            <span class="btDetail">启用</span>
                            <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                        </button>
                        <button class="erp_bt bt_stop bt_width"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button> 
                        <div class="search_input_group">
                            <div class="search_input_wapper">
                                <el-input
                                    placeholder="搜索..."
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
                <!-- dialog -->
                <el-dialog :visible.sync="dialogUserDefined" class="dialogUserDefined">
                    <template slot="title">
                        <span>自定义<small>(设置显示字段)</small></span>
                    </template>
                     <el-table
                        :data="tableData" 
                        border 
                        style="width: 100%" 
                        stripe 
                        ref="multipleTable">
                            <el-table-column label="序号">
                                 <template slot-scope="scope">
                                    {{scope.$index + 1}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="field" label="字段"></el-table-column>
                            <el-table-column prop="field" label="操作">
                                <template slot-scope="scope">
                                    <el-switch
                                        v-model="tableData[scope.$index].value"
                                        active-color="#13ce66">
                                    </el-switch>
                                </template>
                            </el-table-column>
                        </el-table>   
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary">确 定</el-button>
                            <el-button>取 消</el-button>
                        </span>
                </el-dialog>
                <!-- dialog -->
                <el-row>

                    <el-col :span='24'>
                        <el-table 
                        v-loading="tableLoading"
                        :data="tableData" 
                        border 
                        style="width: 100%" 
                        stripe 
                        @selection-change="handleSelectionChange" 
                        ref="multipleTable">
                            <el-table-column type="selection" fixed="left"></el-table-column>
                            <el-table-column label="用户组编码">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="see(scope.row)">{{scope.row.userGroupCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column label="用户组名称">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="see(scope.row)">{{scope.row.userGroupName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ouId" label="所属组织"></el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                            <el-table-column prop="createdBy" label="创建人"></el-table-column>
                            
                            <el-table-column prop="createdTime" label="创建时间" width="160">
                                <template slot-scope="scope">
                                    <el-date-picker 
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" 
                                    v-model="scope.row.createdTime" 
                                    type="datetime" 
                                    readonly
                                    align="center"
                                    placeholder=""></el-date-picker>
                                </template>
                            </el-table-column>

                            <el-table-column label="操作" fixed="right">
                                 <template slot-scope="scope">
                                    <el-button type="text"  @click="see(scope.row)" >查看</el-button>
                                    <el-button type="text"  @click="confirmDelThis(scope.row)">删除</el-button>
                                    <!-- <el-button type="text"  @click="see(scope.row)" >查看</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="oneItem"
                        :total="totalItem">
                        </el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        <!-- dialog是否删除提示 -->
        <el-dialog :visible.sync="dialogUserConfirm" class="dialog_confirm_message" width="25%">
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
                <button class="dialog_footer_bt dialog_font" @click="sureAjax">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
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
        data(){
            return {
                 // 错误信息提示开始
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
                detail_message_ifShow:false,
                errorMessage:false,
                // 错误信息提示结束
//--------------确认删除开始-----------------               
                dialogUserConfirm:false,//用户删除保存提示信息
                row:{},//存储用户点击删除条目数据
                choseAjax:'',//存储点击单个删除还是多天删除按钮判断信息
                multipleSelection: [],//复选框选中数据
//--------------确认删除开始-----------------    
                search:'',
                selectTree:[
                ],
                item:{
                    id:'',
                    ouFullname:'',
                },
                selectProps: {
                    children: 'children',
                    label: 'ouFullname',
                    id:'id'
                },


                tableLoading:false,
                treeLoading:false,
                searchData:{
                    
                },
                searchDataClick:{},
                tableSearchData:{},
                selectData:{
                    UserType:[],//身份类型
                    Status001:[],//状态
                    userGroupId:[],//用户组
                    languageId:[],//语种
                    roles:[],//角色
                    ou:[],//组织
                },
               
                tableData:[],

                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                page:1,//当前页 
                totalItem:0,//总共有多少条消息
                treeCheck:[],
                isClick:[],
                load:true,
               
                searchBtClick:false,
                ifWidth:true,
                dialogUserDefined:false,//dialog

                response:{
                    details:'',
                    message:'',
                    validationErrors:[],
                },
            }
        },
        created:function(){       
            let _this=this;
            _this.loadTree();
            _this.loadTableData();
            _this.getSelectData();
        },
        watch: {
            search(val) {
                this.$refs.tree.filter(val);
            }
        },     
        methods:{
            getSelectData(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'UserType'}).then(function(res){ 
                // 身份类型
                _this.selectData.UserType=res.result;
                })
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
                // 启用状态
                _this.selectData.Status001=res.result;
                })
                _this.$axios.gets('/api/services/app/UserGroup/GetAll',{SkipCount:0,MaxResultCount:100}).then(function(res){ 
                // 所属用户组
                    _this.selectData.userGroupId=res.result.items;
                    _this.totalCount=res.result.totalCount;
                })
                _this.$axios.gets('/api/services/app/Language/GetLanguages').then(function(res){ 
                // 语种
                    _this.selectData.languageId=res.result.items;
                })
                _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:0,MaxResultCount:100}).then(function(res){ 
                // 语种
                    _this.selectData.roles=res.result.items;
                })
                _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
                // 所属组织
                _this.selectData.ou=res.result;
                })
            },
            closeLeft:function(){
               let self = this;
               self.ifWidth = false;
           },
           openLeft:function(){
               let self = this;
               self.ifWidth = true;
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
            loadTableData(){//表格
                let _this=this;
                _this.tableLoading=true
                _this.$axios.gets('/api/services/app/UserGroup/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    },function(res){
                    _this.tableLoading=false;
                })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load){
                     _this.loadTableData();
                 }else{
                     _this.SimpleSearch();
                 }
            },
            SimpleSearchClick(){
                let _this=this;
                 _this.load=false;
                 _this.searchBtClick=true;
                 _this.tableLoading=true;
                 _this.searchDataClick={
                    UserGroupCode:_this.searchData.UserGroupCode,//
                    UserGroupName: _this.searchData.UserGroupName,//
                    OuId: _this.searchData.OuId,//
                }
                _this.SimpleSearch();
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                 _this.tableLoading=true;
                _this.searchDataClick.SkipCount=(_this.page-1)*_this.oneItem;
                 _this.searchDataClick.MaxResultCount=_this.oneItem;
                _this.$axios.gets('/api/services/app/UserGroup/GetAll',_this.searchDataClick)
                .then(function(res){
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableData=res.result.items;
                    _this.tableLoading=false;
                    _this.searchBtClick=false;
                },function(res){
                    _this.errorMessage=true;
                     _this.tableLoading=false;
                     _this.searchBtClick=false;
                })
            },
            goDetail(){
                this.$store.state.url='/userGroup/userGroupDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                let _this=this;
                _this.multipleSelection=[];
                $.each(val,function(index,value){
                    _this.multipleSelection.push({'id':value.id})
                })
            },
            confirm(){//多项删除
                let _this=this;
                _this.choseAjax='rows'
                if(_this.multipleSelection.length>0){
                _this.dialogUserConfirm=true;
                }
            },
            confirmDelThis(row){//单项删除
                let _this=this;
                _this.choseAjax='row'
                _this.row=row;
                _this.dialogUserConfirm=true;
            },
            sureAjax(){
                let _this=this;
                if(_this.choseAjax=='row'){
                    _this.delThis()
                }else if(_this.choseAjax=='rows'){
                    _this.delRow()
                }
            },
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
            delThis(){//删除行
                let _this=this;
                _this.$axios.deletes('/api/services/app/UserGroup/Delete',{id:_this.row.id})
                .then(function(res){
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                },function(res){
                    if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                    _this.open('删除失败','el-icon-error','faildERP');
                })
             },
            delRow(){
                let _this=this;
                let data={
                    "createList": [],
                    "updateList": [],
                    "deleteList": _this.multipleSelection
                }
                _this.$axios.posts('/api/services/app/UserGroup/CUDAggregate',data)
                .then(function(res){
                    if(_this.load){
                        _this.loadTableData();
                    }else{
                        _this.SimpleSearch();
                    }
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                },function(res){
                    if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                    _this.open('删除失败','el-icon-error','faildERP');
                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.ouFullname.indexOf(value) !== -1;
            },
            loadTree(){
                let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
                .then(function(res){
                    _this.selectTree=res.result;
                    _this.loadIcon();
                },function(res){
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
            nodeClick(data,node,self){
                let _this=this;
                _this.item.id=data.id;
                _this.item.ouFullname=data.ouFullname;
                // _this.$nextTick(function(){
                //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
                // })
                    
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                })
            },
            see(row){
                this.$store.state.url='/userGroup/userGroupModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
        },
    }
</script>

<style scoped>
.halfWidth{
    display: inline-block;
    width: calc(50% - 10px)
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
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 498px;
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
.userGroupList .el-button+.el-button{
    margin-left: 0;
}
.halfWidth.left input{
    text-align: right;
}
.halfWidth.right input{
    text-align: left;
}
</style>