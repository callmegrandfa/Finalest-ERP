 <template>
    <div class="count-wrapper" style="float:left;background:#fff;width:100%;">
        <!-- 左边搜索栏 -->
        <el-col :span="ifWidth?5:0" v-show="ifWidth" class="bgWhite" id="bg-white">
            <!-- 头部查询 -->
            <el-row class="h48 topSearch" id="left-box">
                    <el-col :span="18" class="pl10">
                        <img src="../../../static/image/common/search_btn.png">
                        <span class="topSearch">查询</span>
                    </el-col>
                    <el-col :span="5">
                        <div class="circle" @click="closeLeft"><span class="circleContent">-</span></div>
                    </el-col>
            </el-row>
            <!-- 查询 -->
            <el-row style="margin-top:20px">
                <el-form ref="searchList" :model="searchList" label-width="80px"  class="formWidth">
                    <el-form-item label="单位编码">
                        <el-input v-model="searchList.unitCode" ></el-input>
                    </el-form-item>
                    <el-form-item label="单位名称" >
                        <el-input v-model="searchList.unitName"></el-input>
                    </el-form-item>
                    <el-form-item label="基本单位">
                        <el-select v-model="searchList.IsBase" placeholder="">
                            <el-option label="否" value="0"></el-option>
                            <el-option label="是" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="searchList.Status" placeholder="">
                            <el-option label="未启用" value="0"></el-option>
                            <el-option label="启用" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="searchLeft">查询</el-button>
                    </el-form-item>
                </el-form>

            </el-row>
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
        <!-- 右边部分 -->
        <el-col :span="ifWidth?19:24">
            <div class="leftBox">
                <el-row class="h48">
                     <el-col :span='2' class="search-block"  v-show="!ifWidth">
                         <div @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                            <span>查询</span>
                             <span @click="openLeft">+</span>
                        </div>
                    </el-col>
                    <!-- 按钮 -->
                    <el-col :span="22" class="h48">
                        <el-row class="h48">
                                <el-col :span="18" class="pt5">
                                        <button @click="add" class="erp_bt bt_add" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_add.png">
                                            </div>
                                            <span class="btDetail">新增</span>
                                        </button>
                                        <button @click="cancel" class="erp_bt bt_cancel" v-show="isEdit">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_cancel.png">
                                            </div>
                                            <span class="btDetail">取消</span>
                                        </button>


                                        <button @click="save" class="erp_bt bt_save" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_save.png">
                                            </div>
                                            <span class="btDetail">保存</span>
                                        </button>


                                        <button class="erp_bt bt_del" @click="delNode" :disabled="nodeId==-1">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_del.png">
                                            </div>
                                            <span class="btDetail">删除</span>
                                        </button>
                                        
                                        <button class="erp_bt bt_out">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_inOut.png">
                                            </div>
                                            <span class="btDetail">导出</span>
                                        </button>

                                        <button class="erp_bt bt_start">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_start.png">
                                            </div>
                                            <span class="btDetail">启用</span>
                                        </button>

                                        <button class="erp_bt bt_stop">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_stop.png">
                                            </div>
                                            <span class="btDetail">停用</span>
                                        </button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row> 
                <el-row class="bgColor">
                    <!-- 树形控件 -->
                    <el-col :span="6">
                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                             :data="countTree"
                             :props="defaultProps"
                             node-key="id"
                             default-expand-all
                             ref="tree"
                             :expand-on-click-node="false"
                             :filter-node-method="filterNode"
                             @node-click="nodeClick">
                        </el-tree>
                    </el-col>
                    <el-col :span="18">
                        <!--右边表单 -->
                        <div class="bgcForm">
                            <el-form  ref="formData" :model="formData" label-width="80px" class="rightForm">
                                <el-form-item label="单位编码">
                                    <el-input v-model="formData.unitCode" @change="edit"></el-input>
                                </el-form-item>
                                <el-form-item label="单位名称">
                                    <el-input @change="edit" v-model="formData.unitName"></el-input>
                                </el-form-item>
                                <el-form-item label="状态">
                                    <el-select @change="edit" v-model="formData.status" placeholder="">
                                        <el-option label="未启用" :value="0"></el-option>
                                        <el-option label="启用" :value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item>
                                    <el-checkbox @change="edit" v-model="formData.isBase">基本单位</el-checkbox>
                                </el-form-item>
                            </el-form>
                        </div>
                        
                        <div class="collapseBgc">
                            <!-- 折叠面板 -->
                            <el-collapse v-model="activeNames">
                                <el-collapse-item  name="1" class="bgColor">
                                     <template slot="title">
                                        <button class="btnBorder">多单位</button>
                                    </template>
                                    <!-- 按钮 -->
                                    <el-row class="btnHeight bgColor">
                                        <button class="erp_bt bt_save" @click="addRow">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/increment.png">
                                            </div>
                                            <span class="btDetail">增行</span>
                                        </button>
                                        <button class="erp_bt bt_cancel" @click="delSelected">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/eraseline.png">
                                            </div>
                                            <span class="btDetail">删行</span>
                                        </button>
                                    </el-row>
                                    <!-- 表格 -->
                                    <el-row class="tableSize">
                                        <el-table stripe class="bgColor" :data="tableList" border @selection-change="handleSelectionChange" style="width: 100%">
                                            <el-table-column type="selection"></el-table-column>
                                            <el-table-column prop="destUnitId" label="多单位">
                                                <template slot-scope="scope">
                                                     <el-select  v-model="scope.row.destUnitId">
                                                         <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                                                        :data="countTableTree"
                                                        :props="defaultProps"
                                                        node-key="id"
                                                        default-expand-all
                                                        ref="tree"
                                                        :expand-on-click-node="false"
                                                        :filter-node-method="filterNode"
                                                        @node-click="TableClick">
                                                        </el-tree>
                                                        <el-option v-show="false" :key="count.Id" :label="count.unitName" :value="count.Id"   id="countTbale_confirmSelect">
                                                        </el-option>
                                                    </el-select>
                                                </template>
                                            </el-table-column>
                                            <el-table-column prop="factor" label="系数" width="180">
                                               <template slot-scope="scope">
                                                    <el-input v-model="scope.row.factor"></el-input>
                                                </template>
                                            </el-table-column>
                                            <el-table-column prop="remark" label="备注" width="180">
                                                <template slot-scope="scope">
                                                    <el-input v-model="scope.row.remark"></el-input>
                                                </template>
                                            </el-table-column>
                                            <el-table-column  label="操作">
                                                <template slot-scope="scope">
                                                    <el-button type="text"  @click="confirmDelThis(scope.row)" >删除</el-button>
                                                    <el-button type="text"  @click="saveRow(scope.row)" >保存</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-row>
                                </el-collapse-item>                               
                            </el-collapse>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </div>
</template>
<script>
    export default {
        name:'countList',
        data(){
            return {
                ifWidth:true,
                nodeId:-1,
                isAdd:false,//是否新增
                isEdit:false,//是否编辑
                activeNames:['1'],//折叠面板的默认激活状态
                // --------------左侧搜索框数据
                searchList:{ 
                    unitCode:'',
                    unitName:'',
                    IsBase:'',
                    Status:'',
                },
                // -------树形控件数据
                countTree: [
                    // { label: '计量单位',children: [
                    //     {label: '个'},
                    //     {label: '箱'}]
                    // },
                    ],
                defaultProps: {
                    children: 'children',
                    label: 'unitName',
                    id: 'id',
                },
                //---------------- 按钮组参数
                addList:{//增加所需参数
                    groupId: 0,
                    unitCode: "",
                    unitName: "",
                    isBase: true,
                    status: 1,
                },
                editList:{//修改所需参数
                    "id": 0,
                    "groupId": 0,
                    "unitCode": "",
                    "unitName": "",
                    "isBase": true,
                    "status": 0
                    },
                 //---------------- 表单数据
                formData:{
                    unitCode: "",
                    unitName: "",
                    isBase: true,
                    status: 1,
                },
                // --------------列表数据
                tableList:[],
                addRowList:[],//增行的数组
                addRowdata:{//新增行数据
                    "groupId": 0,
                    "unitId": 0,
                    "destUnitId": 0,
                    "factor": 0,
                    "remark": ""
                    },
                tabName:'1',
                multipleSelection: {},//复选框选中数据
                dialogUserConfirm:false,//确认提示框是否显示
                choseAjax:'',//存储点击单个删除还是多项删除按钮判断信息
                // --------------树形控件与下拉框数据
                 treeNode:{
                    Id:'',
                    unitName:'',
                },
                countTree:[],
                
                

            }
        },
        created() {  
            // this.getAllList();
            this.loadTree();
        },
        computed:{
            count () {
                return this.treeNode;
                },
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
            // ----------左侧搜索栏的收起与展开
            closeLeft: function() {
                let _this = this;
                _this.ifWidth = false;
            },
            openLeft: function() {
                let _this = this;
                _this.ifWidth = true;
            },
            // --------------------树形控件相关
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
                _this.$axios.gets('/api/services/app/UnitManagement/GetUnitTree').then(
                    rsp=>{
                    // console.log(rsp.result);
                     _this.countTree=rsp.result
                    // console.log(_this.countTree)
                     
                    _this.loadIcon();
               })
            },
            nodeClick(data) {//树形控件节点被点击时的回调
                // console.log(data);
                let _this=this;
                 _this.nodeId=data.id;
                //  console.log(data.id);
                _this.getNodeMsg();
                _this.getNodeDetail();
                _this.loadTableTree();

            },
            getNodeMsg(){//获取树形节点信息
                let _this=this;
                _this.$axios.gets('/api/services/app/UnitManagement/Get',{Id:_this.nodeId}).then(
                    rsp=>{
                    // console.log(rsp.result);
                     _this.formData=rsp.result;
               });

            },
            getNodeDetail(){//获取树形节点详细信息
                let _this=this;
                _this.$axios.gets('/api/services/app/UnitConvertManagement/GetDetail',{UnitId:_this.nodeId}).then(
                    rsp=>{
                    // console.log(rsp.result);
                    if (rsp.result.length>0) {
                        for (let val of rsp.result){
                            // console.log(val);
                            _this.treeNode.Id=val.destUnitId;
                            _this.treeNode.unitName=val.destUnitId_UnitName;
                            // console.log(_this.treeNode.unitName);
                        }
                        _this.tableList=rsp.result;
                    }else{
                        _this.tableList=rsp.result;
                        _this.treeNode.Id=rsp.result.id;
                        _this.treeNode.unitName=rsp.result.unitName;
                    }
                       });

            },
            // -------------------按钮组功能
            add(){//新增
                let _this=this;
               _this.isAdd=true;
               _this.formData.unitCode='';
               _this.formData.unitName='';

            },
            save(){//按钮保存
                let _this=this;
                if (_this.isAdd) {//新增后保存
                    _this.addList.unitCode=_this.formData.unitCode;
                    _this.addList.unitName=_this.formData.unitName;
                    _this.addList.isBase=_this.formData.isBase;
                    _this.addList.status=_this.formData.status;
                    // console.log(_this.addList);
                    _this.$axios.posts('/api/services/app/UnitManagement/Create',_this.addList)
                    .then(
                        rsp=>{
                            _this.isAdd=false;
                            _this.loadTree();
                        }
                    )
                }
                if (_this.isEdit) {//修改后保存
                    _this.editList.id=_this.nodeId;
                    _this.editList.unitCode=_this.formData.unitCode;
                    _this.editList.unitName=_this.formData.unitName;
                    _this.editList.isBase=_this.formData.isBase;
                    _this.editList.status=_this.formData.status;
                    // console.log(_this.editList);
                    _this.$axios.puts('/api/services/app/UnitManagement/Update',_this.editList)
                    .then(
                        rsp=>{
                            _this.isEdit=false;
                            _this.loadTree();
                        }
                    )
                }               
            },
            delNode(){//删除
                let _this=this;
                // console.log("删除节点");
                _this.$axios.deletes('/api/services/app/UnitManagement/Delete',{Id:_this.nodeId})
                .then(
                    rsp=>{
                        console.log(rsp.success);
                        _this.loadTree();
                    }
                )
                
            },
            edit(){//确认是否编辑
                let _this=this;
                _this.isEdit=true;
                // console.log("值更改了");
            },
            cancel(){
                let _this=this;
                _this.getNodeMsg();
            },
            // -------------------左侧搜索功能
            searchLeft(){//搜索
                let _this=this;
                _this.$axios.gets('/api/services/app/UnitManagement/GetData',{UnitCode:_this.searchList.unitCode,UnitName:_this.searchList.unitName,IsBase:_this.searchList.isBase,Status:_this.searchList.isBase})
                .then(
                    rsp=>{
                        // console.log(rsp.result);
                        _this.formData=rsp.result[0];
                    }
                )
            },
            // ---------------------------------------------表格功能
            addRow(){//增加一行
                let _this=this;
                let newRow={
                    "groupId": 0, 
                    "unitId": _this.nodeId,
                    "destUnitId":"",
                    "factor": "",
                    "remark": "",
                };
                _this.tableList.unshift(newRow);
                _this.addRowList.unshift(newRow);
                // console.log(_this.tableList);            
            },
            saveRow(val){//保存所在行
                // console.log("新增行数据");
                // console.log(val);
                 let _this=this;
                 _this.addRowdata=val;
                //  console.log( _this.addRowdata);
                _this.$axios.posts('/api/services/app/UnitConvertManagement/Create',_this.addRowdata)
                .then(
                    rsp=>{
                        // console.log(rsp.success);
                        // console.log("表格行内保存成功");
                        // console.log(rsp.result);
                        _this.getNodeDetail();
                    }
                )

            },
            confirmDelThis(row){//确认单项删除
                let _this=this;
                // console.log("确认了吗");
                _this.choseAjax='row'
                _this.row=row;
                _this.dialogUserConfirm=true;
            },
            delThis(row){//单项删除（操作下面的删除行）
                let _this=this;
                _this.$axios.deletes('/api/services/app/UnitConvertManagement/Delete',{id:_this.row.id})
                .then(function(res){
                    _this.dialogUserConfirm=false;
                    _this.open('删除成功','el-icon-circle-check','successERP');
                     _this.getNodeDetail();
                },function(res){
                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    _this.dialogUserConfirm=false;
                    _this.errorMessage=true;
                    _this.open('删除失败','el-icon-error','faildERP');
                })
            },
            handleSelectionChange(arr1){//多项删除（表格上面的删行）
                let _this = this;
                _this.multipleSelection.ids = [];
                for (let val of arr1) {
                    _this.multipleSelection.ids.push(val.id);
                }
                // _this.isTrue=false;
                // console.log(_this.multipleSelection);
            },
            delSelected(){//确认多项删除
                let _this=this;
                _this.choseAjax='rows';
                if(_this.multipleSelection.ids.length>0){
                _this.dialogUserConfirm=true;
                }
            },
            delRow(){// 多项删除(批量删除)
                let _this = this;
                // console.log(_this.multipleSelection);
                this.$axios
                    .posts(
                    "/api/services/app/UnitConvertManagement/BatchDelete",
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
            sureAjax(){
                let _this=this;
                if(_this.choseAjax=='row'){
                    _this.delThis()
                }else if(_this.choseAjax=='rows'){
                    _this.delSelected()
                }
            },
            // -------------------表格中的树形控件相关
            loadTableTree(){//加载表格中树形控件
                 let _this=this;
                _this.$axios.gets('/api/services/app/UnitManagement/GetOtherUnit',{UnitId:_this.nodeId}).then(
                    rsp=>{
                    // console.log(rsp.result);
                     _this.countTableTree=rsp.result
                    // console.log(_this.countTableTree)
                    _this.loadIcon();
               })
            },
            TableClick(data){//表格中树形控件节点被点击时的回调
                let _this=this;
                    //  console.log(data);
                    _this.treeNode.Id=data.id;
                    _this.treeNode.unitName=data.unitName;
                    _this.$nextTick(function(){
                        $('#countTbale_confirmSelect').click()
                    })
            },
           
            
            // tab栏事件
            handleClick(tab, event){},
            filterNode(tab, event){},
        },
        mounted: function() {
            // let content1 = document.getElementById("bg-white"); //设置高度为全屏
            // let height1 = window.innerHeight - 123;
            // content1.style.minHeight = height1 + "px";
        },
    }
</script>
<style scope>
.count-wrapper{
    width: 100%;
    height: 100%;
}
.bgWhite{
    background-color: #fff;
    height: 100%;
    
}
.formWidth{
    width: 80%;
    padding-left: 10%;
    font-size: 12px;
}
.topSearch {
  font-size: 18px;
}
.topSearch .pl10 {
  padding-left: 10px;
}
.h48 {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #e4e4e4;
}
.pt5{
    padding-top: 5px;
}
.circle {
  display: inline-block;
  height: 15px;
  width: 15px;
  font-weight: 900;
  color: rgb(161, 161, 161);
  border: 1px solid rgb(194, 202, 216);
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  float: right;
  margin-top: 16px;
  cursor: pointer;
}
.circle .circleContent {
  display: inline-block;
  position: absolute;
  top: 4%;
  left: 25%;
  height: 1px;
  width: 1px;
  line-height: 10px;
}
.bgColor{
    background-color: rgb(251, 252, 253);
}
.borderBtm{
    height: 42px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
}
.bgcForm{
    background-color: #fff;
    padding: 10px;
}
.rightForm{
    width: 40%;
}
.rightForm .el-form-item__label{
    font-size: 12px;
    color: #000;
}
.rightForm .el-form-item {
    margin-bottom: 0px;
}
.rightForm .el-input{
    font-size: 12px;
}
.rightForm .el-input__inner{
    height: 30px;
}
/* .borderBtm .el-tabs__item.is-active{
    color: #000;
}
.borderBtm .el-tabs__active-bar{
    background-color: #33cccc;
    width: 50px;
} */
.btnBorder{
    border: none;
    background-color: #fbfcfd;
    border-bottom: 3px solid #33cccc;
    height: 48px;
    cursor: pointer;
}
.borderBtm .pickUp{
    font-size: 12px;height: 42px;
    line-height: 42px;
    float: right;
    padding-right: 5px;
    cursor: pointer;
}
.btnHeight{
    padding: 10px;
}
.count-wrapper .tableSize .el-table th>.cell{
    color: #000;
    font-size: 12px;
}
.leftBox{
    border-left: 1px solid #ccc;
}
.count-wrapper .el-collapse-item.is-active .el-collapse-item__header {
    border-bottom-color: #ccc;
    background-color: rgb(251, 252, 253);
}
</style>


 <style>
    .count-wrapper .formWidth .el-input__inner{
        height:30px !important;

    }
    .count-wrapper .formWidth .el-form-item__label{
        font-size:12px !important;
        color: #000;
    }
    .count-wrapper .formWidth .el-form-item{
        margin-bottom: 0px !important;
    }
    .count-wrapper .formWidth .el-button{
        background: #4a6997;
        color: #fff;
        font-size: 12px;
        padding: 10px 30px;
    }
    .count-wrapper .bgcForm .el-select{
        display: block !important;
    }
    .count-wrapper .tableSize .bgColor .el-input__inner {
        border:none !important;
        text-align: center;
    }
</style>


