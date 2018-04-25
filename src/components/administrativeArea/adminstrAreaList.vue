 <template>
    <div class="adstrArea-wrapper">
        <el-row class="bg-white">
            <!-- 左侧输入框与树形控件 -->
            <el-col :span="5">
                    <el-col class="h48 pl15 pr15" :span="24">
                         <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText" 
                        class="search_input">
                        </el-input>
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-col>
                    <!-- 树形控件 -->
                    <el-col :span='24' class="tree-container" id="adminTree">
                        <!-- <el-tree
                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                        :highlight-current="true"
                        :data="adminAreaTree"
                        :props="defaultProps"
                        :default-expanded-keys="expandId"
                        node-key="id"
                        ref="tree2"
                        :expand-on-click-node="false"
                        :filter-node-method="filterNode"
                        @node-click="nodeClick"
                        class="filter-tree"
                        > -->
                        <vue-scroll :ops="$store.state.option">
                        <el-tree
                        :render-content="renderContent_componyTree"
                        :highlight-current="true"
                        :data="adminAreaTree"
                        :props="defaultProps"
                        node-key="id"
                        :default-expanded-keys="expandId"
                        ref="tree2"
                        :expand-on-click-node="false"
                        :filter-node-method="filterNode"
                        @node-click="nodeClick"
                        >
                        </el-tree>
                        </vue-scroll>
                    </el-col>   
            </el-col>
            
            <!-- 右边数据列表 -->
            <el-col :span='19' class="border-left" id="adminTable">
                <!-- 按钮组 -->
                <el-row class="h48 pt5 fixed colorWhite" >
                    <button @click="goAdd" class="erp_bt bt_add">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>
                    <button @click="confirm" class="erp_bt bt_del">
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
                                v-model="searchKey" 
                                @change="searchRight"
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
                        background layout="total,prev, pager, next" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="pageSize"
                        :total="totalCount">
                        </el-pagination>  
                    </el-col>
                </el-row>
                
            </el-col>
            <!-- ************************************************** -->
            <!-- dialog确认是否删除提示 -->
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
            <!-- 数据提交有误的数据提示框 -->
            <submitError :submitData="submitData"></submitError>
        </el-row>

    </div>
</template>

 <script>
    import submitError from '../Common/submitError';
    export default {
        name:'adminstrAreaList',
        data(){
            return{
                submitData:{//数据提交有误的提示参数
                    submitErrorMessage:false,
                    detail_message_ifShow: false,
                    response: {
                        details: "",
                        message: "",
                        validationErrors: []
                    },
                },
                treeLoading:false,// 树形控件的动态加载效果
                tableLoading:false,// 表格的动态加载效果
                searchKey:'',
                SkipCount:0,
                MaxResultCount:10,                
                pageSize:10, //每页有多少条数据
                totalCount:0,//总共有多少条数据
                totalPage:0,//总页数
                pageIndex:1,//分页的当前页码
                tableData:[],
                // --------------------------树形控件数据
                height:'0px',
                adminAreaTree:[],
                defaultProps: {
                    children: 'childItems',
                    label: 'areaName',
                    id:'id'
                },
                filterText:'',
                nodeId:0,
                expandId:[],//默认展开的树节点
                // 错误信息提示开始
                detail_message_ifShow:false,
                // errorMessage:false,
                // 错误信息提示结束
                //--------------确认删除开始-----------------               
                dialogUserConfirm:false,//用户删除保存提示信息
                row:{},//存储用户点击删除条目数据
                choseAjax:'',//存储点击单个删除还是多项删除按钮判断信息
                multipleSelection: {},//复选框选中数据
                //--------------确认删除开始-----------------  
                // selectedIds: {}, //复选框选中数据
                // restaurants:[],
                // isTrue:true,//批量删除键能否点击
                //--------------新增页默认上级地区的参数-----------------
                detailParentId:'',//tree节点点击获取前往detail新增页上级菜单ID
                detailParentName:'',//tree节点点击获取前往detail新增页上级菜单name
               

                
            }
            
        },
        created(){
             this.getDataList();
             this.loadTree();
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        methods:{
            // -----------------------提示信息
            open(tittle, iconClass, className) {//成功提示框
                    this.$notify({
                        position: "bottom-right",
                        iconClass: iconClass,
                        title: tittle,
                        showClose: false,
                        duration: 3000,
                        customClass: className
                    });
            },
            getErrorMessage(message,details,validationErrors){//将rsp的值赋值给response对象 
                let _this=this;
                _this.submitData.response.message='';
                _this.submitData.response.details='';
                _this.submitData.response.validationErrors=[];
                if(details!=null && details){
                    _this.submitData.response.details=details;
                }
                if(message!=null && message){
                    _this.submitData.response.message=message;
                }
                if(message!=null && message){
                    _this.submitData.response.validationErrors=validationErrors;
                }
            },
            getDataList(){// 获取所有列表数据
                let _this=this;
                _this.$axios.gets('/api/services/app/AdAreaManagement/GetListByCondition',{nodeId:_this.nodeId,SearckKey:_this.searchKey,SkipCount:(_this.pageIndex-1)*_this.pageSize,MaxResultCount:_this.pageSize}).then(
                    rsp=>{
                        _this.tableData=rsp.result.items;
                        // console.log(rsp.result);
                        _this.totalCount=rsp.result.totalCount;
                        _this.totalPage=Math.ceil(rsp.result.totalCount/_this.pageSize);
                        _this.$nextTick(function(){
                            // console.log('1314');
                            _this.getHeight()
                        })
                    },
                    rsp=>{
                        _this.getHeight()
                    },

                )
               
                
            },
            getHeight(){
                 $(".tree-container").css({
                    height:parseInt($('.border-left').css('height'))-48+'px'
                })
                $(".border-left").css({
                    height:$('.bg-white').css('height')
                })
            },
            // ----------树形控件的处理函数开始----------
            defauleExpandTree(data,key){
                if(typeof(data[0])!='undefined'
                && data[0]!=null 
                && typeof(data[0][key])!='undefined'
                && data[0][key]!=null
                && data[0][key]!=''){
                    return [data[0][key]]
                }
            },  
            renderContent_componyTree(h, { node, data, store }){
              if(typeof(data.childItems)!='undefined' && data.childItems!=null && data.childItems.length>0){
                  return (
                      <span class="el-tree-node__label" data-id={data.id}>
                      <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                          {data.areaName}
                      </span>
                  );
              }else{
                  return (
                      <span class="el-tree-node__label" data-id={data.id}>
                      <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                          {data.areaName}
                      </span>
                  );
              }
            },
            loadTree(){// 获取树形节点
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('/api/services/app/AdAreaManagement/GetTree')
                    .then(function(res){
                            // console.log(res.result);
                            // for(let i in res.result){
                            //     _this.adminAreaTree[0].childItems=res.result;
                            // }
                            // console.log(_this.adminAreaTree);
                           _this.adminAreaTree=res.result
                           _this.expandId=_this.defauleExpandTree(res.result,'id')
                            // _this.loadIcon();
                            _this.treeLoading=false;
                    },function(res){
                        _this.treeLoading=false;
                    })
            },               
                //复选框中选中的数据(用于做批量删除)
                handleSelectionChange: function(arr1) {
                    let _this = this;
                    _this.multipleSelection.ids = [];
                    for (let val of arr1) {
                        _this.multipleSelection.ids.push(val.id);
                    }
                    // _this.isTrue=false;
                    // console.log(_this.multipleSelection);
                },
                nodeClick(data){// 节点被点击时的回调
                    // console.log(data);
                    let _this=this;
                    _this.detailParentName=data.areaName;
                    _this.detailParentId=data.id;
                    _this.tableLoading=true;
                    _this.$axios.gets('/api/services/app/AdAreaManagement/GetListByCondition',{nodeId:data.id,SkipCount:(_this.pageIndex-1)*_this.pageSize,MaxResultCount:_this.pageSize})
                    .then(function(res){
                        // console.log(res.result);
                        _this.tableData=res.result.items;
                        _this.totalCount=res.result.totalCount;
                        _this.totalPage=Math.ceil(res.result.totalCount/_this.pageSize);
                        _this.tableLoading=false;
                        },function(res){
                        _this.tableLoading=false;
                    })
                },
                // 在搜索框输入关键字过滤节点
                filterNode(value, data) {// 在搜索框输入关键字过滤节点
                    if (!value) return true;
                    return data.areaName.indexOf(value) !== -1;
                },
                loadIcon(){// 文件夹图标加载
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
            // createStateFilter(queryString) {
            //     return (state) => {
            //     return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            //     };
            // },
            leftSearch(){// 左边搜索框
            },
            // ----------分页器的处理函数结束----------------------------
            handleCurrentChange(val){
                // console.log(val);
                this.pageIndex=val;
                this.getDataList();
            },
            // ----------分页器的处理函数结束----------
           
            // 按钮增加----去新增详情页(detail)
            goAdd(){ //点击切换路由去添加
                // this.$store.state.url = `/adminstrArea/adminstrAreaDetail/default`;
                // this.$router.push({ path: this.$store.state.url});
                // this.$router.push({  name:'adminstrAreaDetail',params: {upParentId:this.upParentId,upAreaName:this.upAreaName}});
                let _this=this;
                if(typeof(_this.detailParentId)=='number'){
                    _this.$store.state.url='/adminstrArea/adminstrAreaDetail/'+_this.detailParentId
                    _this.$router.push({path:this.$store.state.url})//点击切换路由
                    
                }else{
                    _this.$store.state.url='/adminstrArea/adminstrAreaDetail/default'
                    _this.$router.push({path:this.$store.state.url})//点击切换路由
                }
            },
            
            // （行内按钮查看）查看详情
            modify: function(row) {
                // console.log(row.id)
                this.$store.state.url = "/adminstrArea/adminstrAreaModify/" + row.id
                this.$router.push({ path: this.$store.state.url })
            },
            
            //右边搜索框
            searchRight(){
                this.getDataList();
            },
            // -----------------------删除功能
            delRow() {// 按钮删除---删除选择项(批量删除)
                    let _this = this;
                    // console.log(_this.multipleSelection);
                    this.$axios
                        .posts(
                        "/api/services/app/AdAreaManagement/BatchDelete",
                        _this.multipleSelection
                        )
                        .then(rsp => {
                            // if (!res.success) {
                            //     _this.open("删除失败", "el-icon-error", "faildERP");
                            // }
                            _this.dialogUserConfirm=false;
                            _this.open('删除成功','el-icon-circle-check','successERP');
                            _this.getDataList();
                            _this.loadTree();
                        },rsp=>{
                            _this.dialogUserConfirm=false;
                            // console.log(rsp);
                            if(rsp && rsp!=''){ 
                                _this.getErrorMessage(rsp.error.message,rsp.error.details,rsp.error.validationErrors)
                            }
                            _this.submitData.submitErrorMessage=true;
                        }
                        );
            },
            confirm(){//确认是否多项删除
                let _this=this;
                _this.choseAjax='rows'
                if(_this.multipleSelection.ids.length>0){
                _this.dialogUserConfirm=true;
                }
            },
            confirmDelThis(row){//确认是否单项删除
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
            delThis(){//单项删除
                let _this=this;
                _this.$axios.deletes('/api/services/app/AdAreaManagement/Delete',{id:_this.row.id})
                .then(rsp=>{
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.getDataList();
                    _this.loadTree();
                },rsp=>{
                    _this.dialogUserConfirm=false;
                    // console.log(rsp);
                    if(rsp && rsp!=''){ 
                        _this.getErrorMessage(rsp.error.message,rsp.error.details,rsp.error.validationErrors)
                    }
                    _this.submitData.submitErrorMessage=true;
                })
            },
            // -----------------------删除功能完

        },
        components:{
            submitError,
        },

    }
</script>

 <style scoped>
    .colorWhite{
        background-color: #fff;
    }
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


