<template>
     <div class="staff-modify-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="bgc">
            <div class="btnBd">
                <el-row >
                    <!-- 按钮组 -->
                    <el-col :span="24">
                        <button class="erp_bt bt_back" @click="isBack">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_back.png">
                                </div>
                                <span class="btDetail">返回</span>
                        </button>
                        <button class="erp_bt bt_save" @click="save" :disabled="!update" :class="{erp_fb_bt:!update}">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_save.png">
                                </div>
                                <span class="btDetail">保存</span>
                        </button>
                        <button class="erp_bt bt_cancel" :disabled="!update" @click="cancel" :class="{erp_fb_bt:!update}">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_cancel.png">
                                </div>
                                <span class="btDetail">取消</span>
                        </button>
                        <button class="erp_bt bt_saveAdd" :disabled="!update" :class="{erp_fb_bt:!update}">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_saveAdd.png">
                                </div>
                                <span class="btDetail">保存并新增</span>
                        </button>
                        <button class="erp_bt bt_add" :disabled="update" :class="{erp_fb_bt:update}" @click="goAdd">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                        </button>
                        <button class="erp_bt bt_del" :disabled="update" @click="confirmDelThis" :class="{erp_fb_bt:update}">
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
                                :class="{block : !validation.hasError('form.employeeCode')}">
                                职员编码{{ validation.firstError('form.employeeCode') }},
                                </span>
                                <span 
                                :class="{block : !validation.hasError('form.employeeName')}">
                                职员名称{{ validation.firstError('form.employeeName') }},
                                </span>
                                <span 
                                :class="{block : !validation.hasError('form.ouId')}">
                                所属组织{{ validation.firstError('form.ouId') }},
                                </span>
                            </p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- <el-row>
                <el-col>
                    <div class="errTipsWrapper" name="employeeCode">
                      <div class="errorTips" :class="{block : !validation.hasError('form.employeeCode')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.employeeCode') }}</p>
                      </div>
                    </div>
                    <div class="errTipsWrapper" name="employeeName">
                      <div class="errorTips" :class="{block : !validation.hasError('form.employeeName')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.employeeName') }}</p>
                      </div>
                    </div>
                    <div class="errTipsWrapper" name="ouId">
                      <div class="errorTips" :class="{block : !validation.hasError('form.ouId')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.ouId') }}</p>
                      </div>
                    </div>
                </el-col>
            </el-row> -->
	        <!-- 表单 -->
             <div class="staff_modify_form">
                <el-row style="margin-top:20px">
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员编码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="form.employeeCode" class="employeeCode"  :class="{redBorder : validation.hasError('form.employeeCode')}"  @change="isUpdate" @focus="showErrTips"></el-input>
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
                            <el-input @focus="showErrTips"  @change="isUpdate" v-model="form.employeeName" class="employeeName"  :class="{redBorder : validation.hasError('form.employeeName')}" ></el-input>
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
                            <el-select @focus="showErrTips"  @change="isUpdate" class="ouId" :class="{redBorder :           validation.hasError('form.ouId')}" v-model="form.ouId" placeholder="" >
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
                                <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
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
                            <el-input  @change="isUpdate" v-model="form.mobile"></el-input>
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
                            <el-select  @change="isUpdate" v-model="form.deptId">
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
                            <el-select  @change="isUpdate" v-model="form.sex">
                                <el-option label="男" :value="1"></el-option>
                                <el-option label="女" :value="2"></el-option>
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
                            <el-date-picker type="date"  @change="isUpdate" v-model="form.birthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                            </el-date-picker>
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
                        <div>
                             <el-select  @change="isUpdate" v-model="form.shopId">
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
                        <div class="checkPt">
                            <el-checkbox-group  @change="isUpdate" v-model="employeeTypeIds">
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
                                <el-select v-model="form.status" @change="isUpdate">
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
                            <el-input @change="isUpdate" type="textarea" :rows="5" resize="none" v-model="form.remark"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>          
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
            <!-- dialog是否删除提示(对话框控件) -->
            <el-dialog :visible.sync="dialogDeleteConfirm" class="dialog_confirm_message" width="25%">
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
                    <button class="dialog_footer_bt dialog_font" @click="dialogDeleteConfirm = false">取 消</button>
                </span>
            </el-dialog>
            <!-- dialog删除 -->
        </div>
    </div>
</template>
<script>
export default {
    name: "staffDetail",
    data() {
        return {
            // --------------下拉框树形控件数据
            ouId:null,
            selectData:{//select下拉框数据
                ou:[],//组织
                depart:[],//部门
                shop:[],//部门
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
            // ------------------提示框数据
            dialogUpdateConfirm:false,//信息更改提示控制
            dialogDeleteConfirm:false,//删除信息提示控制
            choseAjax:'',//存储点击单个删除还是多项删除按钮判断信息
            btnValue:'',//存储点击返回还是修改按钮判断信息
            update:false, // -------------------按钮状态控制

            update: false, //判断是否更改
            form: {//表单信息的初始值
                groupId: 0,
                id: 0,
                ouId: 0,
                ouFullname: "",
                deptId: 0,
                deptName: "",
                shopId: 0,
                shopName: "",
                employeeCode: "",
                employeeName: "",
                mobile: "",
                sex: null,
                sexTValue: "",
                birthday: "",
                remark: "",
                status: 1,
                employeeTypes: [
                {
                    groupId: 0,
                    employeeId: 0,
                    employeeTypeid: 0,
                    employeeTypeidTValue: ""
                }
                ]
            },
            employeeIdoptions: [//------职员类型--------
                { label: 1, text: "采购" },
                { label: 2, text: "业务" },
                { label: 3, text: "仓库" },
                { label: 4, text: "店员" }
            ],
            updateList: { //保存数据需要的参数
                ouId: 0,
                employeeCode: "",
                employeeName: "",
                mobile: "",
                deptId: 0,
                sex: 1,
                birthday: "",
                discountStart: 0,
                discountEnd: 0,
                shopId: 0,
                remark: "",
                status: 1,
                employeeTypeIds: [],
                id: 0
            },
            employeeTypeIds: [],
        };
    },
    validators: {// 验证器
        "form.employeeCode": function(value) {//职员编码
            return this.Validator.value(value).required().maxLength(50);
        },
        "form.employeeName": function(value) {//职员名称
            return this.Validator.value(value).required().maxLength(50);
        },
        "form.ouId": function(value) {//所属组织
            return this.Validator.value(value).required().integer();
        }
    },
    created: function() {
        this.getDataList();
        this.getSelectData();
        this.loadTree();
        this.loadDepartTree();
    },
    methods: {
            showErrTips(e) {// 错误提示信息
                $('.tipsWrapper').css({display:'none'});
                // $(".errTipsWrapper").each(function() {
                //     if (
                //     $(e.target)
                //         .parent(".el-input")
                //         .hasClass($(this).attr("name"))
                //     ) {
                //     $(this).addClass("display_block");
                //     } else {
                //     $(this).removeClass("display_block");
                //     }
                // });
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
                    console.log(data);
                    // console.log(data.id);
                    $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                        if($(this).attr('date')==data.id){
                            $(this).click()
                        }
                    });
                    _this.getSelectDepart();
                    _this.loadDepartTree();
                },
                // 成功的提示框
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
                getDataList() {// 获取数据渲染
                    let _this = this;
                    _this.$axios
                        .gets("/api/services/app/EmployeeManagement/Get", {
                        id: this.$route.params.id
                        })
                        .then(rsp => {
                        rsp.result.sex = +rsp.result.sex;
                        rsp.result.ouId = +rsp.result.ouId;
                        rsp.result.deptId = +rsp.result.deptId;
                        _this.form = rsp.result;
                        for (let val of rsp.result.employeeTypes) {
                            _this.employeeTypeIds.push(val.employeeTypeid);
                        }
                        _this.form["employeeTypeIds"] = _this.employeeTypeIds;
                        // console.log( _this.form);
                        // console.log(_this.form.employeeTypeIds);
                        });
                },
        // --------------------------------按钮组功能
                // --------------返回功能
                goBack: function() {//返回
                    this.$store.state.url = "/staff/staffList/default";
                    this.$router.push({ path: this.$store.state.url });
                },
                isBack(){//判断是返回还是取消
                    let _this=this;
                    _this.btnValue='toBack';
                    if(_this.update){
                        _this.dialogUpdateConfirm=true;
                    }else{
                        _this.goBack()
                    }
                },
                sureDoing(){
                    let _this=this;
                    if (_this.btnValue=='toBack') {
                        _this.goBack();
                    }else{
                        _this.dialogUpdateConfirm=false;
                        _this.getDataList();
                        _this.btnValue='';
                        _this.update=false;
                    }
                    
                },
                isUpdate() {//判断是否修改过信息
                    this.update = true;
                },
                cancel() {// 取消
                    let _this=this;
                    _this.btnValue='isCancel';
                    if(_this.update){
                        _this.dialogUpdateConfirm=true;
                    }
                },
                // --------------删除-----------
                confirmDelThis(){//确认单项删除
                    let _this=this;
                    _this.choseAjax='row';
                    _this.dialogDeleteConfirm=true;
                },
                sureAjax(){
                    let _this=this;
                    if(_this.choseAjax=='row'){
                        _this.delThis()
                    }else if(_this.choseAjax=='rows'){
                        _this.delSelected()
                    }
                },
                delThis(){// 删除删除
                    let _this=this;
                    _this.$axios
                    .deletes("/api/services/app/EmployeeManagement/Delete",
                    { id:_this.$route.params.id })
                    .then(rsp => {
                        _this.dialogDeleteConfirm=false;
                        _this.open("删除成功", "el-icon-circle-check", "successERP");
                        _this.goBack();
                    });
                },
                // --------------删除-----------

                goAdd(){//新增
                    this.$store.state.url = "/staff/staffDetail/default";
                    this.$router.push({ path: this.$store.state.url });
                },
                save() {// 保存修改的数据
                    let _this = this;
                    $('.tipsWrapper').css({display:'block'})
                    _this.$validate().then(function(success) {
                        if (success) {
                            $('.tipsWrapper').css({display:'none'})
                            _this.updateList.ouId = _this.form.ouId;
                            _this.updateList.employeeCode = _this.form.employeeCode;
                            _this.updateList.employeeName = _this.form.employeeName;
                            _this.updateList.mobile = _this.form.mobile;
                            _this.updateList.deptId = _this.form.deptId;
                            _this.updateList.sex = _this.form.sex;
                            _this.updateList.birthday = _this.form.birthday;
                            _this.updateList.shopId = _this.form.shopId;
                            _this.updateList.employeeTypeIds = _this.form.employeeTypeIds;
                            _this.updateList.remark = _this.form.remark;
                            _this.updateList.status = _this.form.status;
                            _this.updateList.id = _this.form.id;
                        if (_this.update) {
                            _this.$axios
                            .puts(
                                "/api/services/app/EmployeeManagement/Update",
                                _this.updateList
                            )
                            .then(
                                rsp => {
                                _this.open("修改成功", "el-icon-circle-check", "successERP");
                                //   console.log(_this.updateList);
                                //   this.isForbid = !this.isForbid;
                                _this.update = false;
                                //   _this.isShow = !this.isShow;
                                },
                                rsp => {
                                _this.open("修改失败", "el-icon-error", "faildERP");
                                }
                            );
                        } else {
                            _this.open("没有需要保存的项目", "el-icon-warning", "noticERP");
                        }
                        }
                    });
                },
                
    }
};
</script>

 <style scope>
    .staff_modify_form {
    padding-left: 30%;
    width: 30%;
    margin-bottom: 20px;
    }
    .pl {
    padding-left: 20%;
    }
    .pt {
    padding-top: 10px;
    }
    .fs {
    font-size: 12px;
    }
    .staff-modify-wrapper .el-select {
    display: block;
    }
    .staff-modify-wrapper .btnBd {
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    padding: 5px;
    }
    .bgcolor {
    overflow: visible;
    }
    .staff_modify_form .checkPt {
    padding-top: 5px;
    }
</style>
 <style>
    .staff-modify-wrapper .staff_modify_form .redBorder .el-input__inner{
    border-color: #f66;
    }
    .staff-modify-wrapper .staff_modify_form .el-input__inner {
    border: 1px solid #dcdfe6 ;
    height: 35px !important;
    }
    .staff-modify-wrapper .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
    width: 100%;
    }
</style>


