<template>
    <div class="admstr-wrapper">
        <!-- 按钮组 -->
        <el-row>
            <el-col :span="24">
                <button @click="isBack" class="erp_bt bt_back">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>
                
                <button @click="save" class="erp_bt bt_save">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>
                <button class="erp_bt bt_cancel" @click="cancel">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_cancel.png">
                    </div>
                    <span class="btDetail">取消</span>
                </button>
                <button @click="saveAdd" class="erp_bt bt_saveAdd">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_saveAdd.png">
                    </div>
                    <span class="btDetail">保存并新增</span>
                </button>
                <!-- <button class="erp_bt bt_auxiliary bt_width">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                    <div class="btRightImg">
                        <img src="../../../static/image/common/bt_down_right.png">
                    </div>
                </button> -->
                <button  class="erp_fb_bt bt_add">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>
                <button class="erp_fb_bt bt_del">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>
            </el-col>
        </el-row>
        <!-- dialog数据变动提示(是否忽略更改) -->
        <el-dialog :visible.sync="dialogUpdateConfirm" class="dialog_confirm_message" width="25%">
                <template slot="title">
                    <span class="dialog_font">提示</span>
                </template>
                <el-col :span="24" style="position: relative;">
                    <el-col :span="24">
                        <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                        <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
                    </el-col>
                </el-col>
                <!--  -->
                <span slot="footer">
                    <button class="dialog_footer_bt dialog_font" @click="sureDoing">确 认</button>
                    <button class="dialog_footer_bt dialog_font" @click="dialogUpdateConfirm = false">取 消</button>
                </span>
        </el-dialog>
        <!-- 表单验证的错误提示信息 -->
	        <el-row>
                <el-col>
                    <div class="errTipsWrapper" name="areaParentId">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.areaParentId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaParentId') }}</p>
                        </div>
                    </div>
                    <div class="errTipsWrapper" name="areaCode">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.areaCode')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaCode') }}</p>
                        </div>
                    </div>
                    <div class="errTipsWrapper" name="areaName">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.areaName')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaName') }}</p>
                        </div>
                    </div>
                    <div class="errTipsWrapper" name="status">
                      <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('addData.status') }}</p>
                      </div>
                    </div>
                </el-col>
            </el-row>
        <!-- 表单 -->
        <el-row>
            <div class="admstr-form-wrapper pt15">
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>上级地区</label>
                            <el-select filterable  
                            :class="{redBorder : validation.hasError('addData.areaParentId')}"
                            class="areaParentId" 
                            placeholder=""
                            v-model="addData.areaParentId">
                                <!-- <el-input
                                    placeholder="搜索..."
                                    class="selectSearch"
                                    v-model="search_area">
                                </el-input> -->
                                <el-tree
                                    oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                    :highlight-current="true"
                                    :data="adminAreaTree"
                                    :props="defaultProps"
                                    node-key="id"
                                    default-expand-all
                                    ref="tree"
                                    :expand-on-click-node="false"
                                    @node-click="nodeClick"
                                    >
                                </el-tree>
                                <!-- <el-option v-show="false" :key="item.id" :label="item.areaName" :value="item.id" >
                                </el-option> -->
                                 <el-option v-show="false" :key="count.Id" :label="count.areaName" :value="count.Id"   id="adminStrDetail_confirmSelect">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>                 
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>地区编码</label>
                            <el-input 
                            class="areaCode" 
                            :class="{redBorder : validation.hasError('addData.areaCode')}"
                            v-model="addData.areaCode"></el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>地区名称</label>
                            <el-input 
                            class="areaName" 
                            :class="{redBorder : validation.hasError('addData.areaName')}"
                            v-model="addData.areaName"></el-input>
                        </div>
                    </div>
                </el-col>
                <!-- <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>负责人</label>
                            <el-input 
                            class="areaCode" 
                            v-model="addData.areaCode"></el-input>
                        </div>
                    </div>
                </el-col> -->
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label>备注</label>
                            <el-input
                            class="remark" 
                            v-model="addData.remark"
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 4}"
                            >
                            </el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label><small>*</small>状态</label>
                            <el-select filterable  
                            class="status" 
                            placeholder=""
                            :class="{redBorder : validation.hasError('addData.status')}"
                            v-model="addData.status">
                                <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>创建人</label>
                            <el-input 
                            disabled
                            v-model="addData.createdBy"
                            ></el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>创建时间</label>
                            <el-date-picker
                            type="date"
                            disabled
                            v-model="addData.createdTime"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
               
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
    name: "adminstrAreaDetail",
    data() {
        return {
            addData:{// 新增数据列表
                "groupId": 0,
                "levelNo": 0,
                "areaParentId": '',
                "areaCode": "",
                "areaName": "",
                "areaFullName": "string",
                "areaFullPathId": "string",
                "areaFullPathName": "string",
                "isSystem": true,
                "status": 1,
                "remark": "",
                "createdBy" :this.$store.state.name,
                "createdTime"  : this.GetDateTime(),
            },
            selectData:{
                Status001:[],//启用状态
            },
            // -------------------------树形控件数据
            adminAreaTree:[],
            defaultProps: {
                        children: 'childItems',
                        label: 'areaName',
                        id:'id'
            },
            treeNode:{
                    Id:'',
                    areaName:'15155',
            },
            // ----------提示框信息
            dialogUpdateConfirm:false,
            isUpdate:false,
            
        };
    },
    created() {
        this.getSelectData();
        this.loadTree();
        this.getDefault();
    },
    validators: {
        'addData.areaParentId': function (value) {//上级地区
            return this.Validator.value(value).required().maxLength(50)
        },
        'addData.areaCode': function (value) {//地区编码
            return this.Validator.value(value).required().maxLength(50)
        },
        'addData.areaName': function (value) {//地区名称
            return this.Validator.value(value).required().maxLength(50)
        },
        'addData.status': function (value) {//状态
            return this.Validator.value(value).required().integer();
        },
    },
    computed:{
            count () {
                return this.treeNode;
                },
        },
    watch:{
        addData:{
            handler: function (val, oldVal) {
                let _this = this;
                // console.log("数据改变了");
                if(!_this.isUpdate){
                    _this.isUpdate = !_this.isUpdate;
                }
            },
             deep: true,
        }
    },
    methods: { 
        // 成功的提示框
        open(tittle,iconClass,className) {//提示框
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
        },
        GetDateTime() {//获取当前时间
            let date=new Date();
            return `${date.getFullYear()}+'-'+${date.getMonth()+1}+'-'+${date.getDate()}`;
        }, 
        // -----------------按钮组功能
        // -----------------取消与返回功能
        cancel(){// 取消
            this.isBack();
        },
        goBack() { // 返回
            this.$store.state.url = "/adminstrArea/adminstrAreaList/default";
            this.$router.push({ path: this.$store.state.url });
        },
        isBack(){//是否返回
            let _this=this;
            if(_this.isUpdate){
                console.log(_this.isUpdate);
                _this.dialogUpdateConfirm=true;
            }else{
                _this.goBack();
            }
        },
        sureDoing(){
            this.goBack();
        },
        // -----------------取消与返回功能完
        save() {// 保存
            let _this=this;
            _this.$validate().then(
                function (success) { 
                    if (success){
                        _this.$axios.posts('/api/services/app/AdAreaManagement/Create',_this.addData)
                            .then(
                                rsp=>{
                                    // console.log(rsp.result);
                                    _this.open('保存成功','el-icon-circle-check','successERP');
                                    _this.isUpdate=false;
                                },
                                rsp=>{   
                                    _this.open('保存失败','el-icon-error','faildERP');
                                }
                            )
                    }
                }
            )
        
        },
        saveAdd() {// 保存并新增
            let _this=this;
                    _this.$validate().then(
                        function (success) {
                            if (success) {
                                _this.$axios.posts('/api/services/app/AdAreaManagement/Create',_this.addData).then(
                                    rsp=>{
                                        _this.reset();
                                        _this.open('保存成功','el-icon-circle-check','successERP');
                                        _this.isUpdate=false;
                                    },
                                    rsp=>{
                                        _this.open('保存失败','el-icon-error','faildERP');
                                    }
                                )
                            }
                        }
                    );
        },
        // ----------树形控件相关----------
        loadTree(){// 获取树形节点
            let _this=this;
            // _this.treeLoading=true;
            _this.$axios.gets('/api/services/app/AdAreaManagement/GetTree')
                .then(function(res){
            // console.log(res.result);
                    _this.adminAreaTree=res.result;
                    _this.loadIcon();
                    //  _this.treeLoading=false;
                        },function(res){
                            // _this.treeLoading=false;
                        })
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
        nodeClick(data,node,self){// 节点被点击时的回调
             let _this=this;
                //  console.log(data);
                _this.treeNode.Id=data.id;
                _this.treeNode.areaName=data.areaName;
                _this.$nextTick(function(){
                    $('#adminStrDetail_confirmSelect').click()
                })
        },
        getDefault(){// 获取上级地区
            let _this=this;
            if (this.$route.params.upAreaName=='default') {
                 _this.treeNode.areaName='';
            }else{
                 _this.treeNode.areaName=this.$route.params.upAreaName;

            }
            this.GetDateTime();//获取当前时间
        },
        getSelectData(){ // 获取下拉框数据
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
             _this.selectData.Status001=res.result;
            });
        },
        reset(){ // 重新验证并设置值
            this.addData.areaParentId='';
            this.addData.areaCode='';
            this.addData.areaName='';
            this.addData.status='';
            this.addData.remark=''; 
            this.validation.reset();               
        },
    },
        
};
</script>

 <style scoped>
    .pt15{
        padding-top: 15px;
    }
    .admstr-wrapper{
        background-color: #fff;
    }
    .admstr-wrapper .el-row:first-child{
    padding: 7px 0;
    border-bottom: 1px solid #e4e4e4;
    }
    .admstr-wrapper .el-row:last-child{
        padding-bottom: 15px;
    }
</style>
 <style>
    .admstr-wrapper .admstr-form-wrapper .bgcolor.bgLongWidth .el-textarea{
        width: calc(100% - 90px);
    }
</style>
