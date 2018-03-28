<template>
    <div class="adstrArea-wrapper">
        <el-row class="bg-white">
            <!-- 左侧输入框与树形控件 -->
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
                    <el-col :span='24' class="tree-container" >
                        <el-tree
                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                        :highlight-current="true"
                        :data="adminAreaTree"
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
                    <button @click="confirmDelSelected" class="erp_bt bt_del" :disabled="isTrue">
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
                </el-row>
                <!-- dialog自定义弹窗 -->
                <!-- <el-dialog :visible.sync="dialogUserDefined" class="dialogUserDefined">
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
                </el-dialog> -->
                <!-- dialog -->
                <!-- 数据列表 -->
                <el-row>
                    <el-col :span='24'>
                        <el-table  :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="areaCode" label="行政地区编码">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="modify(scope.row)">{{tableData[scope.$index].areaCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="areaName" label="行政地区名称">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].areaName}}</el-button>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column prop="manager" label="负责人"></el-table-column> -->
                            <el-table-column prop="areaParentId_AreaName" label="上级行政地区"></el-table-column>
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
                        background layout="total,prev, pager, next,jumper" 
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
        name:'adminstrAreaList',
        data(){
            return{
                treeLoading:false,// 树形控件的动态加载效果
                tableLoading:false,// 表格的动态加载效果
                searchKey:'',
                SkipCount:0,
                MaxResultCount:10,                
                pageSize:10, //每页有多少条数据
                totalCount:0,//总共有多少条数据
                totalPage:0,//总页数
                pageIndex:1,//分页的当前页码
                searchLeft:'',
                tableData:[],
                adminAreaTree:[],
                defaultProps: {
                    children: 'childItems',
                    label: 'areaName',
                    id:'id'
                },
                selectedIds: {}, //复选框选中数据
                restaurants:[],
                isTrue:true,//批量删除键能否点击
                // tableData:{
                //     areaCode:'',
                //     areaName :'',
                //     areaName :'',//负责人
                //     remark:'',
                //     createdBy:'',
                //     createdTime:'',
                //     status :0,
                // },//所有数据
            }
            
        },
        watch: {
            searchLeft(val) {
                this.$refs.tree.filter(val);
            }
        },
        created(){
             this.getDataList();
             this.loadTree();
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
            // 获取所有列表数据
            getDataList(){
                let _this=this;
                _this.$axios.gets('/api/services/app/AdAreaManagement/GetListByCondition',{nodeId:0,SearckKey:_this.searchKey,SkipCount:(_this.pageIndex-1)*_this.pageSize,MaxResultCount:_this.pageSize}).then(
                    rsp=>{
                        // console.log(rsp.result);
                        _this.tableData=rsp.result;
                        _this.totalCount=rsp.result.totalCount;
                        _this.totalPage=Math.ceil(rsp.result.totalCount/_this.oneItem);
                    }
                )
                
            },
            // ----------树形控件的处理函数开始----------
                // 获取树形节点
                loadTree(){
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('/api/services/app/AdAreaManagement/GetTree')
                    .then(function(res){
                            // console.log(res.result);
                            _this.adminAreaTree=res.result;
                            _this.loadIcon();
                            _this.treeLoading=false;
                    },function(res){
                        _this.treeLoading=false;
                    })
                },
                // 复选框中选中的数据(用于做批量删除)
                handleSelectionChange: function(arr1) {
                    let _this = this;
                    _this.selectedIds.ids = [];
                    for (let val of arr1) {
                        _this.selectedIds.ids.push(val.id);
                    }
                    _this.isTrue=false;
                    // console.log(_this.selectedIds);
                },
                // 节点被点击时的回调
                nodeClick(data){
                    // console.log(data);
                    let _this=this;
                    _this.tableLoading=true;
                    _this.$axios.gets('/api/services/app/AdAreaManagement/GetListByCondition',{nodeId:data.id,SkipCount:(_this.pageIndex-1)*_this.pageSize,MaxResultCount:_this.pageSize})
                    .then(function(res){
                        _this.tableData=res.result;
                        _this.totalCount=res.result.totalCount;
                        _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                        _this.tableLoading=false;
                        },function(res){
                        _this.tableLoading=false;
                    })
                },
                // 在搜索框输入关键字过滤节点
                filterNode(value, data) {
                if (!value) return true;
                 return data.areaName.indexOf(value) !== -1;
                },
                // 文件夹图标加载
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
            // ----------树形控件的处理函数结束----------
            // ----------分页器的处理函数结束----------
            handleCurrentChange(){},
            // ----------分页器的处理函数结束----------
           
            // 左边搜索框
            leftSearch(){},
            // 按钮增加----去新增详情页(detail)
            goAdd(){
                //点击切换路由去添加
                this.$store.state.url = "/adminstrArea/adminstrAreaDetail/default";
                this.$router.push({ path: this.$store.state.url });
            },
            // 按钮删除---删除选择项(批量删除)
            delSelected: function() {
                    let _this = this;
                    this.$axios
                        .posts(
                        "/api/services/app/AdAreaManagement/BatchDelete",
                        _this.selectedIds
                        )
                        .then(res => {
                        if (!res.success) {
                            _this.open("删除失败", "el-icon-error", "faildERP");
                        }
                        _this.open("删除成功", "el-icon-circle-check", "successERP");
                        _this.getDataList();
                        });
                },
            // 确认是否按钮删除(删除选中的----批量删除)
            confirmDelSelected: function() {
                let _this = this;
                _this
                    .$confirm("确定删除?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    center: true
                    })
                    .then(() => {
                    //确认
                    _this.delSelected();
                    })
                    .catch(() => {
                    //取消
                    });
            },
            // 行内删除
            delRow(row){
                this.$axios
                .deletes("/api/services/app/AdAreaManagement/Delete", { id: row.id })
                .then(rsp => {
               this.getDataList();
                this.open("删除成功", "el-icon-circle-check", "successERP");
                });
            },
            // 确认是否删除本条数据
            confirmDelThis: function(row) {
                let _this = this;
                _this
                    .$confirm("确定删除?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    center: true
                    })
                    .then(() => {
                    //确认
                    _this.delRow(row);
                    })
                    .catch(() => {
                    //取消
                    _this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                    });
            },
            // （行内按钮查看）查看详情
            modify: function(row) {
                // console.log(row.id)
                this.$store.state.url = "/adminstrArea/adminstrAreaModify/" + row.id
                this.$router.push({ path: this.$store.state.url })
            },
            
            //右边搜索框
            rightSearch(){},
           


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


