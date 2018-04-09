<template>
    <div class="bAreaListForm">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-col class="h48 pl15 pr15" :span="24">
                    <el-autocomplete
                    v-model="searchLeft"
                    :fetch-suggestions="querySearchAsync"
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete>
                </el-col>
                <el-col :span='24' class="tree-container" id="areaTree">
                    <el-tree
                    oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                    v-loading="treeLoading" 
                    :highlight-current="true"
                    :data="componyTree"
                    :props="defaultProps"
                    node-key="id"
                    default-expand-all
                    ref="tree"
                    :expand-on-click-node="false"
                    :filter-node-method="filterNode"
                    @node-click="nodeClick"
                    >
                    </el-tree>
                </el-col>   
            </el-col>
            <el-col :span='19' class="border-left" id="areaTable">
                <el-row class="h48 pt5">
                    <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button @click="confirm" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
                    <button class="erp_bt bt_out">
                        <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                        <span class="btDetail">导出</span>
                    </button>
                    <!-- <input @keyup.enter="submitSearch" type="text"> -->
                    <div class="search_input_group">
                        <div class="search_input_wapper" @keyup.enter="submitSearch">
                            <el-input
                                placeholder="搜索..."
                                class="search_input"
                                v-model="SearchKey"
                                >
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                        <div class="search_button_wrapper" @click="dialogUserDefined = true">
                            <button class="userDefined">
                                <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                            </button>
                        </div>
                    </div>
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
                            <el-table-column label="序号" fixed="left">
                                 <template slot-scope="scope">
                                    {{scope.$index + 1}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="field" label="字段" fixed="left"></el-table-column>
                            <el-table-column prop="field" label="操作" fixed="left">
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
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="areaCode" label="业务地区编码">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="modify(scope.row)">{{tableData[scope.$index].areaCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="areaName" label="业务地区名称">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].areaName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="manager" label="负责人"></el-table-column>
                            <el-table-column prop="areaParentId_AreaName" label="上级业务地区"></el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.status=='1'" style="color:#39CA77;">启用</span>
                                    <span v-else-if="scope.row.status=='0'" style="color:#FF6666;">停用</span>
                                    <span v-else >冻结</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="createdBy" label="创建人"></el-table-column>
                            <el-table-column label="创建时间">
                                <template slot-scope="scope">
                                    <el-date-picker 
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" 
                                    v-model="tableData[scope.$index].createdTime" 
                                    type="datetime" 
                                    readonly
                                    align="center"
                                    placeholder=""></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" fixed="right">
                                 <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)" >修改</el-button>
                                    <el-button type="text"  @click="confirmDelThis(scope.row)" >删除</el-button>
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
                            <vue-scroll :ops="$store.state.option">
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
        name:'customerInfor',
        data(){
            return {
                SearchKey:'',//查询条件：地区名称/地区编码模糊查询关键字
                // 错误信息提示开始
                detail_message_ifShow:false,
                errorMessage:false,
                // 错误信息提示结束
 //--------------确认删除开始-----------------               
                dialogUserConfirm:false,//用户删除保存提示信息
                row:{},//存储用户点击删除条目数据
                choseAjax:'',//存储点击单个删除还是多天删除按钮判断信息
                multipleSelection: [],//复选框选中数据
//--------------确认删除开始-----------------    
                searchLeft:'',
                timeout:null,
                restaurants:[],
                 areaTypes: [{//业务地区分类
                    value:'1',
                    label: '业务地区'
                }, {
                    value:'2',
                    label: '行政地区'
                }],
                tableData:[],
                componyTree:  [
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children: 'childItems',
                    label: 'name',
                    id:'id'
                },
                TreeContextMenu:[//点击鼠标右键生成菜单
                ],
                pageIndex:0,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:'loadTableData',
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:false,
                Sorting:'',//table搜索
                dialogFormVisible:false,
                AreaType:1,//树形图的地区分类(1.业务地区.2行政地区)
                isAdd:true,//判断是增加还是修改
                tittle:'',//模态框tittle
                showParent:true,//上级组织单元是否可选
                dialogUserDefined:false,//dialog

                detailParentId:'default',//tree节点点击获取前往detail新增页上级业务地区ID
                detailParentName:'default',//tree节点点击获取前往detail新增页上级业务地区name
                ouId:'default',//tree节点点击获取前往detail新增页组织id
                response:{
                    details:'',
                    message:'',
                },
                nodeClickId:0,//点击节点纪录id
            }
        },
        created:function(){       
            let _this=this;
            _this.loadTableData();
            _this.loadTree();
        },
        mounted:function(){
            let _this=this;
            
        },  
        watch: {
            searchLeft(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods:{
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
                 _this.ajaxTable({SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},'loadTableData');
              
            },
            ajaxTable(data,event){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/OpAreaManagement/GetListByCondition',data).then(function(res){ 
                    _this.restaurants=[]
                    _this.load=event;
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount;
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    if(_this.tableData==[]){
                        _this.pageIndex=0
                    }
                    $.each(res.result.items,function(index,value){
                        let item={'value':value.areaName,'id':value.id};
                        _this.restaurants.push(item)
                    })
                    },function(res){
                    _this.tableLoading=false;
                })
            },
            loadTree(){
                let _this=this;
                _this.treeLoading=true;
                _this.$axios.gets('/api/services/app/OpAreaManagement/GetTree')
                .then(function(res){
                    _this.componyTree=res.result
                    _this.treeLoading=false;
                    _this.loadIcon();
                    _this.$nextTick(function(){
                        _this.getHeight()
                    })
               },function(res){
                   _this.treeLoading=false;
                   _this.$nextTick(function(){
                        _this.getHeight()
                    })
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
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load=="loadTableData"){
                      _this.ajaxTable({SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},'loadTableData');
                 }else if(_this.load=="nodeClick"){
                     _this.ajaxTable({ParentId:_this.nodeClickId,SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},"nodeClick");
                 }else if(_this.load=="submitSearch"){
                    _this.ajaxTable({SearchKey:_this.SearchKey,SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},"submitSearch");
                 }
            },
            getHeight(){
                $("#area").css({
                    minHeight:$('.bAreaListForm .bg-white').css('height')
                })
                $("#areaTable").css({
                    minHeight:$('.bAreaListForm .bg-white').css('height')
                })
            },
            goDetail(){
                let _this=this;
                if(typeof(_this.detailParentId)=='number'){
                        _this.$store.state.url='/businessArea/businessAreaDetail/'+[_this.detailParentId,_this.ouId,_this.detailParentName];
                        _this.$router.push({path:this.$store.state.url})//点击切换路由
                    
                }else{
                    _this.$store.state.url='/businessArea/businessAreaDetail/default'
                    _this.$router.push({path:this.$store.state.url})//点击切换路由
                }
                 
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
            delRow(){//多项删除
                let _this=this;
                let data={
                    "createList": [],
                    "updateList": [],
                    "deleteList": _this.multipleSelection
                }
                _this.$axios.posts('/api/services/app/OpAreaManagement/CUDAggregate',data)
                .then(function(res){
                     _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                        _this.loadTableData();
                        _this.loadTree();
                },function(res){
                    if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                    
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                })
            },
            delThis(){//单项删除
                let _this=this;
                _this.$axios.deletes('/api/services/app/OpAreaManagement/Delete',{id:_this.row.id})
                .then(function(res){
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                    _this.loadTree();
                },function(res){
                    if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                })
            },
            nodeClick(data){
                let _this=this;
                _this.page=1
                if(data.areaName!=undefined){
                    _this.nodeClickId=data.id;
                    // _this.detailParentId=0;
                    _this.detailParentId=data.id;
                    _this.detailParentName=data.name;
                    // _this.detailOuName=data.ouName;
                }else{  
                     _this.nodeClickId=data.ouId;
                    _this.detailParentId=0;
                    _this.detailParentName="无";
                    
                }
                _this.tableLoading=true;
                // _this.detailParentId=data.id;
                // _this.detailParentName=data.name;
                _this.ouId=data.ouId;
                _this.ajaxTable({ParentId:_this.nodeClickId,SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},"nodeClick");
            },
            modify(row){
                this.$store.state.url='/businessArea/businessAreaModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
            filterNode(value, data) {
                if (!value) return true;
                 return data.name.indexOf(value) !== -1;
            },
            
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                cb(results);
                }, 100 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            submitSearch(){
                let _this=this;
                _this.page=1
                 _this.ajaxTable({SearchKey:_this.SearchKey,SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem},"submitSearch");
            }
        },
    }
</script>

<style scoped>
.error_tips{
    height: 15px;
    line-height: 15px;
    color: #f66;
}
.dialogBtn{
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    background-color: #fff;
    color: #c9c9c9;
    border: none;
    border-top: 1px solid #c9c9c9;
    outline: none;
    cursor: pointer;
}
.dialogBtn:focus{
    outline: none;
}
.dialog-footer .dialogBtn:first-child{
   border-right: 1px solid #c9c9c9;
}
.dialog-footer{
    padding:0;
    height: 50px;
}
.dialogBtn:hover{
     color: #6699FF;
}
.TreeMenu{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
}
.TreeMenu button{
    display: block;
    width: 100%;
    height: calc(100% / 3);
}
.formSearch{
    float: right;
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
.pl15{
    padding-left: 15px;
}
.pr15{
    padding-right: 15px;
}
.pt5{
    padding-top: 5px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
</style>

<style>
.bAreaListForm .el-button+.el-button{
    margin-left: 0;
}
.bAreaListForm .el-dialog__footer{
    padding:0;
}
.bAreaListForm .areaDialog .bgcolor:first-child{
    margin-top:15px;
}
.bAreaListForm .bgcolor{
    margin-bottom: 0
}
</style>