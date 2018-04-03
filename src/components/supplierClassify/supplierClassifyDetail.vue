 <template>
    <div class="supClasDetail-wrapper">
         <!-- 按钮组 -->
        <el-row>
            <el-col :span="24">
                <button @click="goback" class="erp_bt bt_back">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>
                <button  @click="add" class="erp_bt bt_add" :disabled="isAdd">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>
                <button @click="save" class="erp_bt bt_save">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>
                <button @click="saveAdd" class="erp_bt bt_saveAdd">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_saveAdd.png">
                    </div>
                    <span class="btDetail">保存并新增</span>
                </button>
                <button class="erp_bt bt_auxiliary bt_width">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                    <div class="btRightImg">
                        <img src="../../../static/image/common/bt_down_right.png">
                    </div>
                </button>
            </el-col>
        </el-row>

        <!-- 表单验证的错误提示信息 -->
	    <el-row>
            <el-col>
                <div class="errTipsWrapper" name="classParentId">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.classParentId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.classParentId') }}</p>
                        </div>
                    </div>
                    <div class="errTipsWrapper" name="classCode">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.classCode')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.classCode') }}</p>
                        </div>
                    </div>
                    <div class="errTipsWrapper" name="className">
                        <div class="errorTips" :class="{block : !validation.hasError('addData.className')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('addData.className') }}</p>
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
            <div class="supClasDetail-form-wrapper pt15">
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label><small>*</small>上级供应商分类</label>
                            <el-select filterable  
                            class="classParentId"
                            placeholder=""
                            v-model="addData.classParentId"
                            :class="{redBorder : validation.hasError('addData.classParentId')}">
                                <!-- 树形控件 -->
                                <el-tree
                                    oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                    :highlight-current="true"
                                    :data="supplierClasTree"
                                    :props="defaultProps"
                                    node-key="id"
                                    default-expand-all
                                    ref="tree"
                                    :expand-on-click-node="false"
                                    @node-click="nodeClick"
                                    >
                                </el-tree>
                                <!-- <el-option v-for="item in selectData.upSupplierClass" :key="item.id" :label="item.className" :value="item.id">
                                </el-option> -->
                                <el-option v-show="false" :key="count.Id" :label="count.className" :value="count.Id"   id="supClaDetail_confirmSelect">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>供应商分类编码</label>
                            <el-input 
                            class="classCode" 
                            v-model="addData.classCode"
                            :class="{redBorder : validation.hasError('addData.classCode')}"></el-input>
                        </div>
                    </div>
                </el-col>                 
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>供应商分类名称</label>
                            <el-input 
                            class="className" 
                            v-model="addData.className"
                            :class="{redBorder : validation.hasError('addData.className')}"></el-input>
                        </div>
                    </div>
                </el-col>
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
                            v-model="addData.status"
                            :class="{redBorder : validation.hasError('addData.status')}"
                            >
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
                            :disabled="isDisabled"
                            v-model="addData.createdBy">
                            </el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>创建时间</label>
                            <el-date-picker
                            type="date"
                            :disabled="isDisabled"
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
        name: "supplierClassifyDetail",
        data(){
             return{
                 isDisabled:true,//是否禁用创建人与创建时间               
                 isAdd:true,//是否禁用增加键               
                // 表单增加参数
                 addData:{
                    "groupId": 0,
                    "contactOwner": 2,
                    "levelNo": 0,
                    "classParentId": '',
                    "classCode": "",
                    "className": "",
                    "classFullname": "string",
                    "classFullPathId": "string",
                    "classFullPathName": "string",
                    "mnemonic": "string",
                    "seq": 0,
                    "status": 1,
                    "remark": "",
                    "createdBy" :this.$store.state.name,
                    "createdTime"  : this.GetDateTime(),
                },
                //  下拉框的选项数据
                selectData:{
                    Status001:[],//启用状态
                    upSupplierClass:[],// 上级供应商分类
                },
                 // -------树形控件数据
                 supplierClasTree:[],
                 defaultProps: {
                    children: 'childNodes',
                    label: 'className',
                    id: 'id',
                },
                treeNode:{
                    Id:'',
                    className:'',
                },

             }
        },
        created(){
            this.getSelectData();
            this.loadTree();
            this.GetDateTime();
        },
        validators: {
            'addData.classParentId': function (value) {//上级供应商分类
                return this.Validator.value(value).required().maxLength(50)
            },
            'addData.classCode': function (value) {//供应商分类编码
                return this.Validator.value(value).required().maxLength(50)
            },
            'addData.className': function (value) {//供应商分类名称
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
        methods:{
            GetDateTime() {//获取当前时间
                let date=new Date();
                return `${date.getFullYear()}+'-'+${date.getMonth()+1}+'-'+${date.getDate()}`;
            },          
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
            //---------------获取下拉框选项数据 
            getSelectData(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
                    // 启用状态
                    _this.selectData.Status001=res.result;
                })
            },
             //---------------按钮组功能 
            goback() {//返回
                this.$store.state.url = "/supplierClassify/supplierClassifyList/default";
                this.$router.push({ path: this.$store.state.url });
            },
            add(){ //新增
                this.reset();
                // _this.isDisabled=true;

            },
            save() {// 保存
                let _this=this;
                _this.$validate().then(
                    function (success) { 
                        if (success){
                            _this.$axios.posts('/api/services/app/ContactClassManagement/Create',_this.addData).then(
                                rsp=>{
                                    _this.open('保存成功','el-icon-circle-check','successERP'); 
                                    // console.log(rsp.result);
                                    _this.$axios.gets("/api/services/app/ContactClassManagement/Get", {
                                        id: rsp.result.id}).then(
                                            rsp=>{
                                            console.log(rsp.result);
                                            _this.addData=rsp.result;
                                            // _this.isDisabled=false;
                                            _this.isAdd=false;
                                            })
                                    },
                                rsp=>{   
                                    _this.open('保存失败','el-icon-error','faildERP');
                                }
                            )
                        }
                    }                    
                )
            },
            saveAdd(){ // 保存并新增
                let _this=this;
                    _this.$validate().then(
                        function (success) {
                            if (success) {
                                _this.$axios.posts('/api/services/app/ContactClassManagement/Create',_this.addData).then(
                                                rsp=>{
                                                    _this.reset();
                                                    _this.open('保存成功','el-icon-circle-check','successERP');
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
                     _this.selectData.upSupplierClass=rsp;
                    // console.log(_this.supplierClasTree)
                    _this.loadIcon();
               })
            },
            nodeClick(data) {//点击树形控件节点时的回调
                 let _this=this;
                //  console.log(data);
                _this.treeNode.Id=data.id;
                _this.treeNode.className=data.className;
                _this.$nextTick(function(){
                    $('#supClaDetail_confirmSelect').click()
                })
            },
            // 重新验证并设置值
            reset(){
                this.addData.classParentId='';
                this.addData.classCode='';
                this.addData.className='';
                this.addData.remark=''; 
                this.validation.reset();               
            },
            
        }
    }
</script>

 <style scoped>
    .supClasDetail-wrapper{
        background-color: #fff;
    }
    .pt15{
        padding-top: 15px;
    }
    .supClasDetail-wrapper{
        background-color: #fff;
    }
    .supClasDetail-wrapper .el-row:first-child{
        padding: 7px 0;
        border-bottom: 1px solid #e4e4e4;
    }
    .supClasDetail-wrapper .el-row:last-child{
        padding-bottom: 15px;
    }
    
</style>

 <style>
    /* 重新设置表单宽度 */
    .supClasDetail-wrapper .bgcolor.bgLongWidth label{
            width: 100px;
    }
    .supClasDetail-wrapper .bgcolor.bgLongWidth .el-input,
    .supClasDetail-wrapper .bgcolor.bgLongWidth .rangeDate, 
    .bgcolor.bgLongWidth .el-textarea,
    .supClasDetail-wrapper .bgcolor.bgLongWidth .el-select{
        width: calc(100% - 110px);
        }
    /* .supClasDetail-wrapper .bgcolor.bgLongWidth .el-select{
        width: 100%;
        } */
.supClasDetail-wrapper .bgcolor.bgLongWidth .el-select .el-input{
        width:100%;
}
</style>
