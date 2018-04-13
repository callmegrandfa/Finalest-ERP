<template>
     <div class="staff-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="bgc">
            <!-- 按钮组 -->
            <div class="btnBd">
                <el-row >
                    <el-col :span="24">
                        <button class="erp_bt bt_back" @click="isBack">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_back.png">
                                </div>
                                <span class="btDetail">返回</span>
                        </button>
                        <button class="erp_bt bt_save" @click="save">
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
                        <button class="erp_bt bt_saveAdd" @click="saveAdd">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_saveAdd.png">
                                </div>
                                <span class="btDetail">保存并新增</span>
                        </button>
                        <button class="erp_fb_bt bt_add" :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                        </button>
                        <button class="erp_fb_bt bt_del" :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
                        </button>
                       
                    </el-col>
                </el-row>
            </div>
            <!-- 表单验证错误提示信息 -->
            <el-row>
                <el-col :span="24">
                    <div class="tipsWrapper">
                        <div class="errorTips">
                            <p class="msgDetail">错误提示：
                                <span 
                                :class="{block : !validation.hasError('addList.employeeCode')}">
                                职员编码{{ validation.firstError('addList.employeeCode') }},
                                </span>
                                <span 
                                :class="{block : !validation.hasError('addList.employeeName')}">
                                职员名称{{ validation.firstError('addList.employeeName') }},
                                </span>
                                <span 
                                :class="{block : !validation.hasError('addList.ouId')}">
                                所属组织{{ validation.firstError('addList.ouId') }},
                                </span>
                            </p>
                        </div>
                    </div>
                </el-col>
            </el-row>

           

	        <!-- <el-row>
                <el-col>
                    <div class=tipsWrapper" name="employeeCode">
                      <div class="errorTips" :class="{block : !validation.hasError('addList.employeeCode')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('addList.employeeCode') }}</p>
                      </div>
                    </div>
                    <div class=tipsWrapper" name="employeeName">
                      <div class="errorTips" :class="{block : !validation.hasError('addList.employeeName')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('addList.employeeName') }}</p>
                      </div>
                    </div>
                    <div class=tipsWrapper" name="ouId">
                      <div class="errorTips" :class="{block : !validation.hasError('addList.ouId')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('addList.ouId') }}</p>
                      </div>
                    </div>
                </el-col>
            </el-row> -->
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
            <!-- dialog -->
            <!-- form表单 -->
            <div class="staff_detail_form">
                <el-row style="margin-top:20px">
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员编码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="addList.employeeCode" class="employeeCode"  :class="{redBorder : validation.hasError('addList.employeeCode')}"  @focus="showErrTips"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员名称</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="addList.employeeName" class="employeeName"  :class="{redBorder : validation.hasError('addList.employeeName')}"  @focus="showErrTips"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>所属组织</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select class="ouId" :class="{redBorder :           validation.hasError('addList.ouId')}" v-model="addList.ouId" placeholder=""  @focus="showErrTips">
                                <el-input
                                    placeholder="输入关键字进行过滤"
                                    v-model="filterOu" 
                                    class="selectSearch">
                                </el-input>
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" :data="selectTree_ou" :props="selectProps_ou"
                                        node-key="id" default-expand-all ref="tree2" :filter-node-method="filterNode_ou"
                                        :expand-on-click-node="false" @node-click="nodeClick_ou"
                                        class="filter-tree">
                                </el-tree>
                                <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>手机号码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="addList.mobile"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>部门</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select v-model="addList.deptId">
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" :data="selectTree_depart" :props="selectProps_depart"
                                        node-key="id" default-expand-all ref="tree2" :filter-node-method="filterNode_Depart"
                                        :expand-on-click-node="false" @node-click="nodeClick_depart"
                                        class="filter-tree">
                                        </el-tree>
                                        <el-option v-show="false" v-for="item in selectData.depart" :key="item.id" :label="item.name" :value="item.id" :date="item.id">
                                        </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>性别</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select v-model="addList.sex">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>生日</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="addList.birthday"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>所属店铺</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div >
                            <el-select v-model="addList.ShopId">
                                <el-option v-for="item in selectData.shop" :label="item.shopName" :value="item.id" :key="item.id"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>职员类型</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="chePT">
                            <el-checkbox-group v-model="addList.employeeTypeIds">
                                <el-checkbox v-for="item in employeeIdoptions"  :label="item.label" :key="item.label">{{item.text}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>状态</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div >
                            <el-select v-model="addList.status">
                               <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                </el-option>
                            </el-select>
                           
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>备注</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input type="textarea" :rows="5" resize="none" v-model="addList.remark"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'staffDetail',
        data(){
            return { 
                // --------------下拉框树形控件数据
                ouId:null,
                selectData:{//select下拉框数据
                    ou:[],//组织
                    depart:[],//部门
                    shop:[],//部门
                    Status001:[],//启用状态
                },
                filterOu:'',
                selectTree_ou:[],
                selectProps_ou: {
                    children: 'children',
                    label: 'ouName',
                    id:'id'
                },
                selectTree_depart:[],
                selectProps_depart: {
                    children: 'children',
                    label: 'name',
                    id:'id'
                },
                // -----------------------------
                addList:{// --------------增加数据
                        "ouId": null,
                        "employeeCode": "",
                        "employeeName": "",
                        "mobile": "",
                        "deptId": null,
                        "sex": null,
                        "birthday": "",
                        "discountStart": 0,
                        "discountEnd": 0,
                        "shopId": 0,
                        "remark": "",
                        "employeeTypeIds": [],
                        "status": 1,
                        "id": 0
                },
                employeeIdoptions:[//------职员类型--------
                    { label: '1',text: '采购'},
                    { label: '2',text: '业务'}, 
                    { label: '3',text: '仓库'}, 
                    { label: '4',text: '店员'}, 
                ],
                isTrue:false,
                isUpdate:false,
                dialogUpdateConfirm:false,
                id:'',
            }                                                        
        },
        validators: {
            'addList.employeeCode': function (value) {//职员编码
                 return this.Validator.value(value).required().maxLength(50)
                    },
            'addList.employeeName': function (value) {//职员名称
                 return this.Validator.value(value).required().maxLength(50)
                    },
            'addList.ouId': function (value) {//所属组织
                return this.Validator.value(value).required().integer();
                    },
        },
        created(){
            // 所属组织下拉选项框
            this.getSelectData();
            this.loadTree();
            this.loadDepartTree();
            // 获取默认数据
            this.getDefault();
        },
        // watch:{
        //     addList:{
        //         handler: function (val, oldVal) {
        //             let _this = this;
        //             if(!_this.isUpdate){
        //                 _this.isUpdate = true;
        //             }
        //         },
        //         deep: true,
        //     }
        // },
        methods: {
            getDefault(){// 默认用户所属组织
                let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetWithCurrentUser').then(rsp=>{ 
                    _this.addList.ouId=rsp.result.id;
                });

                this.GetDateTime();//获取当前时间
            },
            GetDateTime() {//获取当前时间
                let date=new Date();
                return `${date.getFullYear()}+'-'+${date.getMonth()+1}+'-'+${date.getDate()}`;
            }, 
            //---------------------------获取下拉框选项数据
            getSelectData(){//获取下拉选项数据
                let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetCompanyOuList').then(function(res){  // 所属组织
                    _this.selectData.ou=res.result;
                });
                _this.$axios.gets('/api/services/app/ShopManagement/GetAll').then
                (function(res){  // 店铺
                    _this.selectData.shop=res.result.items;
                    // console.log(res.result.items);
                });
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
                _this.selectData.Status001=res.result;// 启用状态
                });
                _this.getSelectDepart();
            },
            getSelectDepart(){// 获取所属部门下拉框数据
                let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllTree',{OuId:_this.ouId}).then
                (
                    rsp=>{  
                        // console.log(rsp.result);
                        _this.selectData.depart=rsp.result;
                    }
                );
            },
            //---------------------------获取树形控件数据
            loadTree(){// 加载所属组织树形控件
                let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetCompanyOuList')
                .then(function(res){//组织
                    _this.selectTree_ou=res.result;
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
            filterNode_ou(value, data) {//根据关键字过滤节点
                if (!value) return true;
                return data.ouFullname.indexOf(value) !== -1;
            },
            nodeClick_ou(data,node,self){//所属组织树形控件的回调
                let _this=this;
                // console.log(data);
                // console.log(data.id);
                _this.ouId=data.id;
                // console.log(_this.ouId);
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                });
                _this.getSelectDepart();
                _this.loadDepartTree();
            },
            // --------------------------------------
            loadDepartTree(){// 加载所属部门树形控件
                let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllTree',{OuId:_this.ouId})
                .then(function(res){//部门
                    // console.log(res);
                    _this.selectTree_depart=res.result;
                    _this.loadIcon();
                },function(res){
                })
            },
            filterNode_Depart(value, data) {//根据关键字过滤节点
                if (!value) return true;
                return data.deptName.indexOf(value) !== -1;
            },
            nodeClick_depart(data,node,self){//所属部门树形控件的回调
                let _this=this;
                // console.log(data);
                // console.log(data.id);
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                });
                _this.getSelectDepart();
                _this.loadDepartTree();
            },
            // -----------------按钮组功能
            save(){// 保存
                let _this=this;
                $('.tipsWrapper').css({display:'block'})
                _this.$validate().then(
                    function (success) {
                        if (success) {
                            $('.tipsWrapper').css({display:'none'})
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                rsp=>{
                                    // console.log(_this.addList);
                                    // console.log(rsp);
                                    _this.open('保存成功','el-icon-circle-check','successERP');
                                    _this.isTrue=false;
                                    _this.isUpdate=false;
                                    },
                                    res=>{
                                         _this.open('保存失败','el-icon-error','faildERP');
                                    }
                            )
                        }
                      
                    }
                );

            },
            cancel(){// 取消
                this.isBack();
            },
            isBack(){//是否返回
                let _this=this;
                if(_this.isUpdate){
                    _this.dialogUpdateConfirm=true;
                }else{
                _this.goBack();
                }
            },
            sureDoing(){
                this.goBack();
            },
            goBack:function(){//返回
                this.$store.state.url='/staff/staffList/default'
                this.$router.push({path:this.$store.state.url})
            },
            saveAdd(){// 保存并新增
                let _this=this;
                _this.$validate().then(
                    function (success) {
                        if (success) {
                            _this.addList.employeeCode=_this.form.employeeCode;
                            _this.addList.employeeName=_this.form.employeeName;
                            _this.addList.ouId=_this.form.ouId;
                            _this.addList.mobile=_this.form.mobile;
                            _this.addList.deptId=_this.form.department;
                            _this.addList.sex=_this.form.sex;
                            _this.addList.birthday=_this.form.birthday;
                            _this.addList.shopId=_this.form.shopName;
                            _this.addList.employeeTypeIds=_this.form.employeeTypes;
                            _this.addList.remark=_this.form.remark;
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                            rsp=>{
                                                // console.log(rsp);
                                                _this.open('保存成功','el-icon-circle-check','successERP');
                                                _this.reset();
                                                _this.isUpdate=false;
                                                
                                            },
                                            res=>{
                                                _this.open('保存失败','el-icon-error','faildERP');
                                            }
                            )
                        }
                      
                    }
                );
               
            },
           
            // --------------------------------------------
            // 错误提示信息
            showErrTips(e){
                $('.tipsWrapper').css({display:'none'});
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
            // -----------------按钮组功能
            
            reset(){// 重新验证并设置值
                    this.form.employeeCode='';
                    this.form.employeeName='';
                    this.form.ouId='';
                    this.form.mobile='';
                    this.form.department='';
                    this.form.sex='';
                    this.form.birthday='';
                    this.form.shopName='';
                    this.form.remark=''; 
                    this.validation.reset();               
            },
        },
       
    }
</script>


 <style scoped>
    .btnBd{
        /* height: 48px; */
        padding: 5px;
        border-bottom: 1px solid #e4e4e4 !important;
    }
    .block{
        display: none;
    }
    .staff-infor-wrapper{
        position: relative;
    }
    .staff_detail_form{
        padding-left: 30%;
        width: 30%;
        margin-bottom: 20px;
    }
    .staff_detail_form .chePT{
        padding-top:5px;
    }
    .staff-infor-wrapper .smallBgcolor .el-input{
        width: 100% !important ;
    }
    .staff-infor-wrapper .bgcolor label{
        width: 100% !important ;
        margin-right: 0; 
    }
    .smallBgcolor .el-input--suffix{
        width: 100% !important ;
    }
    .smallBgcolor .el-input{
        width: 100% !important ;
    }
    .bgcolor{
        overflow:  visible; 
    }
    .smallBgcolor>label {
        line-height: 35px;
    }
</style>




<style>
/*设置表单字体与高度*/
.staff_detail_form .el-select{
    display: block !important ;
}
.staff-infor-wrapper .staff_detail_form .redBorder .el-input__inner{
  border-color: #f66;
}
.staff-infor-wrapper .staff_detail_form .el-input__inner{
    height: 35px !important;
    font-size:12px;
    border: 1px solid #dcdfe6 ;
}
</style>







