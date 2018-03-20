<template>
    <div class="userList">
        <el-row class="bg-white">
             <el-col :span="ifWidth?5:0" v-show="ifWidth">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <img src="../../../static/image/common/search_btn.png" style="display:inline-block;margin-top:10px;">
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>

                <!-- <div class="mt20 bgcolor smallBgcolor">
                    <label><small>*</small>组织类型</label>
                    <el-select filterable   v-model="searchData.OuType">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div> -->
                <div class="mt20 bgcolor smallBgcolor"><label>用户编码</label><el-input v-model="searchData.UserCode" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>用户名称</label><el-input v-model="searchData.DisplayName" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor">
                    <label>用户组</label>
                    <!-- <el-input v-model="searchData.UserGroupId" placeholder=""></el-input> -->
                    <el-select filterable   v-model="searchData.UserGroupId" placeholder="">
                        <el-option v-for="item in selectData.userGroupId" :key="item.id" :label="item.userGroupName" :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>所属组织</label>
                    <!-- <el-input v-model="searchData.OuId" placeholder=""></el-input> -->
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
                        <el-option v-show="false" :key="item.id" :label="item.ouFullname" :value="item.id">
                        </el-option>
                        <!-- <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                            </el-option> -->
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>身份类型</label>
                    <!-- <el-input v-model="searchData.UserType" placeholder=""></el-input> -->
                    <el-select filterable   v-model="searchData.UserType" placeholder="">
                        <el-option v-for="item in selectData.UserType" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>语种</label>
                    <!-- <el-input v-model="searchData.LanguageId" placeholder=""></el-input> -->
                    <el-select filterable   v-model="searchData.LanguageId" placeholder="">
                       <el-option v-for="item in selectData.languageId" :key="item.id" :label="item.displayName" :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <!-- <div class="bgcolor smallBgcolor">
                    <label>认证类型</label>
                    <el-select filterable   v-model="searchData.AuthType" placeholder="">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div> -->
                <div class="bgcolor smallBgcolor">
                    <label>关联角色</label>
                    <!-- <el-input v-model="searchData.RoleId" placeholder=""></el-input> -->
                    <el-select filterable   v-model="searchData.RoleId" placeholder="">
                        <el-option v-for="item in selectData.roles" :key="item.id" :label="item.displayName" :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>状态</label>
                    <!-- <el-input v-model="searchData.Status" placeholder=""></el-input> -->
                    <el-select filterable   v-model="searchData.Status" placeholder="">
                        <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
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
                        <div style="display:inline-block" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span class="search_info_open" style="margin-left:0">+</span>
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
                            <el-table-column label="用户编码">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="see(scope.row)">{{tableData[scope.$index].userCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column label="用户名称">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="see(scope.row)">{{tableData[scope.$index].displayName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="phoneNumber" label="手机号"></el-table-column>
                            <el-table-column prop="userGroupName" label="所属用户组"></el-table-column>
                            <el-table-column prop="ouFullname" label="所属组织"></el-table-column>
                            <el-table-column prop="userTypeTValue" label="身份类型"></el-table-column>
                            <el-table-column prop="languageDisplayName" label="语种"></el-table-column>
                            <el-table-column prop="authTypeTValue" label="认证类型"></el-table-column>
                            <el-table-column prop="statusTValue" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.statusTValue=='启用'" style="color:#39CA77;">{{scope.row.statusTValue}}</span>
                                    <span v-else-if="scope.row.statusTValue=='停用'" style="color:#FF6666;">{{scope.row.statusTValue}}</span>
                                    <span v-else>{{scope.row.statusTValue}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="有效日期" width="200">
                                <template slot-scope="scope">
                                    <div class="halfWidth left">
                                        <el-date-picker
                                        format="yyyy.MM.dd"
                                        v-model="tableData[scope.$index].createdTime " 
                                        type="datetime" 
                                        readonly
                                        align="center"
                                        placeholder=""></el-date-picker>
                                    </div>
                                    <span>-</span>
                                    <div class="halfWidth right">
                                        <el-date-picker 
                                        format="yyyy.MM.dd" class="halfWidth"
                                        v-model="tableData[scope.$index].deletedTime" 
                                        type="datetime" 
                                        readonly
                                        align="center"
                                        placeholder=""></el-date-picker>
                                    </div>    
                                </template>
                            </el-table-column>
                            <el-table-column prop="roleString" label="关联角色"></el-table-column>
                            <el-table-column label="操作" fixed="right">
                                 <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="confirmDelThis(scope.row)">删除</el-button>
                                    <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button>
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
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
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
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
                    OuCode: "",//编码
                    Name: "",//名称
                    CompanyOuId:'',//所属公司
                    AreaId: '',//行政地区
                    Status: '',//启用状态
                    OuType: '',//组织类型
                },
                searchDataClick:{},
                tableSearchData:{},
                selectData:{
                    UserType:[],//身份类型
                    Status001:[],//状态
                    userGroupId:[],//用户组
                    languageId:[],//语种
                    roles:[],//角色
                    // ou:[],//组织
                },
               
                tableData:[],

                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                searchBtClick:false,
                ifWidth:true,
                dialogUserDefined:false,//dialog
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
                // _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
                // // 所属组织
                // _this.selectData.ou=res.result;
                // })
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
                _this.$axios.gets('/api/services/app/User/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
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
                    UserGroupId:_this.searchData.UserGroupId,//
                    UserCode: _this.searchData.UserCode,//
                    DisplayName:_this.searchData.DisplayName,//
                    OuId: _this.searchData.OuId,//
                    UserType: _this.searchData.UserType,//
                    LanguageId: _this.searchData.LanguageId,//
                    AuthType: _this.searchData.OuType,
                    Status: _this.searchData.Status,
                    RoleId: _this.searchData.RoleId,
                    Sorting: _this.searchData.Sorting,
                }
                _this.SimpleSearch();
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                 _this.tableLoading=true;
                _this.searchDataClick.SkipCount=(_this.page-1)*_this.oneItem;
                 _this.searchDataClick.MaxResultCount=_this.oneItem;
                _this.$axios.gets('/api/services/app/User/GetAll',_this.searchDataClick)
                .then(function(res){
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableData=res.result.items;
                    _this.tableLoading=false;
                    _this.searchBtClick=false;
                },function(res){
                     _this.tableLoading=false;
                     _this.searchBtClick=false;
                })
            },
            goDetail(){
                this.$store.state.url='/user/userDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            confirm(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    _this.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                    }).then(() => {//确认
                        _this.delRow()
                    }).catch(() => {//取消
                    });
                }   
            },
            delRow(){
                let _this=this;
                for(let i=0;i<_this.multipleSelection.length;i++){
                    _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                    .then(function(res){
                        if(_this.load){
                            _this.loadTableData();
                        }else{
                            _this.SimpleSearch();
                        }
                        _this.open('删除成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('删除失败','el-icon-error','faildERP');
                    })
                }
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
                _this.$nextTick(function(){
                    $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
                })
                    
                // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                //     if($(this).attr('date')==data.id){
                //         $(this).click()
                //     }
                // })
            },
            see(row){
                this.$store.state.url='/user/userModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            confirmDelThis(row){
                let _this=this;
                _this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {//确认
                    _this.delThis(row)
                }).catch(() => {//取消
                });
            },
            delThis(row){//删除行
                let _this=this;
                _this.$axios.deletes('/api/services/app/User/Delete',{id:row.id})
                .then(function(res){
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                },function(res){
                })
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
</style>

<style>
.userList .el-button+.el-button{
    margin-left: 0;
}
.halfWidth.left input{
    text-align: right;
}
.halfWidth.right input{
    text-align: left;
}
</style>