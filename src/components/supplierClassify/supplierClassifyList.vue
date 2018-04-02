<template>
    <div class="supplierClassifyList-wrapper">
        <el-row class="bg-white">
            <!-- 左侧输入框与树形控件 -->
            <el-col :span="5">
                    <el-col class="h48 pl15 pr15" :span="24">
                        <!-- <el-autocomplete
                        v-model="searchLeft"
                        :fetch-suggestions="querySearchAsync"
                        class="search_input"
                        placeholder="搜索..."
                        > -->
                        
                        <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText" 
                        class="search_input">
                        </el-input>
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        <!-- </el-autocomplete> -->
                    </el-col>
                    <el-col :span='24' class="tree-container" >
                        <!-- 树形控件 -->
                         <el-tree
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :highlight-current="true"
                            :data="supplierClasTree"
                            :props="defaultProps"
                            node-key="id"
                            default-expand-all
                            ref="tree2"
                            :expand-on-click-node="false"
                            :filter-node-method="filterNode"
                            @node-click="nodeClick"
                            class="filter-tree"
                            >
                        </el-tree>
                    </el-col>  
            </el-col>
             <!-- dialog是否删除提示(对话框控件) -->
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
            <!-- 右边数据列表 -->
            <el-col :span='19' class="border-left">
                <!-- 按钮组 -->
                <el-row class="h48 pt5">
                    <button @click="goAdd" class="erp_bt bt_add">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>
                    <button @click="delSelected" class="erp_bt bt_del">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div><span class="btDetail">删除</span>
                    </button>
                    <button class="erp_bt bt_in">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导入</span>
                    </button>
                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>
                    <div class="search_input_group">
                        <div class="search_input_wapper">
                            <el-input
                                placeholder="搜索..."
                                class="search_input"
                                v-model="rightKeyword"
                                @change="searchRight"
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
                <!-- 数据列表 -->
                <el-row>
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="classCode" label="供应商分类编码">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="modify(scope.row)">{{tableData[scope.$index].classCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="className " label="供应商分类名称">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].className }}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="classParentName" label="上级供应商分类">
                            </el-table-column>
                            <el-table-column prop="remark" label="备注">
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.status=='1'" style="color:#39CA77;">启用</span>
                                    <span v-else-if="scope.row.status=='0'" style="color:#FF6666;">停用</span>
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
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <!-- <el-button type="text"  @click="modify(scope.row)" >修改</el-button> -->
                                    <el-button type="text"  @click="confirmDelThis(scope.row)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="pageSize"
                        :total="totalCount">
                        </el-pagination> 
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
         name: "supplierClassifyList",
         data(){
             return{
                 ContactOwner:2,//  供应商分类参数(获取所有数据时)
                  // -------树形控件数据
                filterText:'',
                supplierClasTree:[],
                defaultProps:{
                    children: 'childNodes',
                    label: 'className',
                    id: 'id',
                },
                // --------------列表数据
                tableData:[],
                dialogUserConfirm:false,//确认提示框是否显示
                multipleSelection: {},//复选框选中数据
                choseAjax:'',//存储点击单个删除还是多项删除按钮判断信息
                // row:{},//存储用户点击删除条目数据
                 
                //------------分页器参数
                pageSize:10, //每页有多少条数据
                totalCount:0,//总共有多少条数据
                totalPage:0,//总页数
                pageIndex:1,//分页的当前页码
                // ------------
                rightKeyword:'',
                tableLoading:false,
                
             }
         },
         created(){
            this.loadTree();
            this.getDataList();

         },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
         methods:{
            // 提示信息
            open(tittle, iconClass, className) {
                this.$notify({
                    position: "bottom-right",
                    iconClass: iconClass,
                    title: tittle,
                    showClose: false,
                    duration: 3000,
                    customClass: className
                });
            },
           //-----------数据渲染---------------
           getDataList(){
                let _this=this;
                _this.$axios.gets('/api/services/app/ContactClassManagement/GetAllList',{ContactOwner:_this.ContactOwner,SkipCount:(_this.pageIndex-1)*_this.pageSize,MaxResultCount:_this.pageSize}).then(
                    rsp=>{
                        _this.tableData=rsp.result.items;
                        // console.log(rsp.result);
                        _this.totalCount=rsp.result.totalCount;
                        _this.totalPage=Math.ceil(rsp.result.totalCount/_this.pageSize);
                    }
                )
               
                
            },
           //-----------按钮组功能---------------
            goAdd(){ //增加去详情页(detail)
                this.$store.state.url = "/supplierClassify/supplierClassifyDetail/default";
                this.$router.push({ path: this.$store.state.url });
            },
            //------------分页器函数
            handleCurrentChange(val){
                this.pageIndex=val;
                this.getDataList();
            },
            // -------------树形控件
            loadIcon(){//添加文件夹图标
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
            loadTree(){//获取树形控件数据
                let _this=this;
                _this.$axios.gets('/api/services/app/ContactClassManagement/GetTreeList',{Ower:2}).then(
                    rsp=>{
                    // console.log(rsp);
                     _this.supplierClasTree=rsp;
                    // console.log(_this.supplierClasTree)
                    _this.loadIcon();
               })
            },
            nodeClick(data){//点击树形控件节点时的回调
                let _this=this;
                // console.log(data);
                _this.$axios.gets('/api/services/app/ContactClassManagement/GetDataList',{inputId:data.id}).then(
                    rsp=>{
                    // console.log(rsp);
                     _this.tableData=rsp.result;
               })
            },
            getSonNode(data) {//获取树形节点子节点
                let _this=this;
                // console.log(data);
                _this.$axios.gets('/api/services/app/ContactClassManagement/GetDataList',{inputId:data.id}).then(
                    rsp=>{
                    // console.log(rsp);
                     _this.tableData=rsp.result;
               })
            },
            filterNode(value, data) {//过滤节点
                // console.log(value);
                // console.log(data);
                if (!value) return true;
                return data.className.indexOf(value) !== -1;
                // this.nodeClick(data);
            },       
            // ------------- 删除功能
            confirmDelThis(row){//确认单项删除
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
                    _this.delSelected()
                }
            },
            delThis(row){//单项删除
                let _this=this;
                _this.$axios.deletes('/api/services/app/ContactClassManagement/Delete',{id:_this.row.id})
                .then(function(res){
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.getDataList();
                },function(res){
                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                    _this.open('删除失败','el-icon-error','faildERP');
                })
            },
            delSelected(){//多项删除
                let _this=this;
                _this.choseAjax='rows'
                if(_this.multipleSelection.ids.length>0){
                _this.dialogUserConfirm=true;
                }
            },
            delRow(){// 按钮删除(批量删除)
                let _this = this;
                // console.log(_this.multipleSelection);
                this.$axios
                    .posts(
                    "/api/services/app/ContactClassManagement/BatchDelete",
                    _this.multipleSelection
                    )
                    .then(res => {
                    if (!res.success) {
                         _this.open("删除失败", "el-icon-error", "faildERP");
                    }
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.getDataList();
                    });
            },
            handleSelectionChange(arr1){
                let _this = this;
                _this.multipleSelection.ids = [];
                for (let val of arr1) {
                    _this.multipleSelection.ids.push(val.id);
                }
                // _this.isTrue=false;
                // console.log(_this.multipleSelection);
            },
            // -------------修改
            modify(row){
                // console.log(row.id)
                this.$store.state.url = "/supplierClassify/supplierClassifyModify/" + row.id
                this.$router.push({ path: this.$store.state.url })
            },
           searchRight (){//右边搜索
                let _this=this;
                _this.$axios.gets('/api/services/app/ContactClassManagement/GetSearch',{inputName:_this.rightKeyword}).then(
                    rsp=>{
                        _this.tableData=rsp.result
                        // console.log(rsp.result);
                        // _this.totalCount=rsp.result.totalCount;
                        // _this.totalPage=Math.ceil(rsp.result.totalCount/_this.pageSize);
                    }
                )

            },
            // -------------            
            
            querySearchAsync(){},
           
            
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
        min-height: 380px;
    }
</style>